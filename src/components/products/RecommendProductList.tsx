import { Suspense } from 'react';
import { HydrationBoundary } from '@tanstack/react-query';

import { recommededProductsQueryOptions } from '@/queries';
import { getDehydratedState } from '@/utils';
import { PRODUCTS_CONSTANTS } from '@/constants';
import { RecommendProductListSkeleton } from '@/components';
import RecommendCarousel from './RecommendCarousel';

const RecommendProductList = async ({
  categoryName,
}: {
  categoryName: string;
}) => {
  const dehydratedState = await getDehydratedState(
    recommededProductsQueryOptions,
  );

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
