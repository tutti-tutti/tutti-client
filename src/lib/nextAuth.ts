import { NextAuthOptions } from 'next-auth';
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
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.provider = account.provider;
        token.accessToken = account.access_token;
        token.socialId = account.providerAccountId;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.provider = token.provider;
      session.user.accessToken = token.accessToken;
      session.user.socialId = token.socialId;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
};
