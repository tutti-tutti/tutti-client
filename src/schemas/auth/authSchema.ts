import { z } from 'zod';

import { AUTH_CONSTANTS } from '@/constants';

const {
  EMAIL_INPUT,
  VERIFY_EMAIL_INPUT,
  PW_INPUT,
  CHECK_POLICY: { ESSENTIALS },
} = AUTH_CONSTANTS;

export const authSchema = z.object({
  email: z.string().email({ message: EMAIL_INPUT.ERROR }).trim(),
  verifyEmail: z.string().min(1, { message: VERIFY_EMAIL_INPUT.ERROR }),
  pw: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/,
      {
        message: PW_INPUT.ERROR,
      },
    ),
  checkPw: z.string(),
  essentialPolicy: z
    .array(z.string())
    .refine(values => values.length === ESSENTIALS.POLICY.length, {
      message: ESSENTIALS.ERROR,
    }),
});
