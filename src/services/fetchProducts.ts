import { axiosInstance } from '@/lib/axios';
import { PRODUCT_PATHS } from '@/constants';
import { Product } from '@/types';

export const fetchProducts = async () => {
  const response = await axiosInstance.get(PRODUCT_PATHS.LIST);

  return response.data;
};

export const fetchRecommededProducts = async () => {
  const response = await axiosInstance.get(PRODUCT_PATHS.RECOMMEND);

  return response.data;
};

export const fetchProductById = async (productId: string): Promise<Product> => {
  const endpoint = PRODUCT_PATHS.DETAIL.replace(':productId', productId);
  const response = await axiosInstance.get(endpoint);

  return response.data;
};
