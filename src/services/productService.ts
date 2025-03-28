import { axiosInstance } from '@/lib';
import { PRODUCTS_ENDPOINTS } from '@/constants';
import { Product } from '@/types';

export const fetchProducts = async () => {
  const response = await axiosInstance.get(PRODUCTS_ENDPOINTS.LATEST);

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

// export const fetchProductsWithPagination = async (
//   pageParm = 1,
//   pageSize = 20,
// ) => {
//   const allProducts = await fetchProducts();

//   const startIndex = (pageParm - 1) * pageSize;
//   const endIndex = startIndex + pageSize;

//   const paginatedItems = allProducts.slice(startIndex, endIndex);

//   const hasNextPage = endIndex < allProducts.length;

//   return {
//     items: paginatedItems,
//     nextPage: hasNextPage ? pageParm + 1 : null,
//     totalItems: allProducts.length,
//   };
// };
