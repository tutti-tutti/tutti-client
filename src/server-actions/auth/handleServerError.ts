'use server';

import { AxiosError } from 'axios';
import type { EmailVerificationState } from '@/types';

export const handleServerError = async (
  error: unknown,
  prevState: EmailVerificationState,
): Promise<EmailVerificationState> => {
  if (error instanceof AxiosError) {
    if (error.response) {
      const serverErrorMessage =
        error.response.data?.message || error.response.data?.error;

      return {
        ...prevState,
        isSuccess: false,
        serverError: serverErrorMessage,
      };
    } else if (error.request) {
      return {
        ...prevState,
        isSuccess: false,
        serverError: '서버 응답이 없습니다. 네트워크 연결을 확인해주세요.',
      };
    }
  }

  return {
    ...prevState,
    isSuccess: false,
    serverError: '알 수 없는 오류가 발생했습니다.',
  };
};
