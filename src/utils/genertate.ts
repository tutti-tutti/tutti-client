import { PATH } from '@/constants';
import { formatDateAfterDays } from '@/utils';
import type { OrderItem, BreadcrumbItem } from '@/types';

/** 현재 날짜로 부터 3~7일 뒤 'yyyy-mm-dd'로 배송 날짜 예정 */
export const getExpectedArrivalAt = () =>
  formatDateAfterDays(Math.floor(Math.random() * 5) + 3);

/** orderItems에 배송 예상 도착 일자 추가 */
export const getOrderItemsWithExpectedArrivalAt = (orderItems: OrderItem[]) =>
  orderItems.map(item =>
    !item.expectedArrivalAt
      ? { ...item, ...{ expectedArrivalAt: getExpectedArrivalAt() } }
      : item,
  );

/** PATH 상수에서 URL에 해당하는 이름 찾기 */
export const getNameFromPath = (path: string): string => {
  const pathEntry = Object.entries(PATH).find(([, pathItem]) => {
    if (typeof pathItem.url === 'function') return false;

    return pathItem.url === path;
  });

  if (!pathEntry) {
    // 일치하는 항목이 없을 경우 경로의 마지막 세그먼트를 사용자 친화적으로 변환하여 반환
    const lastSegment = path.split('/').filter(Boolean).pop() || '';

    return (
      lastSegment.charAt(0).toUpperCase() +
      lastSegment.slice(1).replace(/-/g, ' ')
    );
  }

  return pathEntry[1].name;
};

/** 경로를 기반으로 빵 부스러기 항목 생성 */
export const generateBreadcrumbItems = (
  pathname: string,
  homeLabel: string,
): BreadcrumbItem[] => {
  const pathSegments = pathname.split('/').filter(Boolean);

  // 항상 홈 링크로 시작
  const items: BreadcrumbItem[] = [
    {
      label: homeLabel,
      href: PATH.HOME.url,
      isCurrent: pathSegments.length === 0,
    },
  ];

  // 경로 세그먼트를 기반으로 항목 생성
  let currentPath = '';

  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === pathSegments.length - 1;

    // 세그먼트에 대한 레이블 결정 (기본 레이블 또는 세그먼트 자체)
    const label = getNameFromPath(currentPath);

    items.push({
      label,
      href: currentPath,
      isCurrent: isLast,
    });
  });

  return items;
};
