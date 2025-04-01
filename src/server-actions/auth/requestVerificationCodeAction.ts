'use server';

import { AxiosError } from 'axios';

import { requestVerifySchema } from '@/schemas/auth/requestVerifySchema';
import { verifyEmail } from '@/services';
import type { EmailVerificationState } from '@/types';

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
      return {
        ...prevState,
        success: false,
        emailVerified: false,
        codeVerified: false,
        email: email as string,
        error: validatedData.error.errors[0]?.message,
      };
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
    if (error instanceof AxiosError) {
      if (error.response) {
        const serverErrorMessage =
          error.response.data?.message || error.response.data?.error;

        return {
          ...prevState,
          success: false,
          serverError:
            serverErrorMessage || '인증 번호 전송 중 서버 오류가 발생했습니다.',
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
      serverError: '인증 번호 요청 중 알 수 없는 오류가 발생했습니다.',
    };
  }
};
