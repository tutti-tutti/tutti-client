import { queryOptions } from '@tanstack/react-query';

import { QUERY_KEYS_ENDPOINT, ORDER_QUERY_KEY } from '@/constants';
import { checkoutOrder, fetchOrderHistory, fetchOrderDetail } from '@/services';
import type { CheckoutRequestItem } from '@/types';

export const checkoutOrderQueryOptions = (
  checkoutRequestItems: CheckoutRequestItem[],
) =>
  queryOptions({
    queryKey: [QUERY_KEYS_ENDPOINT.ORDERS, ORDER_QUERY_KEY.CHECKOUT],
    queryFn: async () => await checkoutOrder(checkoutRequestItems),
  });

export const orderHistoryListQueryOptions = queryOptions({
  queryKey: [QUERY_KEYS_ENDPOINT.ORDERS],
  queryFn: async () => await fetchOrderHistory(),
});

export const orderDetailQueryOptions = (orderId: string) =>
  queryOptions({
    queryKey: [QUERY_KEYS_ENDPOINT.ORDERS, orderId],
    queryFn: async () => await fetchOrderDetail(orderId),
  });
