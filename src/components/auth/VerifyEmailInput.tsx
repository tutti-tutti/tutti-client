'use client';

import { Input } from '@/components';
import { AUTH_CONSTANTS } from '@/constants';

interface VerifyEmailProps {
  email: string;
  error: string;
  isRequest: boolean;
  success: string;
}

const { EMAIL_INPUT } = AUTH_CONSTANTS;

const VerifyEmailInput = ({
  email,
  error,
  isRequest,
  success,
}: VerifyEmailProps) => {
  return (
    <Input
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
