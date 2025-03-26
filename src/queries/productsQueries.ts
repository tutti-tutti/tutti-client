import { queryOptions } from '@tanstack/react-query';

import { QUERY_KEYS_ENDPOINT, PRODUCTS_QUERY_KEY } from '@/constants';
import {
  fetchProducts,
  fetchRecommededProducts,
  fetchProductById,
} from '@/services';

export const productsQueryOptions = queryOptions({
  queryKey: [QUERY_KEYS_ENDPOINT.PRODUCTS, PRODUCTS_QUERY_KEY.LIST],
  queryFn: async () => await fetchProducts(),
});

export const recommededProductsQueryOptions = queryOptions({
  queryKey: [QUERY_KEYS_ENDPOINT.PRODUCTS, PRODUCTS_QUERY_KEY.RECOMMEND],
  queryFn: async () => await fetchRecommededProducts(),
});

export const productByIdQueryOptions = (productId: string) =>
  queryOptions({
    queryKey: [QUERY_KEYS_ENDPOINT.PRODUCTS, productId],
    queryFn: async () => await fetchProductById(productId),
  });
