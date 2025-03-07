import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@/styles/globals.css';
import Header from '@/components/layout/header/Header';

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
        className={`${pretendard.variable} font-pretendard flex flex-col items-center`}
      >
        <div className="w-full max-w-7xl">
          <header className="mt-2xl mb-4xl w-full">
            <Header />
          </header>
          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
