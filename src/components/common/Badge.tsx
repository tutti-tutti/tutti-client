import { cn } from '@/utils';
import type { BadgeColor, BadgeStyle, OrderStatus } from '@/types';

interface BadgeProps {
  children: React.ReactNode;
  color?: BadgeColor;
  style?: BadgeStyle;
  orderStatus?: OrderStatus;
  className?: string;
}

const INIT_STYLE =
  'inline-flex justify-center items-center p-xs !w-fit h-[24px]';
const BOLD_STYLE = `${INIT_STYLE} rounded-full text-text-inverse`;
const SUBTLE_STYLE = `${INIT_STYLE} rounded-full`;
const SUBTLE_SQUARE_STYLE = `${INIT_STYLE} rounded-md`;
const DOT_STYLE = 'w-[4px] h-[4px] rounded-full';

const VARIANT_STYLE = {
  secondary: {
    default: `${BOLD_STYLE} bg-bg-inverseBold`,
    subtle: `${SUBTLE_STYLE} bg-bg-secondary text-text-secondary`,
    subtleSquare: `${SUBTLE_SQUARE_STYLE} bg-bg-secondary text-text-secondary`,
    outlineSquare: `${SUBTLE_SQUARE_STYLE} bg-bg-secondary text-text-secondary border-border-secondary border`,
    dot: `${DOT_STYLE} bg-bg-inverseBold`,
  },
  primary: {
    default: `${BOLD_STYLE} bg-bg-primaryInteraction`,
    subtle: `${SUBTLE_STYLE} bg-bg-infoSubtle text-text-info`,
    subtleSquare: `${SUBTLE_SQUARE_STYLE} bg-bg-infoSubtle text-text-info`,
    outlineSquare: `${SUBTLE_SQUARE_STYLE} bg-bg-infoSubtle text-text-info border-border-info border`,
    dot: `${DOT_STYLE} bg-bg-primaryInteraction`,
  },
  success: {
    default: `${BOLD_STYLE} bg-bg-successBold`,
    subtle: `${SUBTLE_STYLE} bg-bg-successSubtle text-text-success`,
    subtleSquare: `${SUBTLE_SQUARE_STYLE} bg-bg-successSubtle text-text-success`,
    outlineSquare: `${SUBTLE_SQUARE_STYLE} bg-bg-successSubtle text-text-success border-border-success border`,
    dot: `${DOT_STYLE} bg-bg-successBold`,
  },
  warning: {
    default: `${BOLD_STYLE} bg-bg-warningBold text-text-primary`,
    subtle: `${SUBTLE_STYLE} bg-bg-warningSubtle text-text-warning`,
    subtleSquare: `${SUBTLE_SQUARE_STYLE} bg-bg-warningSubtle text-text-warning`,
    outlineSquare: `${SUBTLE_SQUARE_STYLE} bg-bg-warningSubtle text-text-warning border-border-warning border`,
    dot: `${DOT_STYLE} bg-bg-warningBold`,
  },
  danger: {
    default: `${BOLD_STYLE} bg-bg-dangerBold`,
    subtle: `${SUBTLE_STYLE} bg-bg-dangerSubtle text-text-danger`,
    subtleSquare: `${SUBTLE_SQUARE_STYLE} bg-bg-dangerSubtle text-text-danger`,
    outlineSquare: `${SUBTLE_SQUARE_STYLE} bg-bg-dangerSubtle text-text-danger border-border-danger border`,
    dot: `${DOT_STYLE} bg-bg-dangerBold`,
  },
};

const ORDER_STATUS_STYLE = {
  READY: VARIANT_STYLE.warning.outlineSquare,
  DONE: VARIANT_STYLE.success.outlineSquare,
  CANCELED: VARIANT_STYLE.secondary.outlineSquare,
};

const Badge = ({
  children,
  color = 'primary',
  style = 'default',
  orderStatus,
  className,
}: BadgeProps) => {
  const finalStyle = orderStatus
    ? ORDER_STATUS_STYLE[orderStatus]
    : VARIANT_STYLE[color][style];

  return <div className={cn(finalStyle, className)}>{children}</div>;
};

export default Badge;
