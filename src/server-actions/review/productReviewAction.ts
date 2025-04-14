'use server';

import { fetchProductReviewInfo } from '@/services';
import { PRODUCTS_CONSTANTS } from '@/constants';
import type { ProductReviewInfo } from '@/types';

export const getProductReview = async (
  productId: string,
): Promise<ProductReviewInfo> => {
  try {
    const reviewInfo = await fetchProductReviewInfo(productId);
    return reviewInfo;
  } catch (error) {
    console.error(PRODUCTS_CONSTANTS.FETCH_REVIEW_FAIL_MESSAGE, error);
    return {
      productId: Number(productId),
      avg: '0.0',
      totalCount: 0,
    };
  }
};
