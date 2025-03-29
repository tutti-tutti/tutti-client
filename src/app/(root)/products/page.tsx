import { Suspense } from 'react';

import {
  ProductCategory,
  CategoryProductList,
  ProductListSkeleton,
  RecommendProductList,
} from '@/components';

type SearchParamsProps = {
  searchParams: Promise<{
    category?: string;
  }>;
};

const ProductPage = async ({ searchParams }: SearchParamsProps) => {
  const categoryId = (await searchParams).category || '1';

  return (
    <>
      <div className="gap-md md:gap-4xl flex flex-col">
        <ProductCategory />
        <RecommendProductList categoryName="식료품" />
      </div>
      <Suspense fallback={<ProductListSkeleton />}>
        <CategoryProductList categoryId={categoryId} />
      </Suspense>
    </>
  );
};

export default ProductPage;
