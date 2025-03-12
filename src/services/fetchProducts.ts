import { axiosInstance } from '@/lib/axios';

export const fetchProducts = async () => {
  const response = await axiosInstance.get('/products');

  return response.data;
};
