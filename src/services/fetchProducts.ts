import { axiosInstance } from '@/lib/axios';
import { PRODUCT_PATHS } from '@/constants';

export const fetchProducts = async () => {
  const response = await axiosInstance.get(PRODUCT_PATHS.LIST);

  return response.data;
};

export const fetchRecommededProducts = async () => {
  const response = await axiosInstance.get(PRODUCT_PATHS.RECOMMEND);

  return response.data;
};
