'use server';

import { reviewLike } from '@/services';
import { revalidateTag } from 'next/cache';

export const reviewLikeAction = async (reviewId: number) => {
  try {
    const isLiked = await reviewLike(reviewId);

    revalidateTag(`review-${reviewId}`);
    revalidateTag('reviews');

    return isLiked;
  } catch (error) {
    console.error('리뷰 좋아요 실패:', error);
    throw new Error('좋아요 상태 업데이트 실패');
  }
};
