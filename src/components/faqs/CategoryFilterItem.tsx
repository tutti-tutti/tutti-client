import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

import { cn } from '@/utils';

interface CategoryFilterItemsProps extends LinkProps {
  isTop?: boolean;
  isSelected?: boolean;
  children: ReactNode;
}

const CategoryFilterItems = ({
  isTop,
  isSelected,
  children,
  ...props
}: CategoryFilterItemsProps) => {
  const defaultClass =
    'font-style-subHeading text-text-tertiary flex h-20 items-center relative';
  const hoverClass = 'hover:text-text-primaryHover';
  const selectedCategoryClass = `text-text-primaryInteraction ${!isTop && 'after:border-border-secondary after:absolute after:-bottom-[6.2px] after:left-1/2 after:h-3 after:w-3 after:-translate-x-1/2 after:rotate-45 after:border-t after:border-l after:bg-bg-primary'}`;
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

export default CategoryFilterItems;
