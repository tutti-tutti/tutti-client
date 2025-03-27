import { axiosInstance } from '@/lib';
import { PAYMENTS_ENDPOINTS } from '@/constants';
import type {
  PaymentsRequestAPISchema,
  PaymentsApproveRequestAPISchema,
  PaymentsDetailResponseAPISchema,
  PaymentsResponseAPISchema,
} from '@/types';

export const requestPayment = async (
  payload: PaymentsRequestAPISchema,
): Promise<PaymentsResponseAPISchema> => {
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

export const fetchPaymentDetailByOrderId = async (
  orderId: string,
): Promise<PaymentsDetailResponseAPISchema> => {
  const response = await axiosInstance.get(
    PAYMENTS_ENDPOINTS.DETAIL_BY_ORDER_ID(orderId),
  );

  return response.data;
};

// 테스트용 paymentId로 조회하는 주문내역 함수 - 클라이언트에서 실제로 사용되지 않음
export const fetchPaymentDetailByPaymentId = async (
  paymentId: string,
): Promise<PaymentsDetailResponseAPISchema> => {
  const response = await axiosInstance.get(
    PAYMENTS_ENDPOINTS.DETAIL_BY_PAYMENT_ID(paymentId),
  );

  return response.data;
};
