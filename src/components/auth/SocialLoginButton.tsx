'use client';

import { Button } from '@/components/common';
import { signIn } from 'next-auth/react';

const SocialLoginButton = () => {
  const handleSocialLogin = (provider: 'naver' | 'google') => {
    signIn(provider, { callbackUrl: '/' });
  };

  return (
    <div className="gap-sm mb-2xl font-style-subHeading flex justify-between max-sm:flex-col">
      <Button
        icon="naver"
        className="bg-logo-naver hover:bg-logo-naver active:bg-logo-naver flex-auto"
        onClick={() => handleSocialLogin('naver')}
      >
        네이버로 로그인
      </Button>
      <Button
        icon="googleLogo"
        className="text-text-tertiary border-border-primary bg-bg-primary flex-auto border hover:bg-transparent active:bg-transparent"
        onClick={() => handleSocialLogin('google')}
      >
        Google로 로그인
      </Button>
    </div>
  );
};

export default SocialLoginButton;
