import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Header, Footer, ScrollToTopButton } from '@/components';
import '@/styles/globals.css';

if (process.env.NODE_ENV === 'development') {
  (async () => {
    const { initMsw } = await import('../lib/msw');
    await initMsw();
  })();
}

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '45 920',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tutti',
  description: 'Tutti의 프론트엔드입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} font-pretendard flex min-h-screen flex-col items-center`}
      >
        <Header />
        <div className="relative w-full max-w-[1280px] flex-1">
          <main>{children}</main>
        </div>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
