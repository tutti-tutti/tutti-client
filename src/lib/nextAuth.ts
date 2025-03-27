import { NextAuthOptions } from 'next-auth';

import { setAccessToken, setRefreshToken, socialSignin } from '@/services';
import GoogleProvider from 'next-auth/providers/google';
import NaverProvider from 'next-auth/providers/naver';

declare module 'next-auth' {
  interface Session {
    user: {
      provider?: string;
      socialId?: string;
      accessToken?: string;
      email?: string;
      name?: string;
      image?: string;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    provider?: string;
    accessToken?: string;
    socialId?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
    NaverProvider({
      clientId: process.env.NAVER_ID || '',
      clientSecret: process.env.NAVER_SECRET || '',
    }),
  ],
  events: {
    async signIn({ user, account }) {
      if (account?.provider && user.email) {
        try {
          const response = await socialSignin(
            user.email,
            account.provider,
            account.providerAccountId,
            account.access_token || '',
          );

          await setAccessToken(response.accessToken);
          await setRefreshToken(response.refreshToken);
        } catch (error) {
          console.error('백엔드 JWT 발급 오류:', error);
        }
      }
    },
  },
};
