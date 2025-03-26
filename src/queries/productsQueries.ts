import { queryOptions } from '@tanstack/react-query';

import { QUERY_KEYS_ENDPOINT, PRODUCTS_QUERY_KEY } from '@/constants';
import {
  fetchProducts,
  fetchRecommededProducts,
  fetchProductById,
} from '@/services';

export const productsQueryOptions = queryOptions({
  queryKey: [QUERY_KEYS_ENDPOINT.PRODUCTS, PRODUCTS_QUERY_KEY.LATEST],
  queryFn: fetchProducts,
  staleTime: 5 * 60 * 1000,
  gcTime: 30 * 60 * 1000,
});

export const recommededProductsQueryOptions = queryOptions({
  queryKey: [QUERY_KEYS_ENDPOINT.PRODUCTS, PRODUCTS_QUERY_KEY.RECOMMEND],
  queryFn: fetchRecommededProducts,
});

export const productByIdQueryOptions = (productId: string) =>
  queryOptions({
    queryKey: [QUERY_KEYS_ENDPOINT.PRODUCTS, productId],
    queryFn: () => fetchProductById(productId),
    staleTime: 15 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
