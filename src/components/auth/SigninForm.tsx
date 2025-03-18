'use client';

import { useActionState } from 'react';

import { signinAction } from '@/server-actions';
import { Button, ClickText, Input } from '@/components';
import { AUTH_CONSTANTS } from '@/constants';
import { EmailVerificationState } from '@/types';
import SocialLoginButton from '@/components/auth/SocialLoginButton';

const initialVerificationState: EmailVerificationState = {
  success: false,
  emailVerified: false,
  codeVerified: false,
};

const {
  SIGNIN,
  EMAIL_INPUT,
  PW_INPUT,
  AUTO_SIGNIN,
  FORGOT_PW,
  SOCIAL_SIGNIN,
  TO_SIGNUP,
} = AUTH_CONSTANTS;

const SigninForm = () => {
  const [signinState, signinFormAction] = useActionState(
    signinAction,
    initialVerificationState,
  );

  return (
    <>
      <form action={signinFormAction}>
        <fieldset className="flex flex-col">
          <legend className="mb-xs font-style-heading">{SIGNIN}</legend>
          <div className="gap-md mb-sm flex flex-col">
            <Input
              label={EMAIL_INPUT.LABEL}
              name="email"
              placeholder={EMAIL_INPUT.PLACEHOLDER}
              error={signinState.emailError}
            />
            <Input
              label={PW_INPUT.LABEL}
              name="pw"
              type="password"
              placeholder={PW_INPUT.PLACEHOLDER}
              icon="viewCancel"
              error={signinState.pwError}
            />
          </div>
          <div className="flex justify-between">
            <div className="font-style-paragraph text-text-tertiary">
              <input type="checkbox" className="mr-sm" />
              {/* 📌 체크박스 컴포넌트로 수정 필요! */}
              {AUTO_SIGNIN}
            </div>
            <ClickText
              href="/reset-password"
              className="text-text-info font-style-info"
            >
              {FORGOT_PW}
            </ClickText>
          </div>
          <Button type="submit" className="my-lg">
            {SIGNIN}
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
