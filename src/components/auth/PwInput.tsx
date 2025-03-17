import { Input } from '@/components/common';
import { AUTH_CONSTANTS } from '@/constants';
import React from 'react';

interface VerifyCodeInputProps {
  pwError: string;
  checkPwError: string;
}

const { PW_INPUT, CHECK_PW_INPUT } = AUTH_CONSTANTS;

const PwInput = ({ pwError, checkPwError }: VerifyCodeInputProps) => {
  return (
    <>
      <Input
        label={PW_INPUT.LABEL}
        name="pw"
        type="password"
        placeholder={PW_INPUT.PLACEHOLDER}
        icon="viewCancel"
        error={pwError}
      />
      <Input
        label={CHECK_PW_INPUT.LABEL}
        name="checkPw"
        type="password"
        placeholder={CHECK_PW_INPUT.PLACEHOLDER}
        icon="viewCancel"
        error={checkPwError}
      />
    </>
  );
};

export default PwInput;
