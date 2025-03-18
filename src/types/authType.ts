import { z } from 'zod';

export interface EmailVerificationState {
  success?: boolean;
  emailVerified?: boolean;
  codeVerified?: boolean;
  email?: z.SafeParseReturnType<string, string>;
  message?: string;
  error?: string;
  emailError?: string;
  pwError?: string;
  checkPwError?: string;
  essentialPolicyError?: string;
}
