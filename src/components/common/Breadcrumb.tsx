'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils';

type BreadcrumbItem = {
  label: string;
  href: string;
  isCurrent?: boolean;
};

type BreadcrumbProps = {
  linkItems?: BreadcrumbItem[];
  homeLabel?: string;
  separator?: string;
  className?: string;
};

const defaultLabels: Record<string, string> = {
  home: '홈',
  my: '마이페이지',
  orders: '주문내역',
};

export const Breadcrumb = ({
  linkItems,
  homeLabel = '홈',
  separator = '>',
  className = '',
}: BreadcrumbProps) => {
  const pathname = usePathname();

  // linkItems가 제공된 경우 그것만 사용, 아니면 자동 생성
  const breadcrumbItems =
    linkItems || generateBreadcrumbItems(pathname, homeLabel);

  return (
    <nav aria-label="breadcrumb" className={cn('ml-auto py-2', className)}>
      <ol className="flex flex-wrap items-center text-sm">
        {breadcrumbItems.map((item, index) => (
          <li
            key={`${item.href}-${index}`}
            className={cn(
              'text-text-tertiary flex items-center',
              item.isCurrent && 'font-medium',
            )}
          >
            {index > 0 && (
              <span
                className="text-text-tertiary mx-2 select-none"
                aria-hidden="true"
              >
                {separator}
              </span>
            )}

            {item.isCurrent ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-text-info transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// 경로를 기반으로 빵 부스러기 항목 생성
function generateBreadcrumbItems(
  pathname: string,
  homeLabel: string,
): BreadcrumbItem[] {
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
    const segmentForLabel = segment.toLowerCase();
    const label =
      defaultLabels[segmentForLabel] ||
      segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

    items.push({
      label,
      href: currentPath,
      isCurrent: isLast,
    });
  });

  return items;
}

export default Breadcrumb;
