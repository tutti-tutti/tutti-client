import { Input } from '@/components/common';
import { AUTH_CONSTANTS } from '@/constants';
import React from 'react';

interface VerifyCodeInputProps {
  pwError: string;
  checkPwError: string;
  isNewPw?: boolean;
}

const { PW_INPUT, CHECK_PW_INPUT, NEW_PW_INPUT, CHECK_NEW_PW_INPUT } =
  AUTH_CONSTANTS;

const PwInput = ({ pwError, checkPwError, isNewPw }: VerifyCodeInputProps) => {
  return (
    <>
      <Input
        label={!isNewPw ? PW_INPUT.LABEL : NEW_PW_INPUT.LABEL}
        name="pw"
        type="password"
        placeholder={!isNewPw ? PW_INPUT.PLACEHOLDER : NEW_PW_INPUT.PLACEHOLDER}
        icon="viewCancel"
        error={pwError}
      />
      <Input
        label={!isNewPw ? CHECK_PW_INPUT.LABEL : CHECK_NEW_PW_INPUT.LABEL}
        name="checkPw"
        type="password"
        placeholder={
          !isNewPw ? CHECK_PW_INPUT.PLACEHOLDER : CHECK_NEW_PW_INPUT.PLACEHOLDER
        }
        icon="viewCancel"
        error={checkPwError}
      />
    </>
  );
};

export default PwInput;
