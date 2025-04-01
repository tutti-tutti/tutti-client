import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { productServerStore } from '@/stores';
import { productsPrefetchInfiniteQueryOptions } from '@/queries';
import { getQueryClient } from '@/lib';
import ClientProductList from './ClientProductList';

const ProductList = async () => {
  const { getParams } = productServerStore();
  const { cursorId, size } = getParams();

  const queryClient = getQueryClient();

  await queryClient.prefetchInfiniteQuery(
    productsPrefetchInfiniteQueryOptions(cursorId, size),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClientProductList />
    </HydrationBoundary>
  );
};

export default ProductList;
