import { QueryProviders } from '@/providers';
import { Header, Footer, ScrollToTopButton } from '@/components';

import '@/styles/globals.css';
import { getAccessToken } from '@/services';

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const accessToken = await getAccessToken();
  const isLogin = !!accessToken;

  return (
    <QueryProviders>
      <Header isLogin={isLogin} />
      <div className="layout-max-width relative w-full flex-1">
        <main className="px-container pt-md pb-7xl md:mt-header-height mt-header-heightMobile md:pb-[100px]">
          {children}
        </main>
      </div>
      <Footer />
      <ScrollToTopButton />
    </QueryProviders>
  );
}
