import { axiosInstance } from '@/lib';
import { CATEGORIES_ENDPOINTS } from '@/constants';

export const fetchCategories = async () => {
  const response = await axiosInstance.get(CATEGORIES_ENDPOINTS.LIST);

  return response.data;
};

export const fetchCategoriesById = async (categoryId: string) => {
  const endpoint = CATEGORIES_ENDPOINTS.DETAIL(categoryId);
  const response = await axiosInstance.get(endpoint);

  return response.data;
};
