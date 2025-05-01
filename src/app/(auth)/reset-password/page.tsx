import { AUTH_CONSTANTS } from '@/constants';
import { pagePath } from '@/navigator';
import { AuthForm } from '@/components';

const ResetPasswordPage = () => {
  return (
    <AuthForm
      type="resetPw"
      title={AUTH_CONSTANTS.RESET_PW}
      redirectPath={pagePath.signin}
    />
  );
};

export default ResetPasswordPage;
