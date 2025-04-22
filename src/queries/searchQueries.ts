import { infiniteQueryOptions } from '@tanstack/react-query';

import { fetchSearchProductsWithPagination } from '@/services';
import { PRODUCTS_ENDPOINTS, QUERY_KEYS_ENDPOINT } from '@/constants';

export const searchProductsPrefetchInfiniteQueryOptions = (
  searchWord: string,
  cursorId?: number,
  size = 20,
) => ({
  queryKey: [
    QUERY_KEYS_ENDPOINT.PRODUCTS,
    PRODUCTS_ENDPOINTS.SEARCH,
    searchWord,
  ],
  queryFn: () => fetchSearchProductsWithPagination(searchWord, cursorId, size),
  initialPageParam: cursorId,
});

export const searchProductsInfiniteQueryOptions = (
  searchWord: string,
  size = 20,
) =>
  infiniteQueryOptions({
    queryKey: [
      QUERY_KEYS_ENDPOINT.PRODUCTS,
      PRODUCTS_ENDPOINTS.SEARCH,
      searchWord,
    ],
    initialPageParam: undefined as number | undefined,
    queryFn: ({ pageParam }) =>
      fetchSearchProductsWithPagination(searchWord, pageParam, size),
    getNextPageParam: lastPage =>
      lastPage.hasNext ? lastPage.nextCursorId : undefined,
    enabled: !!searchWord,
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
