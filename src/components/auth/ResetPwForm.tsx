'use client';

import { useActionState } from 'react';

import {
  requestVerificationCodeAction,
  verifyCodeAction,
  resetPwAction,
} from '@/server-actions';
import { Button } from '@/components';
import { AUTH_CONSTANTS } from '@/constants';
import { EmailVerificationState } from '@/types';
import PwInput from '@/components/auth/PwInput';
import VerifyCodeInput from '@/components/auth/VerifyCodeInput';
import VerifyEmailInput from '@/components/auth/VerifyEmailInput';

const initialVerificationState: EmailVerificationState = {
  success: false,
  emailVerified: false,
  codeVerified: false,
};

const { RESET_PW, VERIFY_EMAIL_BUTTON, CHECK_VERIFY_CODE_BUTTON } =
  AUTH_CONSTANTS;

const ResetPwForm = () => {
  const [emailVerificationState, requestVerificationCodeFormAction] =
    useActionState(requestVerificationCodeAction, initialVerificationState);
  const [codeVerificationState, verifyCodeFormAction] = useActionState(
    verifyCodeAction,
    emailVerificationState,
  );
  const [resetPwState, resetPwFormAction] = useActionState(
    resetPwAction,
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
          return resetPwFormAction(formData);
        };

  const buttonChildren = !emailVerificationState.emailVerified
    ? VERIFY_EMAIL_BUTTON
    : !codeVerificationState.codeVerified
      ? CHECK_VERIFY_CODE_BUTTON
      : RESET_PW;

  return (
    <form action={action}>
      <fieldset className="flex flex-col">
        <legend className="mb-sm font-style-heading">{RESET_PW}</legend>
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
              <PwInput
                pwError={resetPwState?.pwError || ''}
                checkPwError={resetPwState.checkPwError || ''}
                isNewPw
              />
            )}
        </div>
        <Button type="submit" className="my-lg">
          {buttonChildren}
        </Button>
      </fieldset>
    </form>
  );
};

export default ResetPwForm;
