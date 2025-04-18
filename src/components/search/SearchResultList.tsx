import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { fetchProductReviewInfo } from '@/services';
import { getQueryClient } from '@/lib';
import { searchProductsPrefetchInfiniteQueryOptions } from '@/queries';
import { productServerStore } from '@/stores';
import { PRODUCTS_CONSTANTS } from '@/constants';
import type { Product, ProductReviewInfo } from '@/types';
import ClientSearchResultList from './ClientSearchResultList';

const SearchResultList = async ({ searchWord }: { searchWord: string }) => {
  const { getParams } = productServerStore();
  const { cursorId, size } = getParams();

  const queryClient = getQueryClient();

  const initialData = await queryClient.fetchInfiniteQuery(
    searchProductsPrefetchInfiniteQueryOptions(searchWord, cursorId, size),
  );

  const allProducts = initialData.pages.flatMap(page => page.content);
  const productReviews: ProductReviewInfo[] = [];

  await Promise.all(
    allProducts.map(async (product: Product) => {
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
      <ClientSearchResultList
        searchWord={searchWord}
        productReviews={productReviews}
      />
    </HydrationBoundary>
  );
};

export default SearchResultList;
