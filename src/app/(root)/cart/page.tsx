import { HydrationBoundary } from '@tanstack/react-query';

import { CartInfo, RecommendProductList } from '@/components';
import { getDehydratedState } from '@/utils';
import { cartQueryOptions } from '@/queries';

const CartPage = () => {
  const dehydratedState = getDehydratedState(cartQueryOptions);

  return (
    <div className="gap-3xl flex flex-col">
      <HydrationBoundary state={dehydratedState}>
        <CartInfo />
      </HydrationBoundary>
      <div className="mb-7xl">
        <RecommendProductList categoryName="식료품" />
      </div>
    </div>
  );
};

export default CartPage;
