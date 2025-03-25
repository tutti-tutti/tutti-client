import { PaymentType } from './paymentsType';

export interface OrderProductItem {
  productItemId: number;
  quantity: number;
}

export interface OrderItem {
  productItemId: number;
  productName: string;
  productImgUrl: string;
  firstOptionName: string;
  firstOptionValue: string;
  secondOptionName: string;
  secondOptionValue: string;
  quantity: number;
  price: number;
}

// 주문서 요청 API 스키마
export interface OrderCheckoutRequestAPISchema {
  orderItems: OrderProductItem[];
}

// 주문서 응답 API 스키마
export interface OrderCheckoutResponseAPISchema {
  totalDiscountAmount: number;
  totalProductAmount: number;
  deliveryFee: number;
  totalAmount: number;
  orderItems: OrderItem[];
}

// 주문내역 상세 조회 API 스키마
export interface OrderDetailResponseAPISchema {
  orderNumber: string;
  orderStatus: string;
  totalDiscountAmount: number;
  totalProductAmount: number;
  deliveryFee: number;
  totalAmount: number;
  paymentType: PaymentType;
  orderedAt: string;
  paidAt: string;
  deliveredAt: string;
  completedAt: string;
  orderItems: OrderItem[];
  recipientName: string;
  recipientPhone: string;
  recipientAddress: string;
  zipCode: string;
  note: string;
  storeName: string;
}

// 주문내역 조회 API 스키마
export interface OrderHistoryListItem {
  orderId: number;
  orderNumber: string;
  orderName: string;
  completedAt: string;
  totalAmount: number;
  orderStatus: string;
  orderItems: OrderItem[];
}

export type OrderHistoryListResponseAPISchema = OrderHistoryListItem[];
