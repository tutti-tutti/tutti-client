'use server';

import { signupSchema } from '@/schemas';
import { signup } from '@/services';
import type { EmailVerificationState } from '@/types';

export const signupAction = async (
  prevState: EmailVerificationState,
  formData: FormData,
) => {
  try {
    const email = formData.get('email');
    const pw = formData.get('pw');
    const checkPw = formData.get('checkPw');
    const essentialPolicy = formData.getAll('essentialPolicy');
    const optinalPolicy = formData.getAll('optionalPolicy');

    const validatedData = signupSchema.safeParse({
      email,
      pw,
      checkPw,
      essentialPolicy,
    });

    if (!validatedData.success) {
      const fieldErrors = {
        emailError: '',
        pwError: '',
        checkPwError: '',
        essentialPolicyError: '',
      };

      validatedData.error.errors.forEach(error => {
        const field = error.path[0];
        const errorMessage = error.message;

        if (field === 'email') fieldErrors.emailError = errorMessage;
        else if (field === 'pw') fieldErrors.pwError = errorMessage;
        else if (field === 'checkPw') fieldErrors.checkPwError = errorMessage;
        else if (field === 'essentialPolicy')
          fieldErrors.essentialPolicyError = errorMessage;
      });

      return {
        ...prevState,
        success: false,
        ...fieldErrors,
      };
    }

    await signup(
      validatedData.data?.email || '',
      validatedData.data?.pw || '',
      validatedData.data?.checkPw || '',
      validatedData.data?.essentialPolicy || [],
      optinalPolicy,
    );

    return {
      ...prevState,
      success: false,
    };
  } catch (error) {
    console.error(error); // 📌 추후에 서버 에러 처리 예정!

    return {
      success: false,
      error: '회원가입 중 오류가 발생했습니다.',
    };
  }
};
