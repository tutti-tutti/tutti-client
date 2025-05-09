import { AUTH_CONSTANTS } from '@/constants';
import { pagePath } from '@/navigator';
import { AuthForm, Checkbox, ClickText, SocialLoginButton } from '@/components';

const { SIGNIN, AUTO_SIGNIN, FORGOT_PW, SOCIAL_SIGNIN, TO_SIGNUP } =
  AUTH_CONSTANTS;

const SigninPage = () => {
  return (
    <AuthForm
      type="signin"
      title={SIGNIN}
      redirectPath={pagePath.home}
      extraFields={<AutoLoginAndResetBox />}
      formFooter={<SocialLoginAndSignupBox />}
    />
  );
};

export default SigninPage;

const AutoLoginAndResetBox = () => (
  <>
    <div className="flex justify-between">
      <div className="font-style-paragraph text-text-tertiary gap-xs flex">
        <Checkbox />
        <div>{AUTO_SIGNIN}</div>
      </div>
      <ClickText
        href={pagePath.resetPw}
        className="text-text-info font-style-info"
      >
        {FORGOT_PW}
      </ClickText>
    </div>
  </>
);

const SocialLoginAndSignupBox = () => (
  <>
    <div className="mb-sm flex items-center">
      <hr className="border-border-primary flex-grow border-t" />
      <span className="text-text-secondary font-style-paragraph mx-4">
        {SOCIAL_SIGNIN}
      </span>
      <hr className="border-border-primary flex-grow border-t" />
    </div>
    <SocialLoginButton />
    <ClickText
      href={pagePath.signup}
      className="text-text-info font-style-info text-center"
    >
      {TO_SIGNUP}
    </ClickText>
  </>
);
