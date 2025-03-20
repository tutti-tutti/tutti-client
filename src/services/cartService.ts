import { axiosInstance } from '@/lib';
import { CART_ENDPOINTS } from '@/constants';

export const fetchCart = async () => {
  const response = await axiosInstance.get(CART_ENDPOINTS.LIST);

  return response.data;
};

export const patchCartById = async (cartItemId: string) => {
  const endpoint = CART_ENDPOINTS.DETAIL(cartItemId);
  const response = await axiosInstance.patch(endpoint);

  return response.data;
};
