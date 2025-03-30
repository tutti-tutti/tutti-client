export interface OrderProductItem {
  productItemId: number;
  quantity: number;
}

export interface OrderItem {
  storeId: number;
  storeName: string;
  productItemId: number;
  productName: string;
  productImgUrl: string;
  firstOptionName: string | null;
  firstOptionValue: string | null;
  secondOptionName: string | null;
  secondOptionValue: string | null;
  quantity: number;
  price: number;
  expectedArrivalAt: string; // 배송 도착 예상 날짜
}

//  배송 도착 예상 날짜 별 데이터 그룹화
export interface GroupedOrderItemByExpectedArrivalAt {
  expectedArrivalAt: string;
  items: OrderItem[];
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

// 주문내역 조회 API 스키마
export type OrderHistoryListResponseAPISchema = OrderHistoryItem[];

export interface OrderHistoryItem {
  orderId: number;
  orderNumber: string;
  orderName: string;
  completedAt: string;
  totalAmount: number;
  orderStatus: string;
  orderItems: OrderItem[];
}

// 주문번호 별 데이터 그룹화
export interface GroupedOrderItemByOrderId {
  orderId: number;
  items: OrderItem[];
}

// 주문내역 상세 조회 API 스키마
export interface OrderDetailResponseAPISchema {
  orderNumber: string;
  orderStatus: string;
  totalDiscountAmount: number;
  totalProductAmount: number;
  deliveryFee: number;
  totalAmount: number;
  paymentType: string;
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
