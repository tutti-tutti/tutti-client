'use server';

import { verifyEmailSchema } from '@/schemas';
import { verifyEmail } from '@/services';
import type { EmailVerificationState } from '@/types';

export const requestVerificationCodeAction = async (
  prevState: EmailVerificationState,
  formData: FormData,
): Promise<EmailVerificationState> => {
  try {
    const email = formData.get('email');
    const validatedEmail = verifyEmailSchema.shape.email.safeParse(email);

    if (!validatedEmail.success) {
      return {
        ...prevState,
        success: false,
        emailVerified: false,
        codeVerified: false,
        error: validatedEmail.error.errors[0]?.message,
      };
    }

    const response = await verifyEmail(validatedEmail.data);

    return {
      success: true,
      emailVerified: true,
      codeVerified: false,
      email: validatedEmail,
      message: response.message,
    };
  } catch (error) {
    console.error(error); // 📌 추후에 서버 에러 처리 예정!

    return {
      ...prevState,
      success: false,
      error: '인증 코드 요청 중 알 수 없는 오류가 발생했습니다.',
    };
  }
};
