import { formatDateAfterDays } from '@/utils';
import type { OrderItem, BreadcrumbItem } from '@/types';

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

// 경로를 기반으로 빵 부스러기 항목 생성
export const generateBreadcrumbItems = (
  pathname: string,
  homeLabel: string,
): BreadcrumbItem[] => {
  const pathSegments = pathname.split('/').filter(Boolean);

  // 항상 홈 링크로 시작
  const items: BreadcrumbItem[] = [
    { label: homeLabel, href: '/', isCurrent: pathSegments.length === 0 },
  ];

  // 경로 세그먼트를 기반으로 항목 생성
  let currentPath = '';

  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === pathSegments.length - 1;

    // 세그먼트에 대한 레이블 결정 (기본 레이블 또는 세그먼트 자체)
    const label =
      segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

    items.push({
      label,
      href: currentPath,
      isCurrent: isLast,
    });
  });

  return items;
};
