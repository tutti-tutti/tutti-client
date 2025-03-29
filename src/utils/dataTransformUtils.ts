import type { OrderItem, GroupedOrderItemByDeliveredAt } from '@/types';

/**
 * deliveredAt 속성을 기준으로 데이터를 그룹화하여 변환
 * @param data
 * @returns 날짜별로 그룹화된 객체 배열
 */
export const getGroupedOrderItemsByDeliveredAt = (
  data: OrderItem[],
): GroupedOrderItemByDeliveredAt[] => {
  const groupedByDate: { [key: string]: OrderItem[] } = {};

  data.forEach(item => {
    const date = item.deliveredAt;

    if (!groupedByDate[date]) {
      groupedByDate[date] = [];
    }

    groupedByDate[date].push(item);
  });

  const result: GroupedOrderItemByDeliveredAt[] = Object.entries(
    groupedByDate,
  ).map(([date, items]) => {
    return {
      deliveredAt: date,
      items: items,
    };
  });

  result.sort((a, b) => a.deliveredAt.localeCompare(b.deliveredAt));

  return result;
};
