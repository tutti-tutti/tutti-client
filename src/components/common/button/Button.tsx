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
    primary: 'bg-[#663eff] text-white hover:bg-[#5d38e8] active:bg-[#5d38e8]',
    secondary: 'bg-[#007bff] text-white hover:bg-[#0070e8] active:bg-[#0057b5]',
    primaryOutline:
      'border border-[#663eff] text-[#663eff] hover:border--[#5d38e8] hover:text-[#5d38e8] active:border-[#5d38e8] active:text-[#5d38e8]',
    secondaryOutline:
      'border border-[#007bff] text-[#007bff] hover:border--[#0070e8] hover:text-[#0070e8] active:border-[#0057b5] active:text-[#0057b5]',
    disabled: 'bg-bg-disabled text-text-disabled cursor-not-allowed',
    tertiaryOutline: '',
    transparent: '',
    likeOn: '',
    likeOff: '',
  };

  return (
    <button
      type={type}
      className={cn(defaultClass, variantClass[variant], className)}
      onClick={onClick}
      disabled={variant === 'disabled'}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
