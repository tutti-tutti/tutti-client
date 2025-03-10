import Button, { type ButtonVariant } from '@/components/common/button/Button';
import type { IconType } from '@/types';

export interface IconButtonProps {
  icon: IconType;
  variant?: ButtonVariant;
  onClick: () => void;
}

const IconButton = ({ icon, variant, onClick }: IconButtonProps) => {
  return (
    <Button
      icon={icon}
      variant={variant}
      onClick={onClick}
      className="p-xs rounded-full"
    />
  );
};

export default IconButton;
