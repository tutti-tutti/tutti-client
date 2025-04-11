import Link from 'next/link';

import { cn } from '@/utils';

interface ClickTextProps extends React.HTMLAttributes<HTMLButtonElement> {
  href?: string;
  disabled?: boolean;
  className?: string;
}

const ClickText = ({
  href,
  children,
  disabled = false,
  className = '',
  onClick,
  ...props
}: ClickTextProps) => {
  const baseStyle = 'text-base transition-colors duration-300';
  const stateStyles = disabled
    ? 'text-text-tertiary cursor-not-allowed'
    : 'text-text-primary hover:text-text-primaryHover active:text-text-primaryPressed';

  if (disabled || !href) {
    return (
      <button
        className={cn(baseStyle, stateStyles, className)}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <Link href={href}>
      <p className={cn(baseStyle, stateStyles, className)}>{children}</p>
    </Link>
  );
};

export default ClickText;
