'use client';

import type { ReactNode } from 'react';

import { SignupTerm } from '@/types';
import { useAuthSteps } from '@/hooks/useAuthSteps';
import AuthFormContent from './AuthFormContent';
import AuthSubmitButton from './AuthSubmitButton';

interface AuthFormProps {
  type: 'signin' | 'signup' | 'resetPw';
  title: string;
  redirectPath: string;
  signupTerms?: SignupTerm[];
  extraFields?: ReactNode;
  formFooter?: ReactNode;
}

const AuthForm = ({
  type,
  title,
  redirectPath,
  signupTerms = [],
  extraFields,
  formFooter,
}: AuthFormProps) => {
  const {
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
  } = useAuthSteps(redirectPath, type);

  return (
    <>
      <form action={createFormAction}>
        <fieldset className="flex flex-col">
          <legend className="mb-xs font-style-heading">{title}</legend>

          <AuthFormContent
            formType={type}
            currentStep={currentStep}
            emailVerificationState={emailVerificationState}
            codeVerificationState={codeVerificationState}
            finalState={finalState}
            emailRef={emailRef}
            verifyRef={verifyRef}
            pwRef={pwRef}
            signupTerms={signupTerms}
          />

          {extraFields}

          <div className="text-text-danger font-style-info text-center">
            {serverError}
          </div>

          <AuthSubmitButton
            formType={type}
            currentStep={currentStep}
            isPending={isPending}
            className={type === 'signin' ? 'my-lg' : ''}
          />
        </fieldset>
      </form>

      {formFooter}
    </>
  );
};

export default AuthForm;
