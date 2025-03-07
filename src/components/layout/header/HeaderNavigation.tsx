import { NavIcon } from '@/components';
import { NationIcon, CartIcon, UserIcon } from '@/assets';
import { ROUTER_PATH, PATH_NAME } from '@/constants';

const HeaderNavigation = () => {
  return (
    <div className="gap-xl flex">
      <NavIcon
        href={ROUTER_PATH.COUNTRY_SETTING}
        icon={<NationIcon />}
        label={PATH_NAME.COUNTRY_SETTING}
      />
      <NavIcon
        href={ROUTER_PATH.CART}
        icon={<CartIcon />}
        label={PATH_NAME.CART}
      />
      <NavIcon
        href={ROUTER_PATH.MY_PAGE}
        icon={<UserIcon />}
        label={PATH_NAME.MY_PAGE}
      />
    </div>
  );
};

export default HeaderNavigation;
