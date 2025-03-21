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
      <div className="relative w-full max-w-[1280px] flex-1">
        <main className="px-container py-md md:mt-header-height mt-header-heightMobile">
          {children}
        </main>
      </div>
      <Footer />
      <ScrollToTopButton />
    </QueryProviders>
  );
}
