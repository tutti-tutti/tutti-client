import Link from 'next/link';

import { ROUTER_PATH, PATH_NAME } from '@/constants';
import { NavIcon, NationIcon, CartIcon, UserIcon } from '@/components';

const HeaderNavigation = () => {
  return (
    <nav className="md:gap-xl gap-md flex">
      <Link href={ROUTER_PATH.COUNTRY_SETTING}>
        <NavIcon icon={<NationIcon />} label={PATH_NAME.COUNTRY_SETTING} />
      </Link>
      <Link href={ROUTER_PATH.CART}>
        <NavIcon icon={<CartIcon />} label={PATH_NAME.CART} />
      </Link>
      <Link href={ROUTER_PATH.MY_PAGE}>
        <NavIcon icon={<UserIcon />} label={PATH_NAME.MY_PAGE} />
      </Link>
    </nav>
  );
};

export default HeaderNavigation;
