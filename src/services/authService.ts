import { AUTH_ENDPOINTS } from '@/constants';
import { axiosInstance } from '@/lib/axios';

export const verifyEmail = async (email: string) => {
  const { data } = await axiosInstance.post(AUTH_ENDPOINTS.VERIFY, { email });

  return data;
};
