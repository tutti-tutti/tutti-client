import { z } from 'zod';

import { REVIEW_CONSTANTS } from '@/constants';

const { RATING, REVIEW_CONTENT } = REVIEW_CONSTANTS;

export const createReviewSchema = z.object({
  rating: z
    .string()
    .transform(Number)
    .refine(val => val > 0, {
      message: RATING.ERROR,
    }),
  reviewContent: z.string().min(1, { message: REVIEW_CONTENT.ERROR }),
});
