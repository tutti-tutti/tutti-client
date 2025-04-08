'use server';

import { signin, setAccessToken, setRefreshToken } from '@/services';
import { signinSchema } from '@/schemas';
import type { EmailVerificationState } from '@/types';
import { handleServerError } from './handleServerError';
import { handleValidationError } from './handleValidationError';

export const signinAction = async (
  prevState: EmailVerificationState,
  formData: FormData,
): Promise<EmailVerificationState> => {
  try {
    const email = formData.get('email');
    const pw = formData.get('pw');

    const validatedData = signinSchema.safeParse({
      email,
      pw,
    });

    if (!validatedData.success) {
      return await handleValidationError(validatedData.error, prevState, {
        email: email as string,
        pw: pw as string,
      });
    }

    const response = await signin(
      validatedData.data?.email || '',
      validatedData.data?.pw || '',
    );

    await setAccessToken(response.access_token);
    await setRefreshToken(response.refresh_token);

    return {
      ...prevState,
      isSuccess: true,
    };
  } catch (error) {
    return await handleServerError(error, prevState);
  }
};
