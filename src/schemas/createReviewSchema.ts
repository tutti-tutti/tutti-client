import { z } from 'zod';

import { REVIEW_CONSTANTS } from '@/constants';

const { RATING, REVIEW_CONTENT } = REVIEW_CONSTANTS;

export const createReviewSchame = z.object({
  rating: z.string().min(1, { message: RATING.ERROR }),
  reviewContent: z.string().min(1, { message: REVIEW_CONTENT.ERROR }),
});
