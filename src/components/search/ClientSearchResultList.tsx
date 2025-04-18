'use client';

import { useCallback, useEffect, useMemo } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';

import { searchProductsInfiniteQueryOptions } from '@/queries';
import { useProductListVirtualizer, useProductReviews } from '@/hooks';
import { PRODUCTS_CONSTANTS } from '@/constants';
import type { Product, ProductReviewInfo } from '@/types';
import { ProductItem, ProductListSkeleton } from '../products';
import { NoData } from '../common';

interface ClientSearchResultListProps {
  searchWord: string;
  productReviews: ProductReviewInfo[];
}

const ClientSearchResultList = ({
  searchWord,
  productReviews = [],
}: ClientSearchResultListProps) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useInfiniteQuery(searchProductsInfiniteQueryOptions(searchWord));

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

  const prefetchNextPage = useCallback(() => {
    if (hasNextPage && !isFetching && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetching, isFetchingNextPage]);

  useEffect(() => {
    const handleScroll = () => {
      if (isFetchingNextPage || !hasNextPage) return;

      const scrollPosition = window.innerHeight + window.scrollY;
      const threshold = document.documentElement.scrollHeight - 1500;

      if (scrollPosition > threshold) {
        prefetchNextPage();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefetchNextPage, isFetchingNextPage, hasNextPage]);

  return (
    <>
      {virtualRows.length === 0 ? (
        <NoData>{PRODUCTS_CONSTANTS.NO_SEARCH_RESULT}</NoData>
      ) : (
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

          {isFetchingNextPage && <ProductListSkeleton />}
        </section>
      )}
    </>
  );
};

export default ClientSearchResultList;
