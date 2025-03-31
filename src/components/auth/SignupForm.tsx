'use client';

import { useActionState, useEffect, useRef } from 'react';

import {
  requestVerificationCodeAction,
  signupAction,
  verifyCodeAction,
} from '@/server-actions';
import { Button } from '@/components';
import { AUTH_CONSTANTS } from '@/constants';
import { EmailVerificationState, SignupTerm } from '@/types';
import PwInput from '@/components/auth/PwInput';
import VerifyCodeInput from '@/components/auth/VerifyCodeInput';
import VerifyEmailInput from '@/components/auth/VerifyEmailInput';
import TermsInput from './TermsInput';

interface SignupFormProps {
  signupTerms: SignupTerm[];
}

const initialVerificationState: EmailVerificationState = {
  success: false,
  emailVerified: false,
  codeVerified: false,
};

const {
  SIGNUP,
  VERIFY_EMAIL_BUTTON,
  CHECK_VERIFY_CODE_BUTTON,
  SIGNUP_LOADING,
  VERIFY_EMAIL_BUTTON_LOADING,
  CHECK_VERIFY_CODE_BUTTON_LOADING,
} = AUTH_CONSTANTS;

const SignupForm = ({ signupTerms }: SignupFormProps) => {
  const [
    emailVerificationState,
    requestVerificationCodeFormAction,
    isEmailVerificationPending,
  ] = useActionState(requestVerificationCodeAction, initialVerificationState);
  const [
    codeVerificationState,
    verifyCodeFormAction,
    isCodeVerificationPending,
  ] = useActionState(verifyCodeAction, emailVerificationState);
  const [signupState, signupFormAction, isSignupPending] = useActionState(
    signupAction,
    emailVerificationState,
  );
  const emailRef = useRef<HTMLInputElement>(null);
  const verifyRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!emailVerificationState.emailVerified) {
      emailRef.current?.focus();
    } else if (!codeVerificationState.codeVerified) {
      verifyRef.current?.focus();
    } else {
      pwRef.current?.focus();
    }
  }, [
    emailVerificationState.emailVerified,
    codeVerificationState.codeVerified,
  ]);

  const action = !emailVerificationState.emailVerified
    ? async (formData: FormData) => {
        formData.append('type', 'signup');
        return requestVerificationCodeFormAction(formData);
      }
    : !codeVerificationState.codeVerified
      ? async (formData: FormData) => {
          formData.append('email', emailVerificationState.email || '');
          return verifyCodeFormAction(formData);
        }
      : async (formData: FormData) => {
          formData.append('email', emailVerificationState.email || '');
          return signupFormAction(formData);
        };

  const buttonText = !emailVerificationState.emailVerified
    ? VERIFY_EMAIL_BUTTON
    : !codeVerificationState.codeVerified
      ? CHECK_VERIFY_CODE_BUTTON
      : SIGNUP;

  const loadingText = !emailVerificationState.emailVerified
    ? VERIFY_EMAIL_BUTTON_LOADING
    : !codeVerificationState.codeVerified
      ? CHECK_VERIFY_CODE_BUTTON_LOADING
      : SIGNUP_LOADING;

  const isPending = !emailVerificationState.emailVerified
    ? isEmailVerificationPending
    : !codeVerificationState.codeVerified
      ? isCodeVerificationPending
      : isSignupPending;

  return (
    <form action={action}>
      <fieldset className="flex flex-col">
        <legend className="mb-sm font-style-heading">{SIGNUP}</legend>
        <div className="gap-sm mb-5xl flex flex-col">
          <VerifyEmailInput
            email={emailVerificationState.email || ''}
            emailRef={emailRef}
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
              <VerifyCodeInput
                verifyRef={verifyRef}
                error={codeVerificationState.error!}
              />
            )}
          {emailVerificationState.emailVerified &&
            codeVerificationState.codeVerified && (
              <>
                <PwInput
                  pwRef={pwRef}
                  pw={signupState.pw || ''}
                  checkPw={signupState.checkPw || ''}
                  pwError={signupState?.pwError || ''}
                  checkPwError={signupState.checkPwError || ''}
                />
                <TermsInput
                  essentialPolicy={signupState.essentialPolicy || []}
                  optionalPolicy={signupState.optionalPolicy || []}
                  signupTerms={signupTerms}
                  error={signupState.essentialPolicyError || ''}
                />
              </>
            )}
        </div>
        <Button
          type="submit"
          className="my-lg font-style-subHeading"
          variant={isPending ? 'disabled' : 'primary'}
        >
          {isPending ? loadingText : buttonText}
        </Button>
      </fieldset>
    </form>
  );
};

export default SignupForm;
