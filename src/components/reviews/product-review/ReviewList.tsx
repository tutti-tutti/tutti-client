'use client';

import { useCallback, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { reviewsInfiniteQueryOptions } from '@/queries';
import type { ReviewItemAPISchema } from '@/types';
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
    useInfiniteQuery(
      reviewsInfiniteQueryOptions(productIdParams, reviewSortSearchParams),
    );

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
