import { Button, ClickText, Input } from '@/components';
import SocialLoginButton from '@/components/auth/SocialLoginButton';
import { AUTH_CONSTANTS } from '@/constants';

const { LOGIN, FORGOT_PW, AUTO_LOGIN, SOCIAL_LOGIN, TO_LOGIN } = AUTH_CONSTANTS;

const SigninPage = () => {
  const tempLoginServerAction = async () => {
    'use server';
  };

  return (
    <>
      <form action={tempLoginServerAction}>
        <fieldset className="flex flex-col">
          <legend className="mb-xs font-style-heading">{LOGIN}</legend>
          <div className="gap-md mb-sm flex flex-col">
            <Input
              label="이메일 입력"
              name="email"
              placeholder="이메일을 입력해주세요"
            />
            <Input
              label="비밀번호 입력"
              name="pw"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              icon="viewCancel"
              error="아이디 혹은 비밀번호가 잘못되었습니다."
            />
          </div>
          <div className="flex justify-between">
            <div className="font-style-paragraph text-text-tertiary">
              <input type="checkbox" className="mr-sm" />
              {/* 📌 체크박스 컴포넌트로 수정 필요! */}
              {AUTO_LOGIN}
            </div>
            <ClickText
              href="/reset-password"
              className="text-text-info font-style-info"
            >
              {FORGOT_PW}
            </ClickText>
          </div>
          <Button type="submit" className="my-lg">
            {LOGIN}
          </Button>
        </fieldset>
      </form>
      <div className="mb-sm flex items-center">
        <div className="border-border-primary flex-grow border-t"></div>
        <span className="text-text-secondary font-style-paragraph mx-4">
          {SOCIAL_LOGIN}
        </span>
        <div className="border-border-primary flex-grow border-t"></div>
      </div>
      <SocialLoginButton />
      <ClickText
        href="/signup"
        className="text-text-info font-style-info text-center"
      >
        {TO_LOGIN}
      </ClickText>
    </>
  );
};

export default SigninPage;
