'use server';

import type { ZodError } from 'zod';

import type { EmailVerificationState } from '@/types';

export const handleValidationError = async (
  error: ZodError,
  prevState: EmailVerificationState,
  formData: Record<string, string | string[] | boolean> = {},
): Promise<EmailVerificationState> => {
  const fieldErrors: Record<string, string> = {};

  error.errors.forEach(err => {
    const field = err.path[0];
    const errorMessage = err.message;

    if (field === 'email') fieldErrors.emailError = errorMessage;
    else if (field === 'pw') fieldErrors.pwError = errorMessage;
    else if (field === 'checkPw') fieldErrors.checkPwError = errorMessage;
    else if (field === 'essentialPolicy')
      fieldErrors.essentialPolicyError = errorMessage;
    else if (field === 'verify') fieldErrors.error = errorMessage;
  });

  return {
    ...prevState,
    ...formData,
    ...fieldErrors,
    isSuccess: false,
  };
};
