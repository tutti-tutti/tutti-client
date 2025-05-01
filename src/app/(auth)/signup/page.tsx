import { AUTH_CONSTANTS } from '@/constants';
import { pagePath } from '@/navigator';
import { fetchSignupTerms } from '@/services';
import { AuthForm } from '@/components';

const SignupPage = async () => {
  const signupTerms = await fetchSignupTerms();

  return (
    <AuthForm
      type="signup"
      title={AUTH_CONSTANTS.SIGNUP}
      redirectPath={pagePath.signin}
      signupTerms={signupTerms}
    />
  );
};

export default SignupPage;
