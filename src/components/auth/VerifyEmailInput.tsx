'use client';

import type { Ref } from 'react';

import { Input } from '@/components';
import { AUTH_CONSTANTS } from '@/constants';

interface VerifyEmailProps {
  email: string;
  emailRef?: Ref<HTMLInputElement>;
  error?: string;
  isRequest?: boolean;
  success?: string;
}

const { EMAIL_INPUT } = AUTH_CONSTANTS;

const VerifyEmailInput = ({
  email,
  emailRef,
  error,
  isRequest,
  success,
}: VerifyEmailProps) => {
  return (
    <Input
      ref={emailRef}
      label={EMAIL_INPUT.LABEL}
      name="email"
      placeholder={EMAIL_INPUT.PLACEHOLDER}
      disabled={isRequest}
      defaultValue={email}
      error={error}
      success={success}
      className="disabled:border-border-success disabled:bg-bg-successSubtle"
    />
  );
};

export default VerifyEmailInput;
