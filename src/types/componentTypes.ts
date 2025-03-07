import { ReactNode } from 'react';

export type IconType =
  | 'cancelCircle'
  | 'view'
  | 'viewCancel'
  | 'comment'
  | 'googleLogo'
  | 'naver'
  | 'x'
  | 'right'
  | 'left'
  | 'chevronsDown'
  | 'chevronsUp'
  | 'leftArrow'
  | 'rightArrow'
  | 'upArrow'
  | 'user'
  | 'check'
  | 'minus'
  | 'plus'
  | 'info'
  | 'heart'
  | 'heartFill'
  | 'bell'
  | 'search'
  | 'smile'
  | 'cart'
  | 'nation'
  | 'hamburgerbar'
  | 'starGray'
  | 'starHalf'
  | 'starFill';

export interface BaseButtonProps {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'primaryOutline'
  | 'secondaryOutline'
  | 'disabled'
  | 'tertiaryOutline'
  | 'transparent'
  | 'likeOn'
  | 'likeOff';

export interface ButtonProps extends BaseButtonProps {
  icon?: IconType;
  variant?: ButtonVariant;
}

export interface IconButtonProps {
  icon: IconType;
  variant?: ButtonVariant;
  onClick: () => void;
}

export type ClickTextButtonProps = BaseButtonProps;
