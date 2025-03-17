import { z } from 'zod';

import { authSchema } from '@/schemas/auth/authSchema';
import { AUTH_CONSTANTS } from '@/constants';

const { PW_INPUT } = AUTH_CONSTANTS;

export const signinSchema = z.object({
  email: authSchema.shape.email,
  pw: z.string().min(1, { message: PW_INPUT.SIGNIN_ERROR }),
});

export type SigninFormData = z.infer<typeof signinSchema>;
