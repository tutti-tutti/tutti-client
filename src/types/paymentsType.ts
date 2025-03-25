import { OrderProductItem } from './ordersType';

// 결제 수단 타입
export type PaymentType = 'CARD';

// 주문/결제 요청 API 스키마
export interface PaymentsRequestAPISchema {
  totalDiscountAmount: number;
  totalProductAmount: number;
  deliveryFee: number;
  totalAmount: number;
  paymentType: PaymentType;
  orderItems: OrderProductItem[];
}

// 결제 승인 API 스키마
export interface PaymentsApproveRequestAPISchema {
  paymentKey: string;
  orderId: string;
  amount: number;
}

// 결제 조회 API 스키마
export interface PaymentsDetailResponseAPISchema {
  paymentId: number;
  orderName: string;
  amount: number;
  paymentStatus: string;
  completedAt: string;
  orderId: number;
  paymentMethodName: string;
}
