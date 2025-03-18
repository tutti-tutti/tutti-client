import { cn } from '@/utils';
import type { IconType } from '@/types';
import Button, { type ButtonVariant } from './Button';

export interface IconButtonProps {
  icon: IconType;
  variant?: ButtonVariant;
  onClick: () => void;
  iconProps?: React.SVGProps<SVGSVGElement>;
  className?: string;
}

const IconButton = ({
  icon,
  variant,
  onClick,
  iconProps,
  className,
}: IconButtonProps) => {
  return (
    <Button
      icon={icon}
      iconProps={iconProps}
      variant={variant}
      onClick={onClick}
      className={cn('!p-xs rounded-full', className)}
    />
  );
};

export default IconButton;
