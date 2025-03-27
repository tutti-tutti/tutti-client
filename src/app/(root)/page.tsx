import { Suspense } from 'react';

import {
  ProductList,
  RecommendProductList,
  ProductListSkeleton,
} from '@/components';

const HomePage = () => {
  return (
    <>
      <RecommendProductList categoryName="식료품" />

      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>
    </>
  );
};

export default HomePage;
