import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import { reviewServerStore } from '@/stores';
import { reviewsPrefetchInfiniteQueryOptions } from '@/queries';
import AverageReview from './AverageReview';
import ReviewSort from './ReviewSort';
import ReviewList from './ReviewList';
import { getAccessToken } from '@/services';

const ProductReview = async () => {
  const { getParams } = reviewServerStore();
  const { productIdParams, reviewSortSearchParams } = getParams();
  const accessToken = await getAccessToken();
  const isLogin = !!accessToken;

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
      <ReviewSort />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ReviewList
          isLogin={isLogin}
          productIdParams={productIdParams}
          reviewSortSearchParams={reviewSortSearchParams}
        />
      </HydrationBoundary>
    </div>
  );
};

export default ProductReview;
