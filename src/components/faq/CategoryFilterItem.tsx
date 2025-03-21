import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

import { cn } from '@/utils';

interface CategoryFilterItemsProps extends LinkProps {
  isSelected?: boolean;
  children: ReactNode;
}

const CategoryFilterItems = ({
  isSelected,
  children,
  ...props
}: CategoryFilterItemsProps) => {
  const defaultClass =
    'font-style-subHeading text-text-tertiary flex h-20 items-center';
  const hoverClass = 'hover:text-text-primaryHover';
  const selectedCategoryClass =
    'text-text-primaryInteraction border-b-4 border-b-border-primaryInteraction';
  return (
    <Link
      className={cn(
        defaultClass,
        hoverClass,
        isSelected && selectedCategoryClass,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CategoryFilterItems;
