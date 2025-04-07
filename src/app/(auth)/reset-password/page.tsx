import { AuthForm } from '@/components';
import { AUTH_CONSTANTS } from '@/constants';

const ResetPasswordPage = () => {
  return (
    <AuthForm
      type="resetPw"
      title={AUTH_CONSTANTS.RESET_PW}
      redirectPath="/signin"
    />
  );
};

export default ResetPasswordPage;
