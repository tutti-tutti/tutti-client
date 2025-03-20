import { Suspense } from 'react';

import {
  ProductList,
  ProductListSkeleton,
  RecommendProductList,
  ProductListWrapTemp,
} from '@/components';

const HomePage = () => {
  return (
    <>
      <RecommendProductList categoryName="식료품" />
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>

      {/**TODO - 클라이언트 컴포넌트를 포함하는 서버 컴포넌트 사용 예시 용 */}
      <ProductListWrapTemp />
    </>
  );
};

export default HomePage;
