import { axiosInstance } from '@/lib';
import { PAYMENTS_ENDPOINTS, REFUND_ENDPOINTS } from '@/constants';
import type {
  PaymentsRequestAPISchema,
  PaymentsApproveRequestAPISchema,
  PaymentsDetailResponseAPISchema,
  PaymentsResponseAPISchema,
  RefundRequestAPISSchema,
} from '@/types';

export const requestPayment = async (
  payload: PaymentsRequestAPISchema,
): Promise<PaymentsResponseAPISchema> => {
  const response = await axiosInstance.post(PAYMENTS_ENDPOINTS.CREATE, payload);

  return response.data;
};

// 토스페이면츠 등 PG 결제 승인 후 받은 데이터를 전달하는 API
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

// 환불 요청 (현재 판매자 프로세스가 없으므로 결제 취소 api를 대신)
export const requestRefundPayment = async (
  payload: RefundRequestAPISSchema,
) => {
  const response = await axiosInstance.post(REFUND_ENDPOINTS.REQUEST, payload);

  return response.data;
};
