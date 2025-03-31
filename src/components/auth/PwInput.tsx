'use client';

import { useState, type Ref } from 'react';

import { Input } from '@/components';
import { AUTH_CONSTANTS } from '@/constants';

interface VerifyCodeInputProps {
  pwRef?: Ref<HTMLInputElement>;
  pw: string;
  checkPw?: string;
  pwError?: string;
  checkPwError?: string;
  isNewPw?: boolean;
  isSignin?: boolean;
}

const { PW_INPUT, CHECK_PW_INPUT, NEW_PW_INPUT, CHECK_NEW_PW_INPUT } =
  AUTH_CONSTANTS;

const PwInput = ({
  pwRef,
  pw,
  checkPw,
  pwError,
  checkPwError,
  isNewPw,
  isSignin,
}: VerifyCodeInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCheckPassword, setShowCheckPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const toggleCheckPasswordVisibility = () => {
    setShowCheckPassword(prev => !prev);
  };

  return (
    <>
      <Input
        ref={pwRef}
        label={!isNewPw ? PW_INPUT.LABEL : NEW_PW_INPUT.LABEL}
        name="pw"
        type={showPassword ? 'text' : 'password'}
        placeholder={!isNewPw ? PW_INPUT.PLACEHOLDER : NEW_PW_INPUT.PLACEHOLDER}
        icon={showPassword ? 'view' : 'viewCancel'}
        onIconClick={togglePasswordVisibility}
        error={pwError}
        defaultValue={pw}
      />
      {!isSignin && (
        <Input
          label={!isNewPw ? CHECK_PW_INPUT.LABEL : CHECK_NEW_PW_INPUT.LABEL}
          name="checkPw"
          type={showCheckPassword ? 'text' : 'password'}
          placeholder={
            !isNewPw
              ? CHECK_PW_INPUT.PLACEHOLDER
              : CHECK_NEW_PW_INPUT.PLACEHOLDER
          }
          icon={showCheckPassword ? 'view' : 'viewCancel'}
          onIconClick={toggleCheckPasswordVisibility}
          error={checkPwError}
          defaultValue={checkPw}
        />
      )}
    </>
  );
};

export default PwInput;
