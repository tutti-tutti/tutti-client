'use client';

import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useRef } from 'react';

import type { EmailVerificationState } from '@/types';
import {
  requestVerificationCodeAction,
  resetPwAction,
  signinAction,
  signupAction,
  verifyCodeAction,
} from '@/server-actions';

const initialVerificationState: EmailVerificationState = {
  isSuccess: false,
  isEmailVerified: false,
  isCodeVerified: false,
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

  const getStep = (): 'final' | 'email' | 'code' => {
    if (formType === 'signin') return 'final';
    if (!emailVerificationState.isEmailVerified) return 'email';
    if (!codeVerificationState.isCodeVerified) return 'code';
    return 'final';
  };

  const currentStep = getStep();

  useEffect(() => {
    const refFocusMap = {
      email: () => emailRef.current?.focus(),
      code: () => verifyRef.current?.focus(),
      final: () => pwRef.current?.focus(),
    };

    refFocusMap[currentStep]();
  }, [currentStep]);

  useEffect(() => {
    if (finalState.isSuccess) {
      router.push(redirectPath);
    }
  }, [finalState.isSuccess, router, redirectPath]);

  const formActionMap = {
    email: (formData: FormData) => {
      formData.append('type', formType === 'resetPw' ? 'reset' : 'signup');
      return requestVerificationCodeFormAction(formData);
    },
    code: (formData: FormData) => {
      formData.append('email', emailVerificationState.email || '');
      return verifyCodeFormAction(formData);
    },
    final: (formData: FormData) => {
      formData.append('email', emailVerificationState.email || '');
      return finalFormAction(formData);
    },
  };

  const pendingMap = {
    email: isEmailVerificationPending,
    code: isCodeVerificationPending,
    final: isFinalActionPending,
  };

  const createFormAction = (formData: FormData) =>
    formActionMap[currentStep](formData);

  const isPending = pendingMap[currentStep];

  const serverError =
    emailVerificationState.serverError ||
    codeVerificationState.serverError ||
    finalState.serverError;

  return {
    emailVerificationState,
    codeVerificationState,
    finalState,
    currentStep,
    createFormAction,
    isPending,
    serverError,
    emailRef,
    verifyRef,
    pwRef,
  };
};
