import { cn } from '@/utils';

interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
}

const PageTitle = ({ children, className }: PageTitleProps) => {
  return (
    <h1 className={cn('text-text-primary font-style-title', className)}>
      {children}
    </h1>
  );
};

export default PageTitle;
