import { axiosInstance } from '@/lib';
import { AUTH_ENDPOINTS } from '@/constants';

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

export const resetPw = async (email: string, pw: string, checkPw: string) => {
  const { data } = await axiosInstance.post(AUTH_ENDPOINTS.RESET_PW, {
    email,
    password: pw,
    password_confirm: checkPw,
  });

  return data;
};

export const signin = async (email: string, pw: string) => {
  const { data } = await axiosInstance.post(AUTH_ENDPOINTS.SIGNIN_EMAIL, {
    email,
    password: pw,
  });

  return data;
};
