'use client';

import Link from 'next/link';
import { useState } from 'react';

import { ROUTER_PATH } from '@/constants';
import { SearchInput, Logo, NavIcon } from '@/components';
import HeaderNavigation from './HeaderNavigation';
import TextHeader from './TextHeader';

interface HeaderProps {
  isLogin: boolean;
}

const Header = ({ isLogin }: HeaderProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    console.log('isSearchOpen', isSearchOpen);
  };

  return (
    <header className="bg-bg-primary pt-sm md:pb-md md:border-border-secondary fixed top-0 right-0 left-0 z-10 w-full md:border-b">
      <div className="px-container gap-xs layout-max-width mx-auto flex w-full flex-col">
        <nav className="ml-auto hidden md:block">
          <TextHeader isLogin={isLogin} country="한국" />
        </nav>

        <div className="gap-lg flex h-[54px] items-center justify-between md:h-[64px]">
          <Link href={ROUTER_PATH.HOME}>
            <Logo />
          </Link>
          <div className="hidden flex-1 md:block">
            <SearchInput />
          </div>
          {isSearchOpen && (
            <div className="bg-bg-primary absolute right-[var(--space-container)] left-[var(--space-container)] h-[64px] w-[calc(100%-2*var(--space-container))] md:hidden">
              <SearchInput />
            </div>
          )}
          <div className="md:gap-xl gap-md flex">
            <HeaderNavigation />
            <button
              type="button"
              className="block md:hidden"
              onClick={toggleSearch}
            >
              <NavIcon icon="search" label="검색" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
