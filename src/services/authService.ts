import { axiosInstance } from '@/lib/axios';

export const verifyEmail = async () => {
  const { data } = await axiosInstance.post('/email/verify');

  return data;
};
