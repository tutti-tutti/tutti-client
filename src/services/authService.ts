import { AUTH_ENDPOINTS } from '@/constants';
import { axiosInstance } from '@/lib/axios';

export const verifyEmail = async (email: string) => {
  const { data } = await axiosInstance.post(AUTH_ENDPOINTS.EMAIL_VERIFY, {
    email,
  });

  return data;
};

export const verifyCode = async (email: string, verify: string) => {
  const { data } = await axiosInstance.post(AUTH_ENDPOINTS.EMAIL_CONFIRM, {
    email,
    verification_code: verify,
  });

  return data;
};

export const signup = async (
  email: string,
  pw: string,
  checkPw: string,
  essentialPolicy: string[],
  optionalPolicy: FormDataEntryValue[],
) => {
  const { data } = await axiosInstance.post(AUTH_ENDPOINTS.SIGNUP_EMAIL, {
    email,
    password: pw,
    password_confirm: checkPw,
    essential_policy: essentialPolicy,
    optional_policy: optionalPolicy,
  });

  return data;
};
