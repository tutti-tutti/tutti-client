'use server';

import { verifyEmail } from '@/services';
import { requestVerifySchema } from '@/schemas';
import type { EmailVerificationState } from '@/types';
import { handleServerError } from './handleServerError';
import { handleValidationError } from './handleValidationError';

export const requestVerificationCodeAction = async (
  prevState: EmailVerificationState,
  formData: FormData,
): Promise<EmailVerificationState> => {
  try {
    const email = formData.get('email');
    const type = formData.get('type');

    const validatedData = requestVerifySchema.safeParse({
      email,
      type,
    });

    if (!validatedData.success) {
      return await handleValidationError(validatedData.error, prevState, {
        email: email as string,
        isEmailVerified: false,
        isCodeVerified: false,
      });
    }

    const response = await verifyEmail(
      validatedData.data.email,
      validatedData.data.type,
    );

    return {
      isSuccess: true,
      isEmailVerified: true,
      isCodeVerified: false,
      email: validatedData.data.email,
      message: response.message,
    };
  } catch (error) {
    return await handleServerError(error, prevState);
  }
};
