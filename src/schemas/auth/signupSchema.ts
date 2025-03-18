import { z } from 'zod';

import { AUTH_CONSTANTS } from '@/constants';
import { authSchema } from '@/schemas';

const { CHECK_PW_INPUT } = AUTH_CONSTANTS;

export const signupSchema = z
  .object({
    email: authSchema.shape.email,
    pw: authSchema.shape.pw,
    checkPw: authSchema.shape.checkPw,
    essentialPolicy: authSchema.shape.essentialPolicy,
  })
  .refine(data => data.pw === data.checkPw, {
    message: CHECK_PW_INPUT.ERROR,
    path: ['checkPw'],
  });

export type SignupFormData = z.infer<typeof signupSchema>;
