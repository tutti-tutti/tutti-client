'use server';

import { AxiosError } from 'axios';

import type { EmailVerificationState } from '@/types';
import { ERROR_MESSAGES } from '@/constants';

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
        serverError: ERROR_MESSAGES.NETWORK_ERROR,
      };
    }
  }

  return {
    ...prevState,
    isSuccess: false,
    serverError: ERROR_MESSAGES.UNKNOWN_ERROR,
  };
};
