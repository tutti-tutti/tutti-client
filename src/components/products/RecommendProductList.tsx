import { Suspense } from 'react';

import { fetchRecommededProducts } from '@/services';
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
      <div className="gap-3xl py-xl pb-xs border-border-secondary flex flex-col border-b">
        <h2 className="font-style-subHeading text-brand-gradient text-center">
          당신의 쇼핑 데이터를 분석한 맞춤 {categoryName} 리스트입니다.
        </h2>
        <RecommendCarousel products={productItems} />
      </div>
    </Suspense>
  );
};

export default RecommendProductList;
