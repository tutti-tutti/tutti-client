import { AUTH_ENDPOINTS } from '@/constants';
import { axiosInstance } from '@/lib/axios';

export const verifyEmail = async (email: string) => {
  const { data } = await axiosInstance.post(AUTH_ENDPOINTS.EMAIL_VERIFY, {
    email,
  });

  return data;
};

export const verifyCode = async (email: string, code: string) => {
  const { data } = await axiosInstance.post(AUTH_ENDPOINTS.EMAIL_CONFIRM, {
    email,
    code,
  });

  return data;
};
