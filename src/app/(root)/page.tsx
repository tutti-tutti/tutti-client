import { Suspense } from 'react';

import { ProductList, ProductItemSkeleton } from '@/components';

const HomePage = () => {
  const ProductsListSkeleton = () => {
    return (
      <ul className="gap-x-md gap-y-6xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array(9)
          .fill(0)
          .map((_, index) => (
            <ProductItemSkeleton key={index} />
          ))}
      </ul>
    );
  };

  return (
    <>
      <Suspense fallback={<ProductsListSkeleton />}>
        <ProductList />
      </Suspense>
    </>
  );
};

export default HomePage;
