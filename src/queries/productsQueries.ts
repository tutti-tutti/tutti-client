import { queryOptions } from '@tanstack/react-query';

import { QUERY_KEYS_ENDPOINT, PRODUCTS_QUERY_KEY } from '@/constants';
import type { Product } from '@/types';
import {
  fetchProducts,
  fetchRecommededProducts,
  fetchProductById,
} from '@/services';

export const productsQueryOptions = queryOptions({
  queryKey: [QUERY_KEYS_ENDPOINT.PRODUCTS, PRODUCTS_QUERY_KEY.LIST],
  queryFn: async () => {
    const res = await fetchProducts();

    return res;
  },
});

export const recommededProductsQueryOptions = queryOptions({
  queryKey: [QUERY_KEYS_ENDPOINT.PRODUCTS, PRODUCTS_QUERY_KEY.RECOMMEND],
  queryFn: async () => {
    const res = await fetchRecommededProducts();

    return res;
  },
});

export const productByIdQueryOptions = (productId: string) =>
  queryOptions({
    queryKey: [QUERY_KEYS_ENDPOINT.PRODUCTS, productId],
    queryFn: async () => {
      const res: Product = await fetchProductById(productId);

      return res;
    },
  });
