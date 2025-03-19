'use server';

import { signinSchema } from '@/schemas';
import { signin } from '@/services';
import { setAccessToken, setRefreshToken } from '@/services/tokenService';
import type { EmailVerificationState } from '@/types';

export const signinAction = async (
  prevState: EmailVerificationState,
  formData: FormData,
) => {
  try {
    const email = formData.get('email');
    const pw = formData.get('pw');

    const validatedData = signinSchema.safeParse({
      email,
      pw,
    });

    if (!validatedData.success) {
      const fieldErrors = {
        emailError: '',
        pwError: '',
      };

      validatedData.error.errors.forEach(error => {
        const field = error.path[0];
        const errorMessage = error.message;

        if (field === 'email') fieldErrors.emailError = errorMessage;
        else if (field === 'pw') fieldErrors.pwError = errorMessage;
      });

      return {
        ...prevState,
        success: false,
        ...fieldErrors,
      };
    }

    const response = await signin(
      validatedData.data?.email || '',
      validatedData.data?.pw || '',
    );

    await setAccessToken(response.access_token);
    await setRefreshToken(response.refresh_token);

    return {
      ...prevState,
      success: false,
    };
  } catch (error) {
    console.error(error); // 📌 추후에 서버 에러 처리 예정!

    return {
      success: false,
      error: '로그인 중 오류가 발생했습니다.',
    };
  }
};
