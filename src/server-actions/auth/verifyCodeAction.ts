'use server';

import { verifyCode } from '@/services';
import { verifyEmailSchema } from '@/schemas';
import type { EmailVerificationState } from '@/types';
import { handleServerError } from './handleServerError';
import { handleValidationError } from './handleValidationError';

export const verifyCodeAction = async (
  prevState: EmailVerificationState,
  formData: FormData,
): Promise<EmailVerificationState> => {
  try {
    const email = formData.get('email');
    const verificationCode = formData.get('verifyEmail');

    const validatedData = verifyEmailSchema.safeParse({
      email,
      verify: verificationCode,
    });

    if (!validatedData.success) {
      return await handleValidationError(validatedData.error, prevState, {
        isEmailVerified: true,
        isCodeVerified: false,
      });
    }

    const response = await verifyCode(
      validatedData.data?.email || '',
      validatedData.data?.verify || '',
    );

    return {
      ...prevState,
      isSuccess: true,
      isEmailVerified: true,
      isCodeVerified: true,
      message: response.message,
    };
  } catch (error) {
    return await handleServerError(error, prevState);
  }
};
