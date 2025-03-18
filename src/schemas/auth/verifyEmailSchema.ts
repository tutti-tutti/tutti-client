import { z } from 'zod';

import { authSchema } from './authSchema';

export const verifyEmailSchema = z.object({
  email: authSchema.shape.email,
  verify: authSchema.shape.verifyEmail,
});

export type VerifyEmailFormData = z.infer<typeof verifyEmailSchema>;
