import { axiosInstance } from '@/lib';
import { CART_ENDPOINTS } from '@/constants';
import type {
  Product,
  ProductOption,
  CartProductItem,
  LocalCartItem,
  CartAddRequestSchema,
} from '@/types';
import { getAccessToken } from './tokenService';
import { fetchProductById } from './productService';

export const mapProductToCartItem = (
  product: Product,
  selectedOption: ProductOption,
  quantity: number,
): CartProductItem => {
  return {
    cartItemId: -1,
    storeName: product.storeName,
    productItemId: selectedOption.productItemId,
    productImgUrl: product.titleUrl as string,
    productItemName: product.name,
    originalPrice: product.originalPrice,
    sellingPrice: product.sellingPrice + (selectedOption.additionalPrice || 0),
    quantity,
    firstOptionName: selectedOption.firstOptionName || undefined,
    firstOptionValue: selectedOption.firstOptionValue || undefined,
    secondOptionName: selectedOption.secondOptionName || undefined,
    secondOptionValue: selectedOption.secondOptionValue || undefined,
    soldOut: false,
    maxQuantity: product.maxPurchaseQuantity || 10,
    checked: true,
  };
};

export const fetchLocalCart = (): LocalCartItem[] => {
  if (typeof window === 'undefined') return [];

  const localCart = localStorage.getItem('cart');
  return localCart ? JSON.parse(localCart) : [];
};

export const fetchCart = async (): Promise<CartProductItem[]> => {
  const accessToken = await getAccessToken();

  if (accessToken) {
    try {
      const response = await axiosInstance.get(CART_ENDPOINTS.LIST);
      return response.data;
    } catch (error) {
      console.error('장바구니를 불러오는 데 실패했습니다.', error);
      throw error;
    }
  } else {
    const localCart = fetchLocalCart();

    if (localCart.length === 0) {
      return [];
    }

    try {
      const cartItemsWithProducts = await Promise.all(
        localCart.map(async item => {
          try {
            const product = await fetchProductById(String(item.productId));
            if (!product) return null;

            const selectedOption = product.productItems.find(
              option => option.productItemId === item.productItemId,
            );

            if (!selectedOption) return null;

            return mapProductToCartItem(product, selectedOption, item.quantity);
          } catch (error) {
            console.error('상품 정보를 불러오는 데 실패했습니다.', error);
            return null;
          }
        }),
      );

      return cartItemsWithProducts.filter(Boolean) as CartProductItem[];
    } catch (error) {
      console.error('장바구니 정보를 불러오는 데 실패했습니다.', error);
      throw error;
    }
  }
};

export const addToLocalCart = async (
  productId: number,
  productItemId: number,
  quantity: number,
) => {
  const currentCart = fetchLocalCart();

  const existingItemById = currentCart.findIndex(
    cartItem => cartItem.productItemId === productItemId,
  );

  let maxQuantity = 10;
  try {
    const product = await fetchProductById(String(productId));
    if (product) {
      maxQuantity = product.maxPurchaseQuantity || 10;

      const optionExists = product.productItems.some(
        option => option.productItemId === productItemId,
      );

      if (!optionExists) {
        return {
          success: false,
          message: '유효하지 않은 상품 옵션입니다.',
          cart: currentCart,
        };
      }
    }
  } catch (error) {
    console.error('상품 정보를 불러오는 데 실패했습니다.', error);
  }

  if (existingItemById >= 0) {
    const existingItem = currentCart[existingItemById];
    const newQuantity = existingItem.quantity + quantity;

    if (newQuantity > maxQuantity) {
      return {
        success: false,
        message: `최대 구매 수량은 ${maxQuantity}개입니다.`,
        cart: currentCart,
      };
    }

    currentCart[existingItemById].quantity = newQuantity;
  } else {
    if (quantity > maxQuantity) {
      return {
        success: false,
        message: `최대 구매 수량은 ${maxQuantity}개입니다.`,
        cart: currentCart,
      };
    }

    currentCart.push({
      productId,
      productItemId,
      quantity,
    });
  }

  localStorage.setItem('cart', JSON.stringify(currentCart));

  return {
    success: true,
    message: '장바구니에 추가되었습니다.',
    cart: currentCart,
  };
};

export const addCart = async (
  productId: number,
  productItemId: number,
  quantity: number,
) => {
  const accessToken = await getAccessToken();

  if (accessToken) {
    try {
      const apiPayload: CartAddRequestSchema = {
        cartItems: [
          {
            productItemId,
            quantity,
          },
        ],
      };
      const { data } = await axiosInstance.post(
        CART_ENDPOINTS.LIST,
        apiPayload,
      );
      return data;
    } catch (error) {
      console.error('장바구니에 추가하는 데 실패했습니다.', error);
      throw error;
    }
  } else {
    return addToLocalCart(productId, productItemId, quantity);
  }
};

export const removeFromCart = async (
  cartItems: CartProductItem[],
  productItemIds: number[],
) => {
  const accessToken = await getAccessToken();
  const isLoggedIn = !!accessToken;

  let idsToRemove: number[];
  if (isLoggedIn) {
    idsToRemove = cartItems
      .filter(item => productItemIds.includes(item.productItemId))
      .map(item => item.cartItemId);
  } else {
    idsToRemove = productItemIds;
  }

  if (isLoggedIn) {
    try {
      const deletePromises = idsToRemove.map(id =>
        axiosInstance.patch(CART_ENDPOINTS.DETAIL(String(id))),
      );

      await Promise.all(deletePromises);

      return {
        success: true,
        message:
          productItemIds.length > 1
            ? '선택한 상품이 삭제되었습니다.'
            : '상품이 삭제되었습니다.',
      };
    } catch (error) {
      console.error('장바구니 상품 삭제에 실패했습니다.', error);
      throw error;
    }
  } else {
    try {
      const localCart = localStorage.getItem('cart');
      if (!localCart) {
        return {
          success: false,
          message: '장바구니 비어있습니다.',
          cart: [],
        };
      }

      const cartItems: LocalCartItem[] = JSON.parse(localCart);
      const updatedCart = cartItems.filter(
        item => !idsToRemove.includes(item.productItemId),
      );

      localStorage.setItem('cart', JSON.stringify(updatedCart));

      return {
        success: true,
        message:
          productItemIds.length > 1
            ? '선택한 상품이 삭제되었습니다.'
            : '상품이 삭제되었습니다.',
        cart: updatedCart,
      };
    } catch (error) {
      console.error('장바구니 삭제에 실패했습니다.', error);
      throw error;
    }
  }
};
