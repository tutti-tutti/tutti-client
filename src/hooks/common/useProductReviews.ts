'use client';

import { useEffect, useCallback } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { productReviewQueryOptions } from '@/queries';
import type { Product, ProductReviewInfo } from '@/types';

interface UseProductReviewsOptions {
  initialReviews: ProductReviewInfo[];
  products: Product[];
}

const useProductReviews = ({
  initialReviews,
  products,
}: UseProductReviewsOptions) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    initialReviews.forEach(review => {
      if (review && review.productId) {
        const options = productReviewQueryOptions(String(review.productId));
        queryClient.setQueryData(options.queryKey, review);
      }
    });
  }, [initialReviews, queryClient]);

  useEffect(() => {
    const prefetchReviews = async () => {
      const newProductIds = products.filter(product => {
        const options = productReviewQueryOptions(String(product.productId));
        return !queryClient.getQueryData(options.queryKey);
      });

      if (newProductIds.length === 0) return;

      await Promise.all(
        newProductIds.map(product => {
          const options = productReviewQueryOptions(String(product.productId));
          return queryClient.prefetchQuery(options);
        }),
      );
    };

    prefetchReviews();
  }, [products, queryClient]);

  const getReviewInfo = useCallback(
    (productId: number): ProductReviewInfo => {
      const options = productReviewQueryOptions(String(productId));
      const cachedData = queryClient.getQueryData<ProductReviewInfo>(
        options.queryKey,
      );

      return (
        cachedData || {
          productId,
          avg: '0.0',
          totalCount: 0,
        }
      );
    },
    [queryClient],
  );

  return { getReviewInfo };
};

export { useProductReviews };
