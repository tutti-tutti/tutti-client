import Button from '@/components/common/button/Button';
import type { ClickTextButtonProps } from '@/types';

const ClickTextButton = ({ children, onClick }: ClickTextButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="px-sm !py-2xs text-text-primary bg-bg-secondary hover:bg-bg-secondary active:bg-bg-secondary"
    >
      {children}
    </Button>
  );
};

export default ClickTextButton;
