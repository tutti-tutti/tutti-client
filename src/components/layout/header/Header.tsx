import Link from 'next/link';

import JihyeIcon from '@/assets/icons/JihyeIcon';
import SearchInput from '@/components/common/SearchInput';
import { ROUTER_PATH } from '@/constants';
import HeaderNavigation from './HeaderNavigation';
import TextHeader from './TextHeader';

const Header = () => {
  return (
    <header className="flex w-full flex-col">
      <div className="mb-lg flex w-full justify-end">
        <TextHeader country="한국" isLoggedIn={false} email="tutti@tutti.com" />
      </div>

      <div className="gap-md flex items-center">
        <Link href={ROUTER_PATH.HOME}>
          <div className="p-sm">
            <JihyeIcon />
          </div>
        </Link>
        <SearchInput />
        <HeaderNavigation />
      </div>
    </header>
  );
};

export default Header;
