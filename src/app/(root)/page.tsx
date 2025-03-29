import { Suspense } from 'react';

import {
  ProductList,
  RecommendProductList,
  ProductCategory,
  CategorySkeleton,
} from '@/components';

const HomePage = () => {
  return (
    <>
      <Suspense fallback={<CategorySkeleton />}>
        <ProductCategory isMainPage />
      </Suspense>
      <RecommendProductList categoryName="식료품" />

      <ProductList />
    </>
  );
};

export default HomePage;
