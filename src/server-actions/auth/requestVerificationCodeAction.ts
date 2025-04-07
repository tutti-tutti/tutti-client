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
        emailVerified: false,
        codeVerified: false,
      });
    }

    const response = await verifyEmail(
      validatedData.data.email,
      validatedData.data.type,
    );

    return {
      success: true,
      emailVerified: true,
      codeVerified: false,
      email: validatedData.data.email,
      message: response.message,
    };
  } catch (error) {
    return await handleServerError(error, prevState);
  }
};
