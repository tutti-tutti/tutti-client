import { Suspense } from 'react';

import {
  ProductCategory,
  CategoryProductList,
  ProductListSkeleton,
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
      <ProductCategory />
      <Suspense fallback={<ProductListSkeleton />}>
        <CategoryProductList categoryId={categoryId} />
      </Suspense>
    </>
  );
};

export default ProductPage;
