import { cn } from "@/utils";

interface PageContentHeaderProps {
    children: React.ReactNode;
    className?: string;
}

const PageContentHeader = ({children, className}: PageContentHeaderProps) => {

  return (
    <header className={cn("pt-lg md:py-5xl pb-0 gap-lg md:gap-4xl flex flex-col justify-center", className)}>
        {children}
    </header>
  );
};

export default PageContentHeader;
