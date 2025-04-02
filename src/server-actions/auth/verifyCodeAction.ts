'use server';

import { AxiosError } from 'axios';

import { verifyEmailSchema } from '@/schemas';
import { verifyCode } from '@/services';
import type { EmailVerificationState } from '@/types';

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

    if (!validatedData.success)
      return {
        ...prevState,
        success: false,
        emailVerified: false,
        codeVerified: false,
        error: validatedData.error.errors[0].message,
      };

    const response = await verifyCode(
      validatedData.data?.email || '',
      validatedData.data?.verify || '',
    );

    return {
      ...prevState,
      success: true,
      emailVerified: true,
      codeVerified: true,
      message: response.message,
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
            serverErrorMessage || '인증 번호 확인 중 서버 오류가 발생했습니다.',
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
      ...prevState,
      success: false,
      codeVerified: false,
      serverError: '인증 번호 확인 중 알 수 없는 오류가 발생했습니다.',
    };
  }
};
