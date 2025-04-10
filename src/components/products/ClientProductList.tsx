'use client';

import { useCallback, useEffect, useState, useMemo } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';

import { productsInfiniteQueryOptions } from '@/queries';
import { useProductListVirtualizer, useProductReviews } from '@/hooks';
import type { Product, ProductReviewInfo } from '@/types';
import ProductItem from './ProductItem';
import { MoreViewButton } from '../common';
import ProductListSkeleton from './skeleton/ProductListSkeleton';

interface ClientProductListProps {
  productReviews: ProductReviewInfo[];
}

const FIRST_PAGE_LOADED_KEY = 'products_first_page_loaded';

const ClientProductList = ({ productReviews = [] }: ClientProductListProps) => {
  const [isFirstPageLoaded, setIsFirstPageLoaded] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedValue = sessionStorage.getItem(FIRST_PAGE_LOADED_KEY);
      return storedValue === 'true';
    }
    return false;
  });

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useInfiniteQuery(productsInfiniteQueryOptions(20));

  const products = useMemo(
    () => data?.pages.flatMap(page => page.content) || [],
    [data],
  );

  const { getReviewInfo } = useProductReviews({
    initialReviews: productReviews,
    products,
  });

  const { groupedRows, totalSize, virtualRows, rowVirtualizer } =
    useProductListVirtualizer({ products });

  const handleMoreView = () => {
    fetchNextPage().then(() => {
      setIsFirstPageLoaded(true);
      sessionStorage.setItem(FIRST_PAGE_LOADED_KEY, 'true');
    });
  };

  const prefetchNextPage = useCallback(() => {
    if (
      isFirstPageLoaded &&
      hasNextPage &&
      !isFetching &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
  }, [
    isFirstPageLoaded,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const scrollThreshold = document.documentElement.scrollHeight - 1500;

      if (scrollPosition > scrollThreshold) {
        prefetchNextPage();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefetchNextPage]);

  return (
    <section className="relative">
      <div
        style={{
          height: `${totalSize}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualRows.map(virtualRow => {
          const rowIndex = virtualRow.index;
          const rowItems = groupedRows[rowIndex];

          return (
            <div
              key={virtualRow.key}
              data-index={virtualRow.index}
              ref={rowVirtualizer.measureElement}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${virtualRow.start}px)`,
                height: `${virtualRow.size}px`,
              }}
            >
              <ul className="gap-x-md grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {rowItems.map((item: Product) => (
                  <ProductItem
                    key={item.productId}
                    {...item}
                    reviewInfo={getReviewInfo(item.productId)}
                  />
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {!isFirstPageLoaded && hasNextPage && (
        <MoreViewButton onClick={handleMoreView} />
      )}

      {isFetchingNextPage && <ProductListSkeleton />}
    </section>
  );
};

export default ClientProductList;
