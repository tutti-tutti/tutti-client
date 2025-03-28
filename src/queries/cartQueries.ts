import { queryOptions } from '@tanstack/react-query';

import { fetchCart } from '@/services';
import { CART_QUERY_KEY } from '@/constants';

export const cartQueryOptions = queryOptions({
  queryKey: [CART_QUERY_KEY.CART],
  queryFn: fetchCart,
});
