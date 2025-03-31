import { QueryProviders } from '@/providers';
import { Header, Footer, ScrollToTopButton } from '@/components';

import '@/styles/globals.css';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProviders>
      <Header />
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
