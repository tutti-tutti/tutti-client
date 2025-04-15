import type { OrderStatusInfo, OrderStatus } from '@/types';

export const ORDER_CONSTANT = {
  ERROR_MESSAGES: {
    REFUND: '환불 요청 생성 중 오류가 발생했습니다.',
  },
  MESSAGE: {
    NO_DATA_ORDERS: '주문 내역이 없습니다.',
    NOT_FOUND_EXPECTED_SHIPPING_DATE: '배송일 알 수 없음',
    NOT_FOUND_DELIVERY_TRACKING: '지금은 배송 현황을 확인할 수 없습니다.',
    ALL_CANCEL_ORDER_WARNING:
      '주문 번호의 전체 상품 주문이 취소됩니다. 진행 하시겠습니까?',
    ALL_CANCEL_ORDER_SUCCESS: '해당 주문이 전체 취소되었습니다',
    CANCEL_ORDER_WARNING: '해당 상품의 주문을 취소합니다. 진행하시겠습니까?',
    NOT_PARTIAL_CANCEL_ORDER_WARNING:
      '해당 상품은 부분 취소가 불가능합니다. 전체 주문 취소만 가능합니다. 진행하시겠습니까?',
  },
  TEXT_LINK: {
    DETAIL: '주문 상세 보기',
  },
  TEXT_BUTTON: {
    ALL_CANCEL: '전체 주문 취소',
    CANCEL: '주문 취소',
    PENDING: '처리 중...',
    DELIVERY_TRACKING: '배송 조회',
  },
  ORDER_SHEET_NO: '주문번호',
  ORDER_DATE: '주문일',
  EXPECTED_SHIPPING: '도착 예정',
};

export const ORDER_STATUS_LIST = ['READY', 'DONE', 'CANCELED'] as const;

export const ORDER_STATUS: Record<OrderStatus, OrderStatusInfo> = {
  READY: {
    label: '결제 대기',
    variant: {
      color: 'warning',
      style: 'outlineSquare',
    },
  },
  DONE: {
    label: '결제 완료',
    variant: {
      color: 'success',
      style: 'outlineSquare',
    },
  },
  CANCELED: {
    label: '주문 취소',
    variant: {
      color: 'secondary',
      style: 'outlineSquare',
    },
  },
};
