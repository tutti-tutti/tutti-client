import { Suspense } from 'react';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { getQueryClient } from "@/lib/tanstack";
import { getProductsQueryOptions } from '@/queries';
import { ProductListSkeleton } from '@/components';
import ProductListClientTemp from "./ProductListClientTemp";

const ProductListWrapTemp = async () => {

  const queryClient = getQueryClient();
  
  // 서버에서 데이터 미리 가져오기
  await queryClient.prefetchQuery(getProductsQueryOptions);
  
  // 데이터를 dehydrate하여 클라이언트로 전달
  const dehydratedState = dehydrate(queryClient);

  return (
      <HydrationBoundary state={dehydratedState}>
        <Suspense fallback={<ProductListSkeleton />}>
            <ProductListClientTemp />
        </Suspense>
    </HydrationBoundary>
  );
};

export default ProductListWrapTemp;
