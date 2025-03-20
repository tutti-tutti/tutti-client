import { Suspense } from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { getQueryClient } from "@/lib/tanstack";
import { getProductsQueryOptions } from '@/queries';
import type { Product, ProductListAPISchema } from '@/types';
import { ProductListSkeleton} from '@/components';
import ProductItem from './ProductItem';

const ProductList = async () => {
  const queryClient = getQueryClient();
  
  await queryClient.prefetchQuery(getProductsQueryOptions);

  const dehydratedState = dehydrate(queryClient);
  const data = dehydratedState.queries[0].state.data as ProductListAPISchema;
  const productItems = data[0].latestList || [];

  return (
    <Suspense fallback={<ProductListSkeleton />}>
      <HydrationBoundary state={dehydratedState}>
        <section>
          <ul className="gap-x-md gap-y-7xl py-7xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {productItems.map((item: Product) => (
              <ProductItem key={item.productId} {...item} />
            ))}
          </ul>
        </section>
        </HydrationBoundary>
    </Suspense>
  );
};

export default ProductList;
