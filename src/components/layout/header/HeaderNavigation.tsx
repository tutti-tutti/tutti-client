import Link from 'next/link';

import { PATH } from '@/constants';
import { NavIcon } from '@/components';

const HeaderNavigation = () => {
  return (
    <nav className="md:gap-xl gap-md flex">
      <Link href={PATH.COUNTRY_SETTING.url}>
        <NavIcon icon="nation" label={PATH.COUNTRY_SETTING.name} />
      </Link>
      <Link href={PATH.CART.url}>
        <NavIcon icon="cart" label={PATH.CART.name} />
      </Link>
      <Link href={PATH.MY_PAGE.url}>
        <NavIcon icon="user" label={PATH.MY_PAGE.name} />
      </Link>
    </nav>
  );
};

export default HeaderNavigation;
