'use server';

import { AxiosError } from 'axios';

import { signinSchema } from '@/schemas';
import { signin } from '@/services';
import { setAccessToken, setRefreshToken } from '@/services/tokenService';
import type { EmailVerificationState } from '@/types';

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
        email: email as string,
        pw: pw as string,
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
      success: true,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        const serverErrorMessage =
          error.response.data?.message || error.response.data?.error;

        return {
          ...prevState,
          success: false,
          serverError:
            serverErrorMessage || '로그인 요청 중 서버 오류가 발생했습니다.',
        };
      } else if (error.request) {
        return {
          ...prevState,
          success: false,
          serverError: '서버 응답이 없습니다. 네트워크 연결을 확인해주세요.',
        };
      }
    }

    return {
      success: false,
      serverError: '로그인 요청 중 알 수 없는 오류가 발생했습니다.',
    };
  }
};
