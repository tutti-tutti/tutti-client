import type {
  OrderItem,
  GroupedOrderItemByExpectedArrivalAt,
  OrderHistoryItem,
  GroupedOrderHistoryItemByOrderId,
} from '@/types';

/**
 * deliveredAt 속성을 기준으로 OrderItem[] 데이터를 그룹화하여 변환
 * @param orderItems OrderItem[]
 * @returns 날짜별로 그룹화된 객체 배열 GroupedOrderItemByExpectedArrivalAt[]
 */
export const getGroupedOrderItemsByDeliveredAt = (
  orderItems: OrderItem[],
): GroupedOrderItemByExpectedArrivalAt[] => {
  const groupedByDate: { [key: string]: OrderItem[] } = {};

  orderItems.forEach(item => {
    const date = item.expectedArrivalAt as string;

    if (!groupedByDate[date]) {
      groupedByDate[date] = [];
    }

    groupedByDate[date].push(item);
  });

  const result: GroupedOrderItemByExpectedArrivalAt[] = Object.entries(
    groupedByDate,
  ).map(([date, items]) => {
    return {
      expectedArrivalAt: date,
      items: items,
    };
  });

  result.sort((a, b) => a.expectedArrivalAt.localeCompare(b.expectedArrivalAt));

  return result;
};

/**
 * orderId 속성을 기준으로 OrderHistoryItem[] 데이터를 그룹화하여 변환
 * @param orderHistoryItems OrderHistoryItem[]
 * @returns GroupedOrderHistoryItemByOrderId[]
 */
export const getGroupOrderHistoryItemsByOrderId = (
  orderHistoryItems: OrderHistoryItem[],
): GroupedOrderHistoryItemByOrderId[] => {
  const groupedByOrderId = orderHistoryItems.reduce<
    Record<number, OrderHistoryItem[]>
  >((acc, item) => {
    if (!acc[item.orderId]) {
      acc[item.orderId] = [];
    }

    acc[item.orderId].push(item);

    return acc;
  }, {});

  return Object.entries(groupedByOrderId).map(([orderId, items]) => ({
    orderId: Number(orderId),
    items,
  }));
};
