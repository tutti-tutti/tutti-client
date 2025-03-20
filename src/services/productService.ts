import { axiosInstance } from '@/lib';
import { PRODUCTS_ENDPOINTS } from '@/constants';
import { Product } from '@/types';

export const fetchProducts = async () => {
  const response = await axiosInstance.get(PRODUCTS_ENDPOINTS.LIST);

  return response.data;
};

export const fetchRecommededProducts = async () => {
  const response = await axiosInstance.get(PRODUCTS_ENDPOINTS.RECOMMEND);

  return response.data;
};

export const fetchProductById = async (productId: string): Promise<Product> => {
  const endpoint = PRODUCTS_ENDPOINTS.DETAIL(productId);
  const response = await axiosInstance.get(endpoint);

  return response.data;
};
