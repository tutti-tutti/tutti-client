import { cn } from '@/utils';

interface PageContentHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const PageContentHeader = ({ children, className }: PageContentHeaderProps) => {
  return (
    <header
      className={cn(
        'pt-lg md:py-5xl gap-lg md:gap-4xl flex flex-col justify-center pb-0',
        className,
      )}
    >
      {children}
    </header>
  );
};

export default PageContentHeader;
