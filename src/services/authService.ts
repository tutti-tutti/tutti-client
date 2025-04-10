import { axiosInstance } from '@/lib';
import { AUTH_ENDPOINTS } from '@/constants';

export const verifyEmail = async (email: string, type: 'signup' | 'reset') => {
  const { data } = await axiosInstance.post(AUTH_ENDPOINTS.EMAIL_VERIFY, {
    email,
    type,
  });

  return data;
};

export const verifyCode = async (email: string, verify: string) => {
  try {
    const { data } = await axiosInstance.post(AUTH_ENDPOINTS.EMAIL_CONFIRM, {
      email,
      verificationCode: verify,
    });

    return data;
  } catch (error) {
    throw error;
  }
};

export const signup = async (
  email: string,
  pw: string,
  checkPw: string,
  essentialPolicy: string[],
  optionalPolicy: FormDataEntryValue[],
) => {
  const termsAgreement = [...essentialPolicy, ...optionalPolicy].map(
    termId => ({
      termId: Number(termId),
      agreed: true,
    }),
  );

  try {
    const { data } = await axiosInstance.post(AUTH_ENDPOINTS.SIGNUP_EMAIL, {
      email,
      password: pw,
      passwordConfirm: checkPw,
      termsAgreement,
    });

    return data;
  } catch (error) {
    throw error;
  }
};

export const resetPw = async (email: string, pw: string, checkPw: string) => {
  try {
    const { data } = await axiosInstance.post(AUTH_ENDPOINTS.RESET_PW, {
      email,
      newPassword: pw,
      newPasswordConfirm: checkPw,
    });

    return data;
  } catch (error) {
    throw error;
  }
};

export const signin = async (email: string, pw: string) => {
  try {
    const { data } = await axiosInstance.post(AUTH_ENDPOINTS.SIGNIN_EMAIL, {
      email,
      password: pw,
    });

    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchMemberData = async () => {
  const { data } = await axiosInstance.get(AUTH_ENDPOINTS.MYPAGE);

  return data;
};

export const getMemberNickname = async () => {
  const memberData = await fetchMemberData();

  return memberData.nickname;
};

export const socialSignin = async (
  email: string,
  provider: string,
  socialId: string,
  accessToken: string,
) => {
  const { data } = await axiosInstance.post(AUTH_ENDPOINTS.SOCIAL_LOGIN, {
    email,
    provider,
    socialId,
    accessToken,
  });

  return data;
};

export const fetchSignupTerms = async () => {
  const { data } = await axiosInstance.get(AUTH_ENDPOINTS.TERMS);

  return data;
};
