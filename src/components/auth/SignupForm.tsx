'use client';

import {
  requestVerificationCodeAction,
  // signupAction,
  // verifyCodeAction,
} from '@/actions';
import { Button } from '@/components';
import VerifyCodeInput from '@/components/auth/VerifyCodeInput';
import VerifyEmailInput from '@/components/auth/VerifyEmailInput';
import { AUTH_CONSTANTS } from '@/constants';
import { EmailVerificationState } from '@/types';
import { useActionState } from 'react';

const initialVerificationState: EmailVerificationState = {
  success: false,
  emailVerified: false,
  codeVerified: false,
};

const { SIGNUP } = AUTH_CONSTANTS;

const SignupForm = () => {
  const [emailVerificationState, requestVerificationCodeFormAction] =
    useActionState(requestVerificationCodeAction, initialVerificationState);
  // const [] = useActionState('', '');

  const action = emailVerificationState.emailVerified
    ? () => {}
    : requestVerificationCodeFormAction;

  return (
    <form action={action}>
      <VerifyEmailInput
        email={emailVerificationState.email?.data || ''}
        error={emailVerificationState.error!}
        isRequest={emailVerificationState.emailVerified!}
        success={emailVerificationState.message!}
      />
      <VerifyCodeInput error={''} />
      <Button type="submit" className="my-lg">
        {SIGNUP}
      </Button>
    </form>
  );
};

export default SignupForm;
