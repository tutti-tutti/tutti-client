import HeaderIcon from '@/components/common/HeaderIcon';
import { NationIcon, CartIcon, UserIcon } from '@/assets/icons';
import { ROUTER_PATH, PATH_NAME } from '@/constants';

const NavIcon = () => {
  return (
    <div className="gap-xl flex">
      <HeaderIcon
        href={ROUTER_PATH.COUNTRY_SETTING}
        icon={<NationIcon />}
        label={PATH_NAME.COUNTRY_SETTING}
      />
      <HeaderIcon
        href={ROUTER_PATH.CART}
        icon={<CartIcon />}
        label={PATH_NAME.CART}
      />
      <HeaderIcon
        href={ROUTER_PATH.MY_PAGE}
        icon={<UserIcon />}
        label={PATH_NAME.MY_PAGE}
      />
    </div>
  );
};

export default NavIcon;
