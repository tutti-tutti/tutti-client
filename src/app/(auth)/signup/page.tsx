import { fetchSignupTerms } from '@/services';
import { AuthForm } from '@/components';
import { AUTH_CONSTANTS, ROUTER_PATH } from '@/constants';

const SignupPage = async () => {
  const signupTerms = await fetchSignupTerms();

  return (
    <AuthForm
      type="signup"
      title={AUTH_CONSTANTS.SIGNUP}
      redirectPath={ROUTER_PATH.LOGIN}
      signupTerms={signupTerms}
    />
  );
};

export default SignupPage;
