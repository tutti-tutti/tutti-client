import Link from 'next/link';

import { PATH } from '@/constants';
import { NavIcon } from '@/components';

const { COUNTRY_SETTING, CART, MY_PAGE } = PATH;

const HeaderNavigation = () => {
  return (
    <nav className="md:gap-xl gap-md flex">
      <Link href={COUNTRY_SETTING.path}>
        <NavIcon icon="nation" label={COUNTRY_SETTING.name} />
      </Link>
      <Link href={CART.path}>
        <NavIcon icon="cart" label={CART.name} />
      </Link>
      <Link href={MY_PAGE.path}>
        <NavIcon icon="user" label={MY_PAGE.name} />
      </Link>
    </nav>
  );
};

export default HeaderNavigation;
