import { ORDER_STATUS_LIST } from '@/constants';

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
export type OrderHistoryListResponseAPISchema = {
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
  size: number;
  content: OrderHistoryItem[];
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    paged: boolean;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
  };
  numberOfElements: number;
  empty: boolean;
};

export interface OrderHistoryItem {
  orderId: number;
  orderSheetNo: string;
  orderStatus: string;
  orderName: string;
  createdAt: string;
  totalAmount: number;
  orderItems: OrderItem[];
}

// 주문번호 별 데이터 그룹화
export interface GroupedOrderItemByOrderId {
  orderId: number;
  orderStatus: string;
  orderSheetNo: string;
  createdAt: string;
  items: OrderItem[];
}

// 주문내역 상세 조회 API 스키마 (GET 요청 path 파라미터: orderId )
export interface OrderDetailResponseAPISchema {
  orderId: string; // 조회 할 주문 ID
  orderSheetNo: string; // 주문번호; tosspayments에서 사용하는 key
  orderStatus: string;
  totalDiscountAmount: number;
  totalProductAmount: number;
  deliveryFee: number;
  totalAmount: number;
  paymentType: string;
  createdAt: string;
  paidAt: string;
  deliveredAt: string;
  completedAt: string;
  orderItems: OrderItem[];
  recipientName: string;
  recipientPhone: string;
  zipCode: string;
  recipientAddress: string;
  detailAddress: string;
  note: string;
}

export type OrderStatus = (typeof ORDER_STATUS_LIST)[number];
