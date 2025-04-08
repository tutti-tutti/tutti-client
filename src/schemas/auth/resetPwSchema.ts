import { z } from 'zod';

import { AUTH_CONSTANTS } from '@/constants';
import { authSchema } from './authSchema';

const { CHECK_PW_INPUT } = AUTH_CONSTANTS;

export const resetPwSchema = z
  .object({
    email: authSchema.shape.email,
    pw: authSchema.shape.pw,
    checkPw: authSchema.shape.checkPw,
  })
  .refine(data => data.pw === data.checkPw, {
    message: CHECK_PW_INPUT.ERROR,
    path: ['checkPw'],
  });
