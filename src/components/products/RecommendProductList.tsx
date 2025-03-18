import { Suspense } from 'react';

import { fetchRecommededProducts } from '@/services';
import { PRODUCTS_CONSTANTS } from '@/constants';
import RecommendCarousel from './RecommendCarousel';
import { RecommendProductListSkeleton } from './skeleton/RecommendProductSkeleton';

const RecommendProductList = async ({
  categoryName,
}: {
  categoryName: string;
}) => {
  const data = await fetchRecommededProducts();
  const productItems = data[0].latestList || [];

  return (
    <Suspense fallback={<RecommendProductListSkeleton />}>
      <div className="gap-3xl py-xs border-border-secondary flex flex-col border-y">
        <h2 className="font-style-subHeading pt-xl text-brand-gradient text-center">
          {PRODUCTS_CONSTANTS.getRecommendListTitle(categoryName)}
        </h2>
        <RecommendCarousel products={productItems} />
      </div>
    </Suspense>
  );
};

export default RecommendProductList;
