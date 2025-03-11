import Button from '@/components/common/button/Button';
import type { ReactNode } from 'react';

interface ExtraButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const ExtraButton = ({ children, onClick }: ExtraButtonProps) => {
  return (
    <Button
      className="py-xs px-md border-border-tertiaryInteraction text-text-secondary font-style-info bg-[linear-gradient(180deg,_#FFF_17.28%,_#D4D4D4_495.36%)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.16),_0px_0px_1px_0px_rgba(0,0,0,0.12)]"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ExtraButton;
