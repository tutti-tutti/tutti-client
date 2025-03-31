import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import { fetchReviews } from '@/services';
import { reviewServerStore } from '@/stores';
import { QUERY_KEYS_ENDPOINT } from '@/constants';
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

  await queryClient.prefetchInfiniteQuery({
    queryKey: [
      QUERY_KEYS_ENDPOINT.REVIEWS,
      productIdParams,
      reviewSortSearchParams,
    ],
    queryFn: () => fetchReviews(productIdParams, reviewSortSearchParams, 10),
    initialPageParam: null,
  });

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
