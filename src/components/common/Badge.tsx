import { cn } from '@/utils';
import type { BadgeColor, BadgeStyle, OrderStatus } from '@/types';

interface BadgeProps {
  children: React.ReactNode;
  color?: BadgeColor;
  style?: BadgeStyle;
  orderStatus?: OrderStatus;
  className?: string;
}

const Badge = ({
  children,
  color = 'primary',
  style = 'default',
  orderStatus,
  className,
}: BadgeProps) => {
  const initStyle =
    'inline-flex justify-center items-center p-xs !w-fit h-[24px]';
  const boldStyle = `${initStyle} rounded-full text-text-inverse`;
  const subtleStyle = `${initStyle} rounded-full`;
  const subtleSquareStyle = `${initStyle} rounded-md`;
  const dotStyle = 'w-[4px] h-[4px] rounded-full';
  const variantClass = {
    secondary: {
      default: `${boldStyle} bg-bg-inverseBold`,
      subtle: `${subtleStyle} bg-bg-secondary text-text-secondary`,
      subtleSquare: `${subtleSquareStyle} bg-bg-secondary text-text-secondary`,
      outlineSquare: `${subtleSquareStyle} bg-bg-secondary text-text-secondary border-border-secondary border`,
      dot: `${dotStyle} bg-bg-inverseBold`,
    },
    primary: {
      default: `${boldStyle} bg-bg-primaryInteraction`,
      subtle: `${subtleStyle} bg-bg-infoSubtle text-text-info`,
      subtleSquare: `${subtleSquareStyle} bg-bg-infoSubtle text-text-info`,
      outlineSquare: `${subtleSquareStyle} bg-bg-infoSubtle text-text-info border-border-info border`,
      dot: `${dotStyle} bg-bg-primaryInteraction`,
    },
    success: {
      default: `${boldStyle} bg-bg-successBold`,
      subtle: `${subtleStyle} bg-bg-successSubtle text-text-success`,
      subtleSquare: `${subtleSquareStyle} bg-bg-successSubtle text-text-success`,
      outlineSquare: `${subtleSquareStyle} bg-bg-successSubtle text-text-success border-border-success border`,
      dot: `${dotStyle} bg-bg-successBold`,
    },
    warning: {
      default: `${boldStyle} bg-bg-warningBold text-text-primary`,
      subtle: `${subtleStyle} bg-bg-warningSubtle text-text-warning`,
      subtleSquare: `${subtleSquareStyle} bg-bg-warningSubtle text-text-warning`,
      outlineSquare: `${subtleSquareStyle} bg-bg-warningSubtle text-text-warning border-border-warning border`,
      dot: `${dotStyle} bg-bg-warningBold`,
    },
    danger: {
      default: `${boldStyle} bg-bg-dangerBold`,
      subtle: `${subtleStyle} bg-bg-dangerSubtle text-text-danger`,
      subtleSquare: `${subtleSquareStyle} bg-bg-dangerSubtle text-text-danger`,
      outlineSquare: `${subtleSquareStyle} bg-bg-dangerSubtle text-text-danger border-border-danger border`,
      dot: `${dotStyle} bg-bg-dangerBold`,
    },
  };
  const orderStatusClass = {
    READY: variantClass.warning.outlineSquare,
    DONE: variantClass.success.outlineSquare,
    CANCELED: variantClass.secondary.outlineSquare,
  };

  const finalClass = orderStatus
    ? orderStatusClass[orderStatus]
    : variantClass[color][style];

  return <div className={cn(finalClass, className)}>{children}</div>;
};

export default Badge;
