import { Suspense } from 'react';

import {
  ProductList,
  ProductListSkeleton,
  RecommendProductList,
  RecommendProductListSkeleton,
} from '@/components';

const HomePage = () => {
  return (
    <>
      <Suspense fallback={<RecommendProductListSkeleton />}>
        <RecommendProductList categoryName="식료품" />
      </Suspense>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>
    </>
  );
};

export default HomePage;
