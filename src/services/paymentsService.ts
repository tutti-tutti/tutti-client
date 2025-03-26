import { axiosInstance } from '@/lib';
import { PAYMENTS_ENDPOINTS } from '@/constants';
import type {
  PaymentsRequestAPISchema,
  PaymentsApproveRequestAPISchema,
  PaymentsDetailResponseAPISchema,
} from '@/types';

export const requestPayment = async (payload: PaymentsRequestAPISchema) => {
  const response = await axiosInstance.post(PAYMENTS_ENDPOINTS.CREATE, payload);

  return response.data;
};

export const confirmPayApproveSuccess = async (
  payload: PaymentsApproveRequestAPISchema,
) => {
  const response = await axiosInstance.post(
    PAYMENTS_ENDPOINTS.CONFIRM,
    payload,
  );

  return response.data;
};

export const fetchPaymentDetail = async (
  orderId: number,
): Promise<PaymentsDetailResponseAPISchema> => {
  const response = await axiosInstance.get(
    PAYMENTS_ENDPOINTS.DETAIL(`${orderId}`),
  );

  return response.data;
};
