import type {
  OrderItem,
  GroupedOrderItemByExpectedArrivalAt,
  OrderHistoryItem,
  GroupedOrderItemByOrderId,
} from '@/types';

/**
 * expectedArrivalAt 속성을 기준으로 OrderItem[] 데이터를 그룹화하여 변환
 * @param orderItems OrderItem[]
 * @returns 날짜별로 그룹화된 객체 배열 GroupedOrderItemByExpectedArrivalAt[]
 */
export const getGroupedOrderItemsByExpectedArrivalAt = (
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
 * orderId 속성을 기준으로 OrderItem[] 데이터를 그룹화하여 변환
 * @param orderHistoryItems OrderHistoryItem[]
 * @returns GroupedOrderItemByOrderId[]
 */
export const getGroupOrderItemsByOrderId = (
  orderHistoryItems: OrderHistoryItem[],
): GroupedOrderItemByOrderId[] => {
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
    items: items.flatMap(item => item.orderItems || []),
  }));
};
