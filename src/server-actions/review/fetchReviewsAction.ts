'use server';

import { fetchReviews } from '@/services';

export const fetchReviewsAction = async (
  productId: string,
  reviewSort: string,
  size: number,
  reviewId?: number,
  extraData?: string,
) => {
  return fetchReviews(productId, reviewSort, size, reviewId, extraData);
};
