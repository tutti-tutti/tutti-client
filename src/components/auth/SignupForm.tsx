'use client';

import { useActionState } from 'react';

import {
  requestVerificationCodeAction,
  signupAction,
  verifyCodeAction,
} from '@/server-actions';
import { Button } from '@/components';
import { AUTH_CONSTANTS } from '@/constants';
import { EmailVerificationState } from '@/types';
import PoliciesInput from '@/components/auth/PoliciesInput';
import PwInput from '@/components/auth/PwInput';
import VerifyCodeInput from '@/components/auth/VerifyCodeInput';
import VerifyEmailInput from '@/components/auth/VerifyEmailInput';

const initialVerificationState: EmailVerificationState = {
  success: false,
  emailVerified: false,
  codeVerified: false,
};

const { SIGNUP, VERIFY_EMAIL_BUTTON, CHECK_VERIFY_CODE_BUTTON } =
  AUTH_CONSTANTS;

const SignupForm = () => {
  const [emailVerificationState, requestVerificationCodeFormAction] =
    useActionState(requestVerificationCodeAction, initialVerificationState);
  const [codeVerificationState, verifyCodeFormAction] = useActionState(
    verifyCodeAction,
    emailVerificationState,
  );
  const [signupState, signupFormAction] = useActionState(
    signupAction,
    emailVerificationState,
  );

  const action = !emailVerificationState.emailVerified
    ? requestVerificationCodeFormAction
    : !codeVerificationState.codeVerified
      ? async (formData: FormData) => {
          formData.append('email', emailVerificationState.email?.data || '');
          return verifyCodeFormAction(formData);
        }
      : async (formData: FormData) => {
          formData.append('email', emailVerificationState.email?.data || '');
          return signupFormAction(formData);
        };

  const buttonChildren = !emailVerificationState.emailVerified
    ? VERIFY_EMAIL_BUTTON
    : !codeVerificationState.codeVerified
      ? CHECK_VERIFY_CODE_BUTTON
      : SIGNUP;

  return (
    <form action={action}>
      <fieldset className="flex flex-col">
        <legend className="mb-sm font-style-heading">{SIGNUP}</legend>
        <div className="gap-sm mb-5xl flex flex-col">
          <VerifyEmailInput
            email={emailVerificationState.email?.data || ''}
            error={emailVerificationState.error!}
            isRequest={emailVerificationState.emailVerified!}
            success={
              !codeVerificationState.codeVerified
                ? emailVerificationState.message!
                : '이메일 인증이 완료되었습니다.'
            }
          />
          {emailVerificationState.emailVerified &&
            !codeVerificationState.codeVerified && (
              <VerifyCodeInput error={codeVerificationState.error!} />
            )}
          {emailVerificationState.emailVerified &&
            codeVerificationState.codeVerified && (
              <>
                <PwInput
                  pwError={signupState?.pwError || ''}
                  checkPwError={signupState.checkPwError || ''}
                />
                <PoliciesInput error={signupState.essentialPolicyError || ''} />
              </>
            )}
        </div>
        <Button type="submit" className="my-lg">
          {buttonChildren}
        </Button>
      </fieldset>
    </form>
  );
};

export default SignupForm;
