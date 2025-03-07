import type { ReactNode } from 'react';
import Button from '@/components/common/button/Button';

interface IconButtonProps {
  icon: ReactNode;
  variant?:
    | 'primary'
    | 'secondary'
    | 'primaryOutline'
    | 'secondaryOutline'
    | 'disabled'
    | 'tertiaryOutline'
    | 'transparent'
    | 'subBrand';
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
