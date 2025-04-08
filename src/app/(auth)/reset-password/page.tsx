import { AuthForm } from '@/components';
import { AUTH_CONSTANTS, ROUTER_PATH } from '@/constants';

const ResetPasswordPage = () => {
  return (
    <AuthForm
      type="resetPw"
      title={AUTH_CONSTANTS.RESET_PW}
      redirectPath={ROUTER_PATH.LOGIN}
    />
  );
};

export default ResetPasswordPage;
