import { Suspense } from 'react';

import {
  ProductList,
  RecommendProductList,
  ProductListSkeleton,
  ProductListWrapTemp,
} from '@/components';

const HomePage = () => {
  return (
    <>
      <RecommendProductList categoryName="식료품" />

      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>

      {/** 📍 hydration과 클라이언트 컴포넌트 예시  */}
      <ProductListWrapTemp />
    </>
  );
};

export default HomePage;
