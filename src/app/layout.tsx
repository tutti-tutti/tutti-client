import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Header, Footer } from '@/components';
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
        <div className="flex w-full max-w-7xl flex-1 flex-col">
          <div className="mt-2xl mb-4xl w-full">
            <Header />
          </div>
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
