import type { RefObject } from 'react';

import type { EmailVerificationState, SignupTerm } from '@/types';
import { AUTH_CONSTANTS } from '@/constants';
import VerifyEmailInput from './VerifyEmailInput';
import VerifyCodeInput from './VerifyCodeInput';
import PwInput from './PwInput';
import TermsInput from './TermsInput';

interface AuthFormContentProps {
  formType: 'signin' | 'signup' | 'resetPw';
  currentStep: 'email' | 'code' | 'final';
  emailVerificationState: EmailVerificationState;
  codeVerificationState: EmailVerificationState;
  finalState: EmailVerificationState;
  emailRef: RefObject<HTMLInputElement | null>;
  verifyRef: RefObject<HTMLInputElement | null>;
  pwRef: RefObject<HTMLInputElement | null>;
  signupTerms?: SignupTerm[];
}

const AuthFormContent = ({
  formType,
  currentStep,
  emailVerificationState,
  codeVerificationState,
  finalState,
  emailRef,
  verifyRef,
  pwRef,
  signupTerms = [],
}: AuthFormContentProps) => {
  const verifyEmailSuccessMap = {
    code: formType !== 'signin' ? emailVerificationState.message : undefined,
    final:
      formType !== 'signin' ? AUTH_CONSTANTS.EMAIL_INPUT.SUCCESS : undefined,
    email: undefined,
  };

  const verifyEmailInputSuccess = verifyEmailSuccessMap[currentStep];

  return (
    <div className="gap-md mb-xl flex flex-col">
      <VerifyEmailInput
        email={emailVerificationState.email || ''}
        emailRef={emailRef}
        error={emailVerificationState.error || ''}
        isRequest={formType !== 'signin' && currentStep !== 'email'}
        success={verifyEmailInputSuccess}
      />

      {currentStep === 'code' && (
        <VerifyCodeInput
          verifyRef={verifyRef}
          error={codeVerificationState.error || ''}
        />
      )}

      {currentStep === 'final' && (
        <PwInput
          pwRef={pwRef}
          pw={finalState.pw || ''}
          checkPw={finalState.checkPw || ''}
          pwError={finalState.pwError || ''}
          checkPwError={finalState.checkPwError || ''}
          isNewPw={formType === 'resetPw'}
          isSignin={formType === 'signin'}
        />
      )}

      {formType === 'signup' && currentStep === 'final' && (
        <TermsInput
          essentialPolicy={finalState.essentialPolicy || []}
          optionalPolicy={finalState.optionalPolicy || []}
          signupTerms={signupTerms}
          error={finalState.essentialPolicyError || ''}
        />
      )}
    </div>
  );
};

export default AuthFormContent;
