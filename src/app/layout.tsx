import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@/styles/globals.css';

(async () => {
  const { initMsw } = await import('../lib/msw');
  await initMsw();
})();

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
        className={`${pretendard.variable} font-pretendard font-style-paragraph flex min-h-screen flex-col items-center`}
      >
        {children}
      </body>
    </html>
  );
}
