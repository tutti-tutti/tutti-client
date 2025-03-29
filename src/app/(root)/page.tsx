import { Suspense } from 'react';

import {
  ProductList,
  RecommendProductList,
  ProductCategory,
  CategorySkeleton,
} from '@/components';

const HomePage = () => {
  return (
    <div className="gap-lg md:gap-7xl flex flex-col">
      <Suspense fallback={<CategorySkeleton />}>
        <ProductCategory isMainPage />
      </Suspense>
      <RecommendProductList categoryName="식료품" />
      <ProductList />
    </div>
  );
};

export default HomePage;
