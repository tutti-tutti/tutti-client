'use server';

import { AxiosError } from 'axios';

import { signupSchema } from '@/schemas';
import { signup } from '@/services';
import type { EmailVerificationState } from '@/types';

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
      const fieldErrors = {
        emailError: '',
        pwError: '',
        checkPwError: '',
        essentialPolicyError: '',
      };

      validatedData.error.errors.forEach(error => {
        const field = error.path[0];
        const errorMessage = error.message;

        if (field === 'email') fieldErrors.emailError = errorMessage;
        else if (field === 'pw') fieldErrors.pwError = errorMessage;
        else if (field === 'checkPw') fieldErrors.checkPwError = errorMessage;
        else if (field === 'essentialPolicy')
          fieldErrors.essentialPolicyError = errorMessage;
      });

      return {
        ...prevState,
        success: false,
        ...fieldErrors,
        pw: pw as string,
        checkPw: checkPw as string,
        essentialPolicy: essentialPolicy as string[],
        optionalPolicy: optionalPolicy as string[],
      };
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
            serverErrorMessage || '회원가입 요청 중 서버 오류가 발생했습니다.',
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
      serverError: '회원가입 요청 중 알 수 없는 오류가 발생했습니다.',
    };
  }
};
