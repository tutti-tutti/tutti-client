import { axiosInstance, staticAxios } from '@/lib';
import { PRODUCTS_ENDPOINTS } from '@/constants';
import { Product, PaginatedProductsResponseAPISchema } from '@/types';

export const fetchProducts = async () => {
  const response = await staticAxios.get(PRODUCTS_ENDPOINTS.LATEST);

  return response.data;
};

export const fetchRecommededProducts = async () => {
  const response = await axiosInstance.get(PRODUCTS_ENDPOINTS.RECOMMEND);

  return response.data;
};

export const fetchProductById = async (productId: string): Promise<Product> => {
  const endpoint = PRODUCTS_ENDPOINTS.DETAIL(productId);
  const response = await staticAxios.get(endpoint);

  return response.data;
};

export const fetchProductsWithPagination = async (
  cursorId?: number,
  size: number = 20,
): Promise<PaginatedProductsResponseAPISchema> => {
  const params: Record<string, string | number> = { size };

  if (cursorId !== undefined) {
    params.cursorId = cursorId;
  }

  const response = await axiosInstance.get(PRODUCTS_ENDPOINTS.PAGINATION, {
    params,
  });

  return response.data;
};

export const fetchSearchProductsWithPagination = async (
  keyword: string = '',
  cursorId?: number,
  size: number = 20,
): Promise<PaginatedProductsResponseAPISchema> => {
  const response = await axiosInstance.post(PRODUCTS_ENDPOINTS.SEARCH, {
    keyword: keyword,
    cursorId: cursorId ?? null,
    size: size,
  });

  return response.data;
};
