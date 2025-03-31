import { cn } from '@/utils';
import Button from './Button';

interface ExtraButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const ExtraButton = ({ children, onClick, className }: ExtraButtonProps) => {
  return (
    <Button
      className={cn(
        'py-2xs px-sm border-border-tertiaryInteraction text-text-secondary font-style-info bg-custom-gradient h-[32px] border-1',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ExtraButton;
