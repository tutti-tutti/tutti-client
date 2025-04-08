import { axiosInstance } from '@/lib';
import {
  CART_ENDPOINTS,
  CART_CONSTANTS,
  PRODUCTS_CONSTANTS,
} from '@/constants';
import type {
  Product,
  ProductOption,
  CartProductItem,
  LocalCartItem,
  CartAddRequestSchema,
} from '@/types';
import { getAccessToken } from './tokenService';
import { fetchProductById } from './productService';

const {
  FETCH_FAIL_MESSAGE,
  MAX_CART_ITEMS_COUNT,
  NO_USER_MAX_ADD_COUNT,
  INVALID_OPTION,
  MAX_QUANTITY,
  ADD_SUCCESS_MESSAGE,
  ADD_FAIL_MESSAGE,
  DELETE_SELECTED_SUCCESS_MESSAGE,
  DELETE_SUCCESS_MESSAGE,
  DELETE_FAIL_MESSAGE,
  EMPTY_CART_MESSAGE,
} = CART_CONSTANTS;

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
    quantity,
    firstOptionName: selectedOption.firstOptionName || undefined,
    firstOptionValue: selectedOption.firstOptionValue || undefined,
    secondOptionName: selectedOption.secondOptionName || undefined,
    secondOptionValue: selectedOption.secondOptionValue || undefined,
    sellingPrice: selectedOption.sellingPrice,
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
      console.error(FETCH_FAIL_MESSAGE, error);
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

            const selectedOption = product.productOptionItems.find(
              option => option.productItemId === item.productItemId,
            );

            if (!selectedOption) return null;

            return mapProductToCartItem(product, selectedOption, item.quantity);
          } catch (error) {
            console.error(PRODUCTS_CONSTANTS.FETCH_FAIL_MESSAGE, error);
            return null;
          }
        }),
      );

      return cartItemsWithProducts.filter(Boolean) as CartProductItem[];
    } catch (error) {
      console.error(FETCH_FAIL_MESSAGE, error);
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

  if (currentCart.length >= MAX_CART_ITEMS_COUNT) {
    const existingItemIndex = currentCart.findIndex(
      cartItem => cartItem.productItemId === productItemId,
    );

    if (existingItemIndex < 0) {
      return {
        success: false,
        message: NO_USER_MAX_ADD_COUNT(MAX_CART_ITEMS_COUNT),
        cart: currentCart,
      };
    }
  }

  const existingItemById = currentCart.findIndex(
    cartItem => cartItem.productItemId === productItemId,
  );

  let maxQuantity = 10;
  try {
    const product = await fetchProductById(String(productId));
    if (product) {
      maxQuantity = product.maxPurchaseQuantity || 10;

      const optionExists = product.productOptionItems.some(
        option => option.productItemId === productItemId,
      );

      if (!optionExists) {
        return {
          success: false,
          message: INVALID_OPTION,
          cart: currentCart,
        };
      }
    }
  } catch (error) {
    console.error(PRODUCTS_CONSTANTS.FETCH_FAIL_MESSAGE, error);
  }

  if (existingItemById >= 0) {
    const existingItem = currentCart[existingItemById];
    const newQuantity = existingItem.quantity + quantity;

    if (newQuantity > maxQuantity) {
      return {
        success: false,
        message: MAX_QUANTITY(maxQuantity),
        cart: currentCart,
      };
    }

    currentCart[existingItemById].quantity = newQuantity;
  } else {
    if (quantity > maxQuantity) {
      return {
        success: false,
        message: MAX_QUANTITY(maxQuantity),
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
    message: ADD_SUCCESS_MESSAGE,
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
      console.error(ADD_FAIL_MESSAGE, error);
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
            ? DELETE_SELECTED_SUCCESS_MESSAGE
            : DELETE_SUCCESS_MESSAGE,
      };
    } catch (error) {
      console.error(DELETE_FAIL_MESSAGE, error);
      throw error;
    }
  } else {
    try {
      const localCart = localStorage.getItem('cart');
      if (!localCart) {
        return {
          success: false,
          message: EMPTY_CART_MESSAGE,
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
            ? DELETE_SELECTED_SUCCESS_MESSAGE
            : DELETE_SUCCESS_MESSAGE,
        cart: updatedCart,
      };
    } catch (error) {
      console.error(DELETE_FAIL_MESSAGE, error);
      throw error;
    }
  }
};
