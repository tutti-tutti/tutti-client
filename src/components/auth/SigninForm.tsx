'use client';

import { useActionState, useEffect } from 'react';

import { signinAction } from '@/server-actions';
import { Button, Checkbox, ClickText } from '@/components';
import { AUTH_CONSTANTS } from '@/constants';
import { EmailVerificationState } from '@/types';
import SocialLoginButton from '@/components/auth/SocialLoginButton';
import PwInput from '@/components/auth/PwInput';
import VerifyEmailInput from '@/components/auth/VerifyEmailInput';
import { useRouter } from 'next/navigation';

const initialVerificationState: EmailVerificationState = {
  success: false,
  emailVerified: false,
  codeVerified: false,
};

const {
  SIGNIN,
  SIGNIN_LOADING,
  AUTO_SIGNIN,
  FORGOT_PW,
  SOCIAL_SIGNIN,
  TO_SIGNUP,
} = AUTH_CONSTANTS;

const SigninForm = () => {
  const router = useRouter();
  const [signinState, signinFormAction, isSigninPending] = useActionState(
    signinAction,
    initialVerificationState,
  );

  useEffect(() => {
    if (signinState.success) {
      router.push('/');
    }
  }, [signinState.success, router]);

  const signinButtonText = isSigninPending ? SIGNIN_LOADING : SIGNIN;

  return (
    <>
      <form action={signinFormAction}>
        <fieldset className="flex flex-col">
          <legend className="mb-xs font-style-heading">{SIGNIN}</legend>
          <div className="gap-md mb-sm flex flex-col">
            <VerifyEmailInput email={signinState.email || ''} />
            <PwInput isSignin pw={signinState.pw || ''} />
          </div>
          <div className="flex justify-between">
            <div className="font-style-paragraph text-text-tertiary gap-xs flex">
              <Checkbox />
              <div>{AUTO_SIGNIN}</div>
            </div>
            <ClickText
              href="/reset-password"
              className="text-text-info font-style-info"
            >
              {FORGOT_PW}
            </ClickText>
          </div>
          <div className="text-text-danger font-style-info text-center">
            {signinState.serverError}
          </div>
          <Button
            type="submit"
            className="my-lg font-style-subHeading"
            variant={isSigninPending ? 'disabled' : 'primary'}
          >
            {signinButtonText}
          </Button>
        </fieldset>
      </form>

      <div className="mb-sm flex items-center">
        <hr className="border-border-primary flex-grow border-t" />
        <span className="text-text-secondary font-style-paragraph mx-4">
          {SOCIAL_SIGNIN}
        </span>
        <hr className="border-border-primary flex-grow border-t" />
      </div>
      <SocialLoginButton />
      <ClickText
        href="/signup"
        className="text-text-info font-style-info text-center"
      >
        {TO_SIGNUP}
      </ClickText>
    </>
  );
};

export default SigninForm;
