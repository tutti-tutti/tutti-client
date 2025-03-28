'use server';

import { createReviewSchema } from '@/schemas';
import { createReview, getMemberNickname } from '@/services';
import { CreateReviewState } from '@/types';

export const createReviewAction = async (
  orderId: string,
  productItemId: string,
  prevState: CreateReviewState,
  formData: FormData,
): Promise<CreateReviewState> => {
  try {
    const rating = formData.get('rating');
    const reviewContent = formData.get('reviewContent');

    const validatedData = createReviewSchema.safeParse({
      rating,
      reviewContent,
    });

    const nickname = await getMemberNickname();

    if (!validatedData.success) {
      const fieldErrors = {
        ratingError: '',
        reviewContentError: '',
      };

      validatedData.error.errors.forEach(error => {
        const field = error.path[0];
        const errorMessage = error.message;

        if (field === 'rating') fieldErrors.ratingError = errorMessage;
        else if (field === 'reviewContent')
          fieldErrors.reviewContentError = errorMessage;
      });

      return {
        ...prevState,
        success: false,
        ...fieldErrors,
      };
    }

    await createReview(
      orderId,
      productItemId,
      validatedData.data.rating,
      validatedData.data.reviewContent,
      nickname,
    );

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);

    return {
      ...prevState,
      success: false,
      error: '리뷰 작성 중 오류가 발생했습니다.',
    };
  }
};
