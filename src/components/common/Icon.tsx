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
  TuttiIcon,
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
  RadioIcon,
  GoodIcon,
  BadIcon,
  GroceryIcon,
  ClothesIcon,
  NecessityIcon,
  DigitalIcon,
  CosmeticIcon,
  NotFoundIcon,
  TinyLogoIcon,
  MainPageChatbotDesktopIcon,
  MainPageChatbotMobileIcon,
  ThinkingFaceIcon,
} from '../icons';

export const IconMap: Record<
  IconType,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  cancelCircle: CancelCircleIcon,
  view: ViewIcon,
  viewCancel: ViewCancelIcon,
  logo: TuttiIcon,
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
  radio: RadioIcon,
  positive: GoodIcon,
  negative: BadIcon,
  grocery: GroceryIcon,
  clothes: ClothesIcon,
  necessity: NecessityIcon,
  digital: DigitalIcon,
  cosmetic: CosmeticIcon,
  notFound: NotFoundIcon,
  tinyLogo: TinyLogoIcon,
  mainChatbotMobile: MainPageChatbotMobileIcon,
  mainChatbotDesktop: MainPageChatbotDesktopIcon,
  thinkingFace: ThinkingFaceIcon,
};

interface IconComponentProps extends React.SVGProps<SVGSVGElement> {
  iconName: IconType;
  iconProps?: React.SVGProps<SVGSVGElement>;
}

const Icon = ({ iconName, iconProps, ...props }: IconComponentProps) => {
  const IconComponent = IconMap[iconName];

  return <IconComponent {...iconProps} {...props} />;
};

export default Icon;
