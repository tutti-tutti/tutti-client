import { z } from 'zod';

import { AUTH_CONSTANTS } from '@/constants';

const {
  EMAIL_INPUT,
  VERIFY_EMAIL_INPUT,
  PW_INPUT,
  CHECK_POLICY: { ESSENTIALS },
} = AUTH_CONSTANTS;

const PASSWORD_LOWERCASE_NUMBER_MIN8_REGEX =
  /^(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;

export const authSchema = z.object({
  email: z.string().email({ message: EMAIL_INPUT.ERROR }).trim(),
  type: z.enum(['signup', 'reset'], {
    required_error: '인증 타입이 필요합니다',
    invalid_type_error: '유효하지 않은 인증 타입입니다',
  }),
  verifyEmail: z.string().min(1, { message: VERIFY_EMAIL_INPUT.ERROR }),
  pw: z.string().regex(PASSWORD_LOWERCASE_NUMBER_MIN8_REGEX, {
    message: PW_INPUT.ERROR,
  }),
  checkPw: z.string(),
  essentialPolicy: z.array(z.string()).refine(values => values.length === 5, {
    message: ESSENTIALS.ERROR,
  }),
});
