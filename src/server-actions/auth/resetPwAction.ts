'use server';

import { resetPw } from '@/services';
import { resetPwSchema } from '@/schemas';
import type { EmailVerificationState } from '@/types';
import { handleValidationError } from './handleValidationError';
import { handleServerError } from './handleServerError';

export const resetPwAction = async (
  prevState: EmailVerificationState,
  formData: FormData,
): Promise<EmailVerificationState> => {
  try {
    const email = formData.get('email');
    const pw = formData.get('pw');
    const checkPw = formData.get('checkPw');

    const validatedData = resetPwSchema.safeParse({
      email,
      pw,
      checkPw,
    });

    if (!validatedData.success) {
      return await handleValidationError(validatedData.error, prevState, {
        pw: pw as string,
        checkPw: checkPw as string,
      });
    }

    await resetPw(
      validatedData.data?.email || '',
      validatedData.data?.pw || '',
      validatedData.data?.checkPw || '',
    );

    return {
      ...prevState,
      isSuccess: true,
    };
  } catch (error) {
    return await handleServerError(error, prevState);
  }
};
