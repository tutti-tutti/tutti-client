import { type Ref } from 'react';

import { Input } from '@/components';
import { AUTH_CONSTANTS } from '@/constants';

interface VerifyCodeInputProps {
  verifyRef: Ref<HTMLInputElement>;
  error: string;
}

const { VERIFY_EMAIL_INPUT } = AUTH_CONSTANTS;

const VerifyCodeInput = ({ verifyRef, error }: VerifyCodeInputProps) => {
  return (
    <Input
      ref={verifyRef}
      label={VERIFY_EMAIL_INPUT.LABEL}
      name="verifyEmail"
      placeholder={VERIFY_EMAIL_INPUT.PLACEHOLDER}
      error={error}
      maxLength={6}
    />
  );
};

export default VerifyCodeInput;
