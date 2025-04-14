import {
  type InfiniteData,
  infiniteQueryOptions,
  queryOptions,
} from '@tanstack/react-query';

import { fetchReviews } from '@/services';
import { fetchReviewsAction, getProductReview } from '@/server-actions';
import { PRODUCTS_QUERY_KEY, QUERY_KEYS_ENDPOINT } from '@/constants';
import type { ReviewsResponse, ReviewPageParam } from '@/types';

export const reviewsPrefetchInfiniteQueryOptions = (
  productIdParams: string,
  reviewSortSearchParams: string,
) => ({
  queryKey: [
    QUERY_KEYS_ENDPOINT.REVIEWS,
    productIdParams,
    reviewSortSearchParams,
  ],
  queryFn: () => fetchReviews(productIdParams, reviewSortSearchParams, 10),
  initialPageParam: null,
});

export const reviewsInfiniteQueryOptions = (
  productIdParams: string,
  reviewSortSearchParams: string,
) =>
  infiniteQueryOptions<
    ReviewsResponse,
    Error,
    InfiniteData<ReviewsResponse>,
    string[],
    ReviewPageParam | null
  >({
    queryKey: [
      QUERY_KEYS_ENDPOINT.REVIEWS,
      productIdParams,
      reviewSortSearchParams,
    ],
    queryFn: ({ pageParam }) => {
      return fetchReviewsAction(
        productIdParams,
        reviewSortSearchParams,
        10,
        pageParam?.reviewId,
        pageParam?.extraData,
      );
    },
    initialPageParam: null,
    getNextPageParam: (lastPage: ReviewsResponse): ReviewPageParam | null => {
      if (!lastPage.hasNext) return null;

      return {
        reviewId: lastPage.cursor.reviewId,
        extraData:
          lastPage.cursor.rating?.toString() ||
          lastPage.cursor.likeCount?.toString(),
      };
    },
    staleTime: 60 * 1000,
  });

export const productReviewQueryOptions = (productId: string) =>
  queryOptions({
    queryKey: [PRODUCTS_QUERY_KEY.PRODUCT_REVIEWS, productId],
    queryFn: () => getProductReview(productId),
  });
