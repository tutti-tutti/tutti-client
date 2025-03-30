import { formatDateAfterDays } from '@/utils';
import type { OrderItem } from '@/types';

// 현재 날짜로 부터 3~7일 뒤 'yyyy-mm-dd'로 배송 날짜 예정
export const getExpectedArrivalAt = () =>
  formatDateAfterDays(Math.floor(Math.random() * 5) + 3);

// orderItems에 배송 예상 도착 일자 추가
export const getOrderItemsWithExpectedArrivalAt = (orderItems: OrderItem[]) =>
  orderItems.map(item =>
    !item.expectedArrivalAt
      ? { ...item, ...{ expectedArrivalAt: getExpectedArrivalAt() } }
      : item,
  );
