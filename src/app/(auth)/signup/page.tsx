import { SignupForm } from '@/components';
import { fetchSignupTerms } from '@/services';

const SignupPage = async () => {
  const signupTerms = await fetchSignupTerms();

  return <SignupForm signupTerms={signupTerms} />;
};

export default SignupPage;
