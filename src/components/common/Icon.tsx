import type { IconType } from '@/types';

import {
  BellIcon,
  CancelCircleIcon,
  CartIcon,
  CheckIcon,
  ChevronsDownIcon,
  ChevronsUpIcon,
  HamburgerBarIcon,
  HeartFillIcon,
  HeartIcon,
  InfoIcon,
  JihyeIcon,
  LeftArrowIcon,
  LeftIcon,
  MinusIcon,
  NationIcon,
  NaverLogoIcon,
  PlusIcon,
  RightArrowIcon,
  RightIcon,
  SearchIcon,
  SmileIcon,
  StarFillIcon,
  StarGrayIcon,
  StarHalfIcon,
  UpArrowIcon,
  UserIcon,
  ViewCancelIcon,
  ViewIcon,
  XIcon,
  GoogleLogoIcon,
} from '../icons';

export const IconMap: Record<
  IconType,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  cancelCircle: CancelCircleIcon,
  view: ViewIcon,
  viewCancel: ViewCancelIcon,
  comment: JihyeIcon,
  naver: NaverLogoIcon,
  x: XIcon,
  right: RightIcon,
  left: LeftIcon,
  chevronsDown: ChevronsDownIcon,
  chevronsUp: ChevronsUpIcon,
  leftArrow: LeftArrowIcon,
  rightArrow: RightArrowIcon,
  upArrow: UpArrowIcon,
  user: UserIcon,
  check: CheckIcon,
  minus: MinusIcon,
  plus: PlusIcon,
  info: InfoIcon,
  heart: HeartIcon,
  heartFill: HeartFillIcon,
  bell: BellIcon,
  search: SearchIcon,
  smile: SmileIcon,
  cart: CartIcon,
  nation: NationIcon,
  hamburgerbar: HamburgerBarIcon,
  starGray: StarGrayIcon,
  starHalf: StarHalfIcon,
  starFill: StarFillIcon,
  googleLogo: GoogleLogoIcon,
};

interface IconComponentProps extends React.SVGProps<SVGSVGElement> {
  iconName: IconType;
}

const Icon = ({ iconName, ...props }: IconComponentProps) => {
  const IconComponent = IconMap[iconName];

  return <IconComponent {...props} />;
};

export default Icon;
