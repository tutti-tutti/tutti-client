'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn, generateBreadcrumbItems } from '@/utils';
import type { BreadcrumbItem } from '@/types';

type BreadcrumbProps = {
  linkItems?: BreadcrumbItem[];
  homeLabel?: string;
  separator?: string;
  className?: string;
};

export const Breadcrumb = ({
  linkItems,
  homeLabel = '홈',
  separator = '>',
  className = '',
}: BreadcrumbProps) => {
  const pathname = usePathname();

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

export default Breadcrumb;
