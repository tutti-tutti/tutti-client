import { Button, ClickText, Input } from '@/components';
import SocialLoginButton from '@/components/auth/SocialLoginButton';
import { AUTH_CONSTANTS } from '@/constants';

const { LOGIN, FORGOT_PW, AUTO_LOGIN, SOCIAL_LOGIN, TO_LOGIN } = AUTH_CONSTANTS;

const SigninPage = () => {
  return (
    <>
      <div className="mb-xs">{LOGIN}</div>
      <Input
        name="email"
        placeholder="이메일을 입력해주세요"
        className="mb-md"
      />
      <Input
        name="email"
        placeholder="비밀번호를 입력해주세요"
        className="mb-sm"
      />
      <div className="flex justify-between">
        <div>
          <input type="checkbox" className="mr-sm" />
          {/* 📌 체크박스 컴포넌트로 수정 필요! */}
          {AUTO_LOGIN}
        </div>
        <ClickText href="/reset-password" className="text-text-info">
          {FORGOT_PW}
        </ClickText>
      </div>
      <Button type="submit" className="my-lg">
        {LOGIN}
      </Button>
      <div className="mb-sm flex items-center">
        <div className="border-border-primary flex-grow border-t"></div>
        <span className="text-text-secondary mx-4 flex-shrink">
          {SOCIAL_LOGIN}
        </span>
        <div className="border-border-primary flex-grow border-t"></div>
      </div>
      <SocialLoginButton />
      <ClickText href="/signup" className="text-text-info text-center">
        {TO_LOGIN}
      </ClickText>
    </>
  );
};

export default SigninPage;
