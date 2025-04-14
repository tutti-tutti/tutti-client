import { Suspense } from 'react';

import { fetchCategoriesById, fetchProductReviewInfo } from '@/services';
import { PRODUCTS_CONSTANTS } from '@/constants';
import type { Product, ProductReviewInfo } from '@/types';
import ClientCategoryProductList from './ClientCategoryProductList';
import { ProductListSkeleton } from '../products';

const CategoryProductList = async ({ categoryId }: { categoryId?: string }) => {
  const id = categoryId || '1';

  const initialProducts = await fetchCategoriesById(id);

  const productReviews: ProductReviewInfo[] = [];

  await Promise.all(
    initialProducts.map(async (product: Product) => {
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
    <Suspense fallback={<ProductListSkeleton />}>
      <ClientCategoryProductList
        initialProducts={initialProducts}
        categoryId={id}
        productReviews={productReviews}
      />
    </Suspense>
  );
};

export default CategoryProductList;
