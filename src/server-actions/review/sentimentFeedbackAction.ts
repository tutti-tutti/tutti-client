'use server';

import { revalidateTag } from 'next/cache';

import { feedbackIncorrectSentiment } from '@/services';

export const sentimentFeedbackAction = async (
  reviewText: string,
  sentiment: 'positive' | 'negative',
) => {
  try {
    const result = await feedbackIncorrectSentiment(reviewText, sentiment);

    revalidateTag('reviews');

    console.log('감성분석 피드백 결과: ', result);

    return result;
  } catch (error) {
    console.error('감성분석 피드백 제출 실패:', error);
    throw new Error('감성분석 피드백 제출 실패');
  }
};
