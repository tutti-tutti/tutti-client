import { queryOptions } from '@tanstack/react-query';

import { QUERY_KEYS_ENDPOINT, ORDER_QUERY_KEY } from '@/constants';
import {
  requestPayment,
  confirmPayApproveSuccess,
  fetchPaymentDetailByOrderId,
} from '@/services';
import {
  PaymentsRequestAPISchema,
  PaymentsApproveRequestAPISchema,
} from '@/types';

export const requestPaymentQueryOptions = (payload: PaymentsRequestAPISchema) =>
  queryOptions({
    queryKey: [QUERY_KEYS_ENDPOINT.PAYMENTS, ORDER_QUERY_KEY.CHECKOUT],
    queryFn: async () => await requestPayment(payload),
  });

export const confirmPayApproveSuccessQueryOptions = (
  payload: PaymentsApproveRequestAPISchema,
) =>
  queryOptions({
    queryKey: [QUERY_KEYS_ENDPOINT.PAYMENTS, ORDER_QUERY_KEY.LIST],
    queryFn: async () => await confirmPayApproveSuccess(payload),
  });

export const fetchPaymentDetailQueryOptions = (orderId: string) =>
  queryOptions({
    queryKey: [QUERY_KEYS_ENDPOINT.PAYMENTS, orderId],
    queryFn: async () => await fetchPaymentDetailByOrderId(orderId),
  });
