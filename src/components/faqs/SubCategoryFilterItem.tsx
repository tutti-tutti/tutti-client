import { type ReactNode } from 'react';
import Link, { type LinkProps } from 'next/link';

import { cn } from '@/utils';

interface SubCategoryFilterItemsProps extends LinkProps {
  isSelected?: boolean;
  children: ReactNode;
}

const SubCategoryFilterItem = ({
  isSelected,
  children,
  ...props
}: SubCategoryFilterItemsProps) => {
  const defaultClass =
    'font-style-paragraph text-text-tertiary flex h-15 items-center';
  const hoverClass = 'hover:text-text-primaryHover';
  const selectedCategoryClass =
    'text-text-primaryInteraction border-b-3 border-b-border-primaryInteraction';
  return (
    <Link
      className={cn(
        defaultClass,
        hoverClass,
        isSelected && selectedCategoryClass,
      )}
      scroll={false}
      replace={true}
      {...props}
    >
      {children}
    </Link>
  );
};

export default SubCategoryFilterItem;
