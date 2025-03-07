import Button from '@/components/common/button/Button';
import type { IconButtonProps } from '@/types';

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
