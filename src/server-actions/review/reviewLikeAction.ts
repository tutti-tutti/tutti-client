'use server';

import { revalidateTag } from 'next/cache';

import { reviewLike } from '@/services';

export const reviewLikeAction = async (reviewId: number) => {
  try {
    const result = await reviewLike(reviewId);

    revalidateTag('reviews');

    return result;
  } catch (error) {
    console.error('리뷰 좋아요 실패:', error);
    throw new Error('좋아요 상태 업데이트 실패');
  }
};
