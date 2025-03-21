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
        'py-xs px-md border-border-tertiaryInteraction text-text-secondary font-style-info shadow-custom-effect bg-custom-gradient',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ExtraButton;
