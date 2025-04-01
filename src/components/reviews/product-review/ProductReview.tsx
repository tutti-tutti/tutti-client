import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import { reviewServerStore } from '@/stores';
import { reviewsPrefetchInfiniteQueryOptions } from '@/queries';
import ReviewList from './ReviewList';
import AverageReview from './AverageReview';

const ProductReview = async () => {
  const { getParams } = reviewServerStore();
  const { productIdParams, reviewSortSearchParams } = getParams();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  await queryClient.prefetchInfiniteQuery(
    reviewsPrefetchInfiniteQueryOptions(
      productIdParams,
      reviewSortSearchParams,
    ),
  );

  return (
    <div>
      <AverageReview />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ReviewList
          productIdParams={productIdParams}
          reviewSortSearchParams={reviewSortSearchParams}
        />
      </HydrationBoundary>
    </div>
  );
};

export default ProductReview;
