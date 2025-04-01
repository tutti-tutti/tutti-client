import { cn } from '@/utils';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  const defaultStyles =
    'text-text-secondary font-style-subHeading md:font-style-heading';
  const customStyles = cn(defaultStyles, className);

  return <h2 className={customStyles}>{children}</h2>;
};

export default SectionTitle;
