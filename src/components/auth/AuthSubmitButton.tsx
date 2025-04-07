import { cn } from '@/utils';
import { Button } from '@/components';
import { AUTH_CONSTANTS } from '@/constants';

interface AuthSubmitButtonProps {
  formType: 'signin' | 'signup' | 'resetPw';
  currentStep: 'email' | 'code' | 'final';
  isPending: boolean;
  className?: string;
}

const {
  SIGNIN,
  SIGNUP,
  RESET_PW,
  VERIFY_EMAIL_BUTTON,
  CHECK_VERIFY_CODE_BUTTON,
  SIGNIN_LOADING,
  SIGNUP_LOADING,
  RESET_PW_LOADING,
  VERIFY_EMAIL_BUTTON_LOADING,
  CHECK_VERIFY_CODE_BUTTON_LOADING,
} = AUTH_CONSTANTS;

const AuthSubmitButton = ({
  formType,
  currentStep,
  isPending,
  className = '',
}: AuthSubmitButtonProps) => {
  const stepButtonTextMap = {
    email: isPending ? VERIFY_EMAIL_BUTTON_LOADING : VERIFY_EMAIL_BUTTON,
    code: isPending
      ? CHECK_VERIFY_CODE_BUTTON_LOADING
      : CHECK_VERIFY_CODE_BUTTON,
    final: {
      signin: isPending ? SIGNIN_LOADING : SIGNIN,
      signup: isPending ? SIGNUP_LOADING : SIGNUP,
      resetPw: isPending ? RESET_PW_LOADING : RESET_PW,
    },
  };

  const buttonText =
    currentStep === 'final'
      ? stepButtonTextMap.final[formType]
      : stepButtonTextMap[currentStep];

  return (
    <Button
      type="submit"
      className={cn('font-style-subHeading', className)}
      variant={isPending ? 'disabled' : 'primary'}
    >
      {buttonText}
    </Button>
  );
};

export default AuthSubmitButton;
