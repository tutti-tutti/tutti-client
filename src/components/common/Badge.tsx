import { cn } from '@/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export type BadgeVariant =
  | 'secondary'
  | 'secondaryOutline'
  | 'secondaryOutlineSquare'
  | 'secondaryDot'
  | 'primary'
  | 'primaryOutline'
  | 'primaryOutlineSquare'
  | 'primaryDot'
  | 'success'
  | 'successOutline'
  | 'successOutlineSquare'
  | 'successDot'
  | 'warning'
  | 'warningOutline'
  | 'warningOutlineSquare'
  | 'warningDot'
  | 'danger'
  | 'dangerOutline'
  | 'dangerOutlineSquare'
  | 'dangerDot';

const Badge = ({ children, variant = 'primary', className }: BadgeProps) => {
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
    secondaryDot: `${DotClass} bg-bg-inverseBold`,
    primary: `${BoldClass} bg-bg-primaryInteraction`,
    primaryOutline: `${OutlineClass} bg-bg-infoSubtle text-text-info`,
    primaryOutlineSquare: `${OutlineSquareClass} bg-bg-infoSubtle text-text-info`,
    primaryDot: `${DotClass} bg-bg-primaryInteraction`,
    success: `${BoldClass} bg-bg-successBold`,
    successOutline: `${OutlineClass} bg-bg-successSubtle text-text-success`,
    successOutlineSquare: `${OutlineSquareClass} bg-bg-successSubtle text-text-success`,
    successDot: `${DotClass} bg-bg-successBold`,
    warning: `${BoldClass} bg-bg-warningBold text-text-primary`,
    warningOutline: `${OutlineClass} bg-bg-warningSubtle text-text-warning`,
    warningOutlineSquare: `${OutlineSquareClass} bg-bg-warningSubtle text-text-warning`,
    warningDot: `${DotClass} bg-bg-warningBold`,
    danger: `${BoldClass} bg-bg-dangerBold`,
    dangerOutline: `${OutlineClass} bg-bg-dangerSubtle text-text-danger`,
    dangerOutlineSquare: `${OutlineSquareClass} bg-bg-dangerSubtle text-text-danger`,
    dangerDot: `${DotClass} bg-bg-dangerBold`,
  };

  return <div className={cn(variantClass[variant], className)}>{children}</div>;
};

export default Badge;
