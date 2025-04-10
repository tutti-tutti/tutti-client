'use server';

import { signup } from '@/services';
import { signupSchema } from '@/schemas';
import type { EmailVerificationState } from '@/types';
import { handleServerError } from './handleServerError';
import { handleValidationError } from './handleValidationError';

export const signupAction = async (
  prevState: EmailVerificationState,
  formData: FormData,
): Promise<EmailVerificationState> => {
  try {
    const email = formData.get('email');
    const pw = formData.get('pw');
    const checkPw = formData.get('checkPw');
    const essentialPolicy = formData.getAll('essentialPolicy');
    const optionalPolicy = formData.getAll('optionalPolicy');

    const validatedData = signupSchema.safeParse({
      email,
      pw,
      checkPw,
      essentialPolicy,
    });

    if (!validatedData.success) {
      return await handleValidationError(validatedData.error, prevState, {
        pw: pw as string,
        checkPw: checkPw as string,
        essentialPolicy: essentialPolicy as string[],
        optionalPolicy: optionalPolicy as string[],
      });
    }

    await signup(
      validatedData.data?.email || '',
      validatedData.data?.pw || '',
      validatedData.data?.checkPw || '',
      validatedData.data?.essentialPolicy || [],
      optionalPolicy,
    );

    return {
      ...prevState,
      isSuccess: true,
    };
  } catch (error) {
    return await handleServerError(error, prevState);
  }
};
