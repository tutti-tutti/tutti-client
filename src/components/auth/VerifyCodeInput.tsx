import { Input } from '@/components';
import { AUTH_CONSTANTS } from '@/constants';
import React from 'react';

interface VerifyCodeInputProps {
  error: string;
}

const { VERIFY_EMAIL_INPUT } = AUTH_CONSTANTS;

const VerifyCodeInput = ({ error }: VerifyCodeInputProps) => {
  return (
    <Input
      label={VERIFY_EMAIL_INPUT.LABEL}
      name="verifyEmail"
      placeholder={VERIFY_EMAIL_INPUT.PLACEHOLDER}
      error={error}
      maxLength={6}
    />
  );
};

export default VerifyCodeInput;
