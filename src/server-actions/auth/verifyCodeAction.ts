'use server';

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
    console.error(error); // 📌 추후에 서버 에러 처리 예정!

    return {
      ...prevState,
      success: false,
      codeVerified: false,
      error: '인증 코드 확인 중 오류가 발생했습니다.',
    };
  }
};
