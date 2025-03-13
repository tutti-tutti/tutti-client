import Link from 'next/link';

import { ROUTER_PATH } from '@/constants';
import { SearchInput, Logo, SearchIcon, NavIcon } from '@/components';
import HeaderNavigation from './HeaderNavigation';
import TextHeader from './TextHeader';

const Header = () => {
  return (
    <header className="px-container pt-lg md:pt-2xl md:pb-5xl md:border-border-secondary w-full md:border-b">
      <div className="gap-2xl mx-auto flex w-full max-w-[1280px] flex-col">
        <nav className="ml-auto hidden md:block">
          <TextHeader
            country="한국"
            isLoggedIn={false}
            email="tutti@tutti.com"
          />
        </nav>

        <div className="gap-lg flex h-[54px] items-center justify-between md:h-[84px]">
          <Link href={ROUTER_PATH.HOME}>
            <Logo />
          </Link>
          <div className="hidden flex-1 md:block">
            <SearchInput />
          </div>
          <div className="md:gap-xl gap-md flex">
            <HeaderNavigation />
            <button type="button" className="block md:hidden">
              <NavIcon icon={<SearchIcon />} label="검색" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
