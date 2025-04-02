'use server';

import { AxiosError } from 'axios';

import { resetPwSchema } from '@/schemas';
import { resetPw } from '@/services';
import type { EmailVerificationState } from '@/types';

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
      const fieldErrors = {
        emailError: '',
        pwError: '',
        checkPwError: '',
      };

      validatedData.error.errors.forEach(error => {
        const field = error.path[0];
        const errorMessage = error.message;

        if (field === 'email') fieldErrors.emailError = errorMessage;
        else if (field === 'pw') fieldErrors.pwError = errorMessage;
        else if (field === 'checkPw') fieldErrors.checkPwError = errorMessage;
      });

      return {
        ...prevState,
        success: false,
        ...fieldErrors,
      };
    }

    await resetPw(
      validatedData.data?.email || '',
      validatedData.data?.pw || '',
      validatedData.data?.checkPw || '',
    );

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
            serverErrorMessage ||
            '비밀번호 재설정 요청 중 서버 오류가 발생했습니다.',
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
      serverError: '비밀번호 재설정 중 알 수 없는 오류가 발생했습니다.',
    };
  }
};
