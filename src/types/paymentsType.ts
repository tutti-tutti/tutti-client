/**NOTE - ordersType과 paymentsType을 나누는 기준은 endpoint 입니다 */

import { OrderProductItem } from './ordersType';

// 주문/결제 요청 API 스키마
export interface PaymentsRequestAPISchema {
  totalDiscountAmount: number;
  totalProductAmount: number;
  deliveryFee: number;
  totalAmount: number;
  paymentType: string;
  orderItems: OrderProductItem[];
  recipientName: string;
  recipientPhone: string;
  recipientAddress: string;
  zipCode: string;
  note: string;
}

// 주문/결제 응답 API 스키마
export interface PaymentsResponseAPISchema {
  orderNumber: string;
  orderName: string;
  amount: number;
}

// 결제 승인 요청 API 스키마
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
