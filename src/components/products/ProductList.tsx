import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { productServerStore } from '@/stores';
import { productsPrefetchInfiniteQueryOptions } from '@/queries';
import { getQueryClient } from '@/lib';
import { fetchProductReviewInfo } from '@/services';
import { PRODUCTS_CONSTANTS } from '@/constants';
import type { ProductReviewInfo } from '@/types';
import ClientProductList from './ClientProductList';

const ProductList = async () => {
  const { getParams } = productServerStore();
  const { cursorId, size } = getParams();

  const queryClient = getQueryClient();

  const initialData = await queryClient.fetchInfiniteQuery(
    productsPrefetchInfiniteQueryOptions(cursorId, size),
  );

  const allProducts = initialData.pages.flatMap(page => page.content);
  const productReviews: ProductReviewInfo[] = [];

  await Promise.all(
    allProducts.map(async product => {
      try {
        const reviewInfo = await fetchProductReviewInfo(
          String(product.productId),
        );
        productReviews[product.productId] = reviewInfo;
      } catch (error) {
        console.error(PRODUCTS_CONSTANTS.FETCH_REVIEW_FAIL_MESSAGE, error);
        productReviews[product.productId] = {
          productId: product.productId,
          avg: '0.0',
          totalCount: 0,
        };
      }
    }),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClientProductList productReviews={productReviews} />
    </HydrationBoundary>
  );
};

export default ProductList;
