import { cn } from '@/utils';
import type { BadgeVariant, OrderStatus } from '@/types';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  orderStatus?: OrderStatus;
  className?: string;
}

const Badge = ({
  children,
  variant = 'primary',
  orderStatus = 'READY',
  className,
}: BadgeProps) => {
  const defaultClass =
    'inline-flex justify-center items-center p-xs !w-fit h-[24px]';
  const BoldClass = `${defaultClass} rounded-full text-text-inverse`;
  const OutlineClass = `${defaultClass} rounded-full`;
  const OutlineSquareClass = `${defaultClass} rounded-md`;
  const DotClass = 'w-[4px] h-[4px] rounded-full';
  const variantClass = {
    secondary: `${BoldClass} bg-bg-inverseBold`,
    secondaryOutline: `${OutlineClass} bg-bg-secondary text-text-secondary`,
    secondaryOutlineSquare: `${OutlineSquareClass} bg-bg-secondary text-text-secondary`,
    secondaryOutlineSquareBorder: `${OutlineSquareClass} bg-bg-secondary text-text-secondary border-border-secondary border`,
    secondaryDot: `${DotClass} bg-bg-inverseBold`,
    primary: `${BoldClass} bg-bg-primaryInteraction`,
    primaryOutline: `${OutlineClass} bg-bg-infoSubtle text-text-info`,
    primaryOutlineSquare: `${OutlineSquareClass} bg-bg-infoSubtle text-text-info`,
    primaryOutlineSquareBorder: `${OutlineSquareClass} bg-bg-infoSubtle text-text-info border-border-info border`,
    primaryDot: `${DotClass} bg-bg-primaryInteraction`,
    success: `${BoldClass} bg-bg-successBold`,
    successOutline: `${OutlineClass} bg-bg-successSubtle text-text-success`,
    successOutlineSquare: `${OutlineSquareClass} bg-bg-successSubtle text-text-success`,
    successOutlineSquareBorder: `${OutlineSquareClass} bg-bg-successSubtle text-text-success border-border-success border`,
    successDot: `${DotClass} bg-bg-successBold`,
    warning: `${BoldClass} bg-bg-warningBold text-text-primary`,
    warningOutline: `${OutlineClass} bg-bg-warningSubtle text-text-warning`,
    warningOutlineSquare: `${OutlineSquareClass} bg-bg-warningSubtle text-text-warning`,
    warningOutlineSquareBorder: `${OutlineSquareClass} bg-bg-warningSubtle text-text-warning border-border-warning border`,
    warningDot: `${DotClass} bg-bg-warningBold`,
    danger: `${BoldClass} bg-bg-dangerBold`,
    dangerOutline: `${OutlineClass} bg-bg-dangerSubtle text-text-danger`,
    dangerOutlineSquare: `${OutlineSquareClass} bg-bg-dangerSubtle text-text-danger`,
    dangerOutlineSquareBorder: `${OutlineSquareClass} bg-bg-dangerSubtle text-text-danger border-border-danger border`,
    dangerDot: `${DotClass} bg-bg-dangerBold`,
  };
  const orderStatusClass = {
    READY: variantClass.warningOutlineSquareBorder,
    DONE: variantClass.successOutlineSquareBorder,
    CANCELED: variantClass.secondaryOutlineSquareBorder,
  };

  return (
    <div
      className={cn(
        variantClass[variant],
        orderStatusClass[orderStatus],
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
