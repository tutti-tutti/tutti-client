import { axiosInstance } from '@/lib';
import { CART_ENDPOINTS } from '@/constants';
import type { Product } from '@/types';
import { getAccessToken } from './tokenService';
import { fetchProductById } from './productService';

interface CartItem {
  productItemId: number;
  quantity: number;
}

export const mapProductToCartItem = (product: Product, quantity: number) => {
  return {
    ...product,
    productItemId: product.productId,
    productImgUrl: product.titleUrl,
    productItemName: product.name,
    maxQuantity: product.maxPurchaseQuantity || 10,
    quantity,
  };
};

export const fetchLocalCart = (): CartItem[] => {
  if (typeof window === 'undefined') return [];

  const localCart = localStorage.getItem('cart');
  return localCart ? JSON.parse(localCart) : [];
};

export const fetchCart = async () => {
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
            const product = await fetchProductById(String(item.productItemId));
            if (!product) return null;

            return mapProductToCartItem(product, item.quantity);
          } catch (error) {
            console.error('상품 정보를 불러오는 데 실패했습니다.', error);
            return null;
          }
        }),
      );

      return cartItemsWithProducts.filter(Boolean);
    } catch (error) {
      console.error('장바구니 정보를 불러오는 데 실패했습니다.', error);
      throw error;
    }
  }
};

export const addToLocalCart = async (item: CartItem) => {
  const currentCart = fetchLocalCart();

  const existingItemById = currentCart.findIndex(
    cartItem => cartItem.productItemId === item.productItemId,
  );

  let maxQuantity = 10;
  try {
    const product = await fetchProductById(String(item.productItemId));
    if (product) {
      maxQuantity = product.maxPurchaseQuantity || 10;
    }
  } catch (error) {
    console.error('상품 정보를 불러오는 데 실패했습니다.', error);
  }

  if (existingItemById >= 0) {
    const existingItem = currentCart[existingItemById];
    const newQuantity = existingItem.quantity + item.quantity;

    if (newQuantity > maxQuantity) {
      return {
        success: false,
        message: `최대 구매 수량은 ${maxQuantity}개입니다.`,
        cart: currentCart,
      };
    }

    currentCart[existingItemById].quantity = newQuantity;
  } else {
    if (item.quantity > maxQuantity) {
      return {
        success: false,
        message: `최대 구매 수량은 ${maxQuantity}개입니다.`,
        cart: currentCart,
      };
    }

    currentCart.push(item);
  }

  localStorage.setItem('cart', JSON.stringify(currentCart));

  return {
    success: true,
    message: '장바구니에 추가되었습니다.',
    cart: currentCart,
  };
};

export const addCart = async (payload: CartItem) => {
  const accessToken = await getAccessToken();

  if (accessToken) {
    try {
      const { data } = await axiosInstance.post(CART_ENDPOINTS.LIST, payload);
      return data;
    } catch (error) {
      console.error('장바구니에 추가하는 데 실패했습니다.', error);
      throw error;
    }
  } else {
    return addToLocalCart(payload);
  }
};

export const patchCartById = async (cartItemId: string) => {
  const endpoint = CART_ENDPOINTS.DETAIL(cartItemId);
  const response = await axiosInstance.patch(endpoint);

  return response.data;
};
