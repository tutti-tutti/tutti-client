'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

import { cn } from '@/utils/cn';
import type { IconType } from '@/types';
import Icon from '../Icon';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'primaryOutline'
  | 'primaryShadow'
  | 'secondaryOutline'
  | 'disabled'
  | 'tertiaryOutline'
  | 'tertiaryOutlineInteraction'
  | 'transparent'
  | 'likeOn'
  | 'likeOff';

export interface ButtonProps {
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  type?: 'button' | 'submit' | 'reset';
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
  iconProps?: React.SVGProps<SVGSVGElement>;
}

const INIT_STYLE =
  'px-lg py-md flex gap-sm rounded-lg transition-all duration-300 justify-center items-center cursor-pointer';

const VARIANT_STYLE = {
  primary:
    'bg-bg-primaryInteraction text-text-inverse hover:bg-bg-primaryHover active:bg-bg-primaryPressed',
  secondary:
    'bg-bg-secondaryInteraction text-text-inverse hover:bg-bg-secondaryHover active:bg-bg-secondaryPressed',
  primaryOutline:
    'bg-bg-primary border border-border-primaryInteraction text-text-primaryInteraction hover:border-border-primaryHover hover:text-text-primaryHover active:border-border-primaryPressed active:text-text-primaryPressed',
  primaryShadow:
    'bg-bg-primary text-text-primary hover:text-text-inverse hover:bg-bg-primaryHover active:bg-bg-primaryPressed active:text-text-inverse shadow-custom-effect',
  secondaryOutline:
    'bg-bg-primary border border-border-secondaryInteraction text-text-secondaryInteraction hover:border-border-secondaryHover hover:text-text-secondaryHover active:border-border-secondaryPressed active:text-text-secondaryPressed',
  disabled: 'bg-bg-disabled text-text-disabled cursor-not-allowed',
  tertiaryOutline:
    'bg-bg-primary border border-border-disabled bg-bg-primary text-text-disabled',
  tertiaryOutlineInteraction:
    'bg-bg-primary border border-border-disabled bg-bg-primary text-text-disabled hover:border-border-primaryHover hover:text-text-primaryHover active:border-border-primaryPressed active:text-text-primaryPressed',
  transparent: 'text-text-secondaryInteration',
  likeOn: 'border-bg-subBrand text-text-visited border',
  likeOff: 'border border-border-primary text-secondaryInteration',
};

const Button = ({
  href,
  target,
  type = 'button',
  icon,
  iconPosition = 'left',
  variant = 'primary',
  className,
  onClick,
  children,
  iconProps,
}: ButtonProps) => {
  const finalStyle = cn(INIT_STYLE, VARIANT_STYLE[variant], className);

  const renderContent = () => (
    <>
      {iconPosition === 'left' && icon && (
        <Icon iconName={icon} {...iconProps} />
      )}
      {children}
      {iconPosition === 'right' && icon && (
        <Icon iconName={icon} {...iconProps} />
      )}
    </>
  );

  return href ? (
    <Link href={href} target={target} className={finalStyle}>
      {renderContent()}
    </Link>
  ) : (
    <button
      type={type}
      className={finalStyle}
      onClick={onClick}
      disabled={variant === 'disabled'}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
