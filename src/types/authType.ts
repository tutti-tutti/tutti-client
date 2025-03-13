import { z } from 'zod';

export type EmailVerificationState = {
  success?: boolean;
  emailVerified?: boolean;
  codeVerified?: boolean;
  email?: z.SafeParseReturnType<string, string>;
  message?: string;
  error?: string;
};
