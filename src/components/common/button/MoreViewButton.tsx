import { PRODUCTS_CONSTANTS } from '@/constants';
import Button from './Button';

interface MoreViewButtonProps {
  onClick?: () => void;
}

const MoreViewButton = ({ onClick }: MoreViewButtonProps) => {
  return (
    <Button
      className="!py-lg text-text-secondary w-full text-xl"
      variant="transparent"
      icon="chevronsDown"
      iconPosition="right"
      onClick={onClick}
    >
      {PRODUCTS_CONSTANTS.MORE_VIEW}
    </Button>
  );
};

export default MoreViewButton;
