import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Toaster } from 'sonner';

import { BASE_URL } from '@/constants';
import ogImg from '@/assets/images/open_graph.jpg';
import '@/styles/globals.css';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '45 920',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tutti',
  description: 'Tutti는 당신의 쇼핑을 더 편리하게 만들어주는 서비스입니다.',
  creator: 'Tutti',
  metadataBase: new URL(BASE_URL.SITE),
  openGraph: {
    type: 'website',
    locale: 'ko-KR',
    siteName: 'Tutti',
    images: {
      url: ogImg.src,
    },
  },
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
        <Toaster position="bottom-right" />
        {children}
      </body>
    </html>
  );
}
