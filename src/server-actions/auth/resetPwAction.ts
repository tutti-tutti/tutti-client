'use server';

import { resetPwSchema } from '@/schemas';
import { resetPw } from '@/services';
import type { EmailVerificationState } from '@/types';

export const resetPwAction = async (
  prevState: EmailVerificationState,
  formData: FormData,
) => {
  try {
    const email = formData.get('email');
    const pw = formData.get('pw');
    const checkPw = formData.get('checkPw');

    const validatedData = resetPwSchema.safeParse({
      email,
      pw,
      checkPw,
    });

    if (!validatedData.success) {
      const fieldErrors = {
        emailError: '',
        pwError: '',
        checkPwError: '',
      };

      validatedData.error.errors.forEach(error => {
        const field = error.path[0];
        const errorMessage = error.message;

        if (field === 'email') fieldErrors.emailError = errorMessage;
        else if (field === 'pw') fieldErrors.pwError = errorMessage;
        else if (field === 'checkPw') fieldErrors.checkPwError = errorMessage;
      });

      return {
        ...prevState,
        success: false,
        ...fieldErrors,
      };
    }

    await resetPw(
      validatedData.data?.email || '',
      validatedData.data?.pw || '',
      validatedData.data?.checkPw || '',
    );

    return {
      ...prevState,
      success: false,
    };
  } catch (error) {
    console.error(error); // 📌 추후에 서버 에러 처리 예정!

    return {
      success: false,
      error: '비밀번호 재설정 중 오류가 발생했습니다.',
    };
  }
};
