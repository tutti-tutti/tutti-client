import Link from 'next/link';

import { SearchInput, JihyeIcon } from '@/components';
import { ROUTER_PATH } from '@/constants';
import HeaderNavigation from './HeaderNavigation';
import TextHeader from './TextHeader';

const Header = () => {
  return (
    <header className="px-md pt-2xl pb-5xl border-border-secondary w-full border-b">
      <div className="gap-2xl mx-auto flex w-full max-w-[1280px] flex-col">
        <nav className="ml-auto">
          <TextHeader
            country="한국"
            isLoggedIn={false}
            email="tutti@tutti.com"
          />
        </nav>

        <div className="gap-lg flex h-[84px] items-center">
          <Link href={ROUTER_PATH.HOME}>
            <JihyeIcon />
          </Link>
          <SearchInput />
          <HeaderNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
