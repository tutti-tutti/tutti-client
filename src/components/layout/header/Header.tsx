import Link from 'next/link';

import { SearchInput, JihyeIcon } from '@/components';
import { ROUTER_PATH } from '@/constants';
import HeaderNavigation from './HeaderNavigation';
import TextHeader from './TextHeader';

const Header = () => {
  return (
    <header className="pt-2xl pb-4xl border-border-secondary flex w-full flex-col border-b">
      <div className="mx-auto w-full max-w-[1280px]">
        <nav className="mb-lg flex justify-end">
          <TextHeader
            country="한국"
            isLoggedIn={false}
            email="tutti@tutti.com"
          />
        </nav>

        <div className="gap-md flex items-center">
          <Link href={ROUTER_PATH.HOME}>
            <div className="p-sm">
              <JihyeIcon />
            </div>
          </Link>
          <SearchInput />
          <HeaderNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
