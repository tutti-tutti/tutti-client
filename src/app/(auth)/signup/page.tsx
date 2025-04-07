import { fetchSignupTerms } from '@/services';
import { AuthForm } from '@/components';
import { AUTH_CONSTANTS } from '@/constants';

const SignupPage = async () => {
  const signupTerms = await fetchSignupTerms();

  return (
    <AuthForm
      type="signup"
      title={AUTH_CONSTANTS.SIGNUP}
      redirectPath="/signin"
      signupTerms={signupTerms}
    />
  );
};

export default SignupPage;
