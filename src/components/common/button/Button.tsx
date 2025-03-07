'use client';

import type { IconType } from '@/types';
import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

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

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  icon?: IconType;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

const Button = ({
  type = 'button',
  icon,
  variant = 'primary',
  className,
  onClick,
  children,
}: ButtonProps) => {
  const defaultClass =
    'px-lg py-md flex gap-sm rounded-lg justify-center items-center cursor-pointer';
  const variantClass = {
    primary:
      'bg-bg-primaryInteraction text-text-inverse hover:bg-bg-primaryHover active:bg-bg-primaryPressed',
    secondary:
      'bg-bg-secondaryInteraction text-text-inverse hover:bg-bg-secondaryHover active:bg-bg-secondaryPressed',
    primaryOutline:
      'border border-border-primaryInteraction text-text-primaryInteraction hover:border-border-primaryHover hover:text-text-primaryHover active:border-border-primaryPressed active:text-text-primaryPressed',
    secondaryOutline:
      'border border-border-secondaryInteraction text-text-secondaryInteraction hover:border-border-secondaryHover hover:text-text-secondaryHover active:border-border-secondaryPressed active:text-text-secondaryPressed',
    disabled: 'bg-bg-disabled text-text-disabled cursor-not-allowed',
    tertiaryOutline:
      'border border-border-disabled bg-bg-primary text-text-disabled',
    transparent: 'text-[#525252]',
    likeOn: 'border-bg-subBrand text-text-visited border',
    likeOff: 'border border-border-primary text-[#525252]',
  };

  return (
    <button
      type={type}
      className={cn(defaultClass, variantClass[variant], className)}
      onClick={onClick}
      disabled={variant === 'disabled'}
    >
      {icon}
      {/* 📌 아이콘 컴포넌트로 변경 필요 */}
      {children}
    </button>
  );
};

export default Button;
