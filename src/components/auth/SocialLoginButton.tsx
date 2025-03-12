'use client';

import { Button } from '@/components/common';

const SocialLoginButton = () => {
  const handleNaverLogin = () => {
    // 📌 네이버 로그인 로직
  };

  const handleGoogleLogin = () => {
    // 📌 구글 로그인 로직
  };

  return (
    <div className="gap-sm mb-2xl font-style-subHeading flex justify-between">
      <Button
        icon="naver"
        className="bg-logo-naver hover:bg-logo-naver active:bg-logo-naver flex-auto"
        onClick={handleNaverLogin}
      >
        네이버로 로그인
      </Button>
      <Button
        icon="googleLogo"
        className="text-text-tertiary border-border-primary bg-bg-primary flex-auto border hover:bg-transparent active:bg-transparent"
        onClick={handleGoogleLogin}
      >
        Google로 로그인
      </Button>
    </div>
  );
};

export default SocialLoginButton;
