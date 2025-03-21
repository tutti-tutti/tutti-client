import { Suspense } from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { getQueryClient } from '@/lib/tanstack';
import { recommededProductsQueryOptions } from '@/queries';
import { PRODUCTS_CONSTANTS } from '@/constants';
import { RecommendProductListSkeleton } from '@/components';
import RecommendCarousel from './RecommendCarousel';

const RecommendProductList = async ({
  categoryName,
}: {
  categoryName: string;
}) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(recommededProductsQueryOptions);
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Suspense fallback={<RecommendProductListSkeleton />}>
        <div className="gap-3xl py-xs border-border-secondary flex flex-col border-y">
          <h2 className="font-style-subHeading pt-xl text-brand-gradient text-center">
            {PRODUCTS_CONSTANTS.getRecommendListTitle(categoryName)}
          </h2>
          <RecommendCarousel />
        </div>
      </Suspense>
    </HydrationBoundary>
  );
};

export default RecommendProductList;
