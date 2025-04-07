'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import type { EmailVerificationState } from '@/types';
import {
  requestVerificationCodeAction,
  resetPwAction,
  signinAction,
  signupAction,
  verifyCodeAction,
} from '@/server-actions';

const initialVerificationState: EmailVerificationState = {
  success: false,
  emailVerified: false,
  codeVerified: false,
};

const finalActionMap = {
  signup: signupAction,
  resetPw: resetPwAction,
  signin: signinAction,
};

export const useAuthSteps = (
  redirectPath: string,
  formType: 'signin' | 'signup' | 'resetPw',
) => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const verifyRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);

  const finalAction = finalActionMap[formType] || signinAction;

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
  const [finalState, finalFormAction, isFinalActionPending] = useActionState(
    finalAction,
    emailVerificationState,
  );

  const isEmailStep =
    formType === 'signin' ? false : !emailVerificationState.emailVerified;
  const isCodeStep =
    formType === 'signin'
      ? false
      : emailVerificationState.emailVerified &&
        !codeVerificationState.codeVerified;
  const isFinalStep =
    formType === 'signin'
      ? true
      : emailVerificationState.emailVerified &&
        codeVerificationState.codeVerified;

  useEffect(() => {
    if (isEmailStep) {
      emailRef.current?.focus();
    } else if (isCodeStep) {
      verifyRef.current?.focus();
    } else if (isFinalStep) {
      pwRef.current?.focus();
    }
  }, [isEmailStep, isCodeStep, isFinalStep]);

  useEffect(() => {
    if (finalState.success) {
      router.push(redirectPath);
    }
  }, [finalState.success, router, redirectPath]);

  const action = isEmailStep
    ? async (formData: FormData) => {
        formData.append('type', 'signup');
        return requestVerificationCodeFormAction(formData);
      }
    : isCodeStep
      ? async (formData: FormData) => {
          formData.append('email', emailVerificationState.email || '');
          return verifyCodeFormAction(formData);
        }
      : async (formData: FormData) => {
          formData.append('email', emailVerificationState.email || '');
          return finalFormAction(formData);
        };

  const isPending = isEmailStep
    ? isEmailVerificationPending
    : isCodeStep
      ? isCodeVerificationPending
      : isFinalActionPending;

  const serverError =
    emailVerificationState.serverError ||
    codeVerificationState.serverError ||
    finalState.serverError;

  return {
    emailVerificationState,
    codeVerificationState,
    finalState,
    isEmailStep,
    isCodeStep,
    isFinalStep,
    action,
    isPending,
    serverError,
    emailRef,
    verifyRef,
    pwRef,
  };
};
