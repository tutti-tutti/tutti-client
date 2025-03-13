'use client';

import { Input } from '@/components/common';
import { AUTH_CONSTANTS } from '@/constants';

interface VerifyEmailProps {
  email: string;
  error: string;
  isRequest: boolean;
}

const { EMAIL_INPUT } = AUTH_CONSTANTS;

const VerifyEmailInput = ({ email, error, isRequest }: VerifyEmailProps) => {
  return (
    <Input
      label={EMAIL_INPUT.LABEL}
      name="email"
      placeholder={EMAIL_INPUT.PLACEHOLDER}
      disabled={isRequest}
      defaultValue={email}
      error={error}
    />
  );
};

export default VerifyEmailInput;
