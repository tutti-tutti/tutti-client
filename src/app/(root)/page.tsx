import { Suspense } from 'react';

import {
  ProductList,
  RecommendProductList,
  ProductListSkeleton,
  ProductCategory,
} from '@/components';

const HomePage = () => {
  return (
    <>
      <div className="gap-xl flex flex-col">
        <h3 className="text-text-primary font-style-heading text-center">
          지혜 쇼핑몰 카테고리
        </h3>
        <ProductCategory />
      </div>
      <RecommendProductList categoryName="식료품" />

      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>
    </>
  );
};

export default HomePage;
