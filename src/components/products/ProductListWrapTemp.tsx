import { Suspense } from 'react';
import { HydrationBoundary } from '@tanstack/react-query';

import { productsQueryOptions } from '@/queries';
import { getDehydratedState } from '@/utils';
import { ProductListSkeleton } from '@/components';
import ProductListClientTemp from './ProductListClientTemp';

const ProductListWrapTemp = async () => {
  const dehydratedState = await getDehydratedState(productsQueryOptions);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductListClientTemp />
      </Suspense>
    </HydrationBoundary>
  );
};

export default ProductListWrapTemp;
