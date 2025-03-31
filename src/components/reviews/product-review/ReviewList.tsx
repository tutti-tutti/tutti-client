'use client';

import { useCallback, useEffect } from 'react';
import { useInfiniteQuery, type InfiniteData } from '@tanstack/react-query';

import { fetchReviewsAction } from '@/server-actions';
import type {
  ReviewItemAPISchema,
  ReviewsResponse,
  ReviewPageParam,
} from '@/types';
import { QUERY_KEYS_ENDPOINT } from '@/constants';
import ReviewFilter from './ReviewFilter';
import ReviewItem from './ReviewItem';

interface ReviewListProps {
  productIdParams: string;
  reviewSortSearchParams: string;
}

const ReviewList = ({
  productIdParams,
  reviewSortSearchParams,
}: ReviewListProps) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isFetching } =
    useInfiniteQuery<
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

  const allReviews = data?.pages.flatMap(page => page.reviews) || [];

  const prefetchNextPage = useCallback(() => {
    if (hasNextPage && !isFetching && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, isFetching, isFetchingNextPage]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const scrollThreshold = document.documentElement.scrollHeight - 1000;

      if (scrollPosition > scrollThreshold) {
        prefetchNextPage();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefetchNextPage]);

  return (
    <div>
      <ReviewFilter />
      {allReviews.map((review: ReviewItemAPISchema) => (
        <ReviewItem key={review.id} {...review} />
      ))}
    </div>
  );
};

export default ReviewList;
