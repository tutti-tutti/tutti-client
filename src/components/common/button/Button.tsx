'use client';

import type { ButtonProps } from '@/types';
import { cn } from '@/utils/cn';

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
      'bg-bg-primaryInteraction text-white hover:bg-bg-primaryHover active:bg-bg-primaryPressed',
    secondary:
      'bg-secondaryInteraction text-white hover:secondaryHover active:bg-secondaryPressed',
    primaryOutline:
      'border border-primaryInteraction text-primaryInteraction hover:border--primaryHover hover:text-primaryHover active:border-primaryPressed active:text-primaryPressed',
    secondaryOutline:
      'border border-secondaryInteraction text-secondaryInteraction hover:border--secondaryHover hover:text-secondaryHover active:border-secondaryPressed active:text-secondaryPressed',
    disabled: 'bg-bg-disabled text-text-disabled cursor-not-allowed',
    tertiaryOutline:
      'border border-border-disabled bg-bg-primary text-text-disabled',
    transparent: 'text-text-secondary',
    likeOn: 'feat/button-component-34',
    likeOff: 'border border-border-primary text-text-secondary',
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
