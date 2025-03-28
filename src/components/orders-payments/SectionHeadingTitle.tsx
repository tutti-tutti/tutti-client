import { cn } from '@/utils';

interface SectionHeadingTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeadingTitle = ({
  children,
  className,
}: SectionHeadingTitleProps) => {
  return (
    <h2
      className={cn(
        'text-text-secondary font-style-subHeading md:font-style-heading',
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default SectionHeadingTitle;
