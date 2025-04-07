'use client';

import { useRouter } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';

import { categoryQueryOptions } from '@/queries';
import { PRODUCTS_CONSTANTS, ROUTER_PATH } from '@/constants';
import { cn } from '@/utils';
import type { CategoryResponseAPISchema } from '@/types';
import CategorySkeleton from './CategorySkeleton';
import { Icon } from '../common';

interface ProductCategoryProps {
  initialCategories?: CategoryResponseAPISchema[];
  currentCategoryId?: string;
}

const ProductCategory = ({
  initialCategories,
  currentCategoryId,
}: ProductCategoryProps) => {
  const router = useRouter();
  const isMainPage = !currentCategoryId;

  const {
    data: productCategories,
    isPending,
    error,
  } = useQuery({ ...categoryQueryOptions, initialData: initialCategories });

  const handleCategoryClick = (categoryId: number) => {
    router.push(ROUTER_PATH.PRODUCT_CATEGORY(String(categoryId)));
  };

  if (isPending) return <CategorySkeleton />;
  if (error)
    return (
      <div className="text-text-danger py-4 text-center">
        {PRODUCTS_CONSTANTS.FETCH_CATEGORY_FAIL_MESSAGE}
      </div>
    );

  const selectedCategory = productCategories?.find(
    category => String(category.categoryId) === currentCategoryId,
  );

  return (
    <div
      className={cn(
        'mt-xl flex flex-col md:mt-0',
        isMainPage ? 'gap-sm md:gap-4xl' : 'gap-md md:gap-xl',
      )}
    >
      {!isMainPage && selectedCategory ? (
        <h1 className="text-text-primary md:font-style-title font-style-heading text-center">
          {selectedCategory.name}
        </h1>
      ) : (
        <h2 className="text-text-primary font-style-heading text-center">
          {PRODUCTS_CONSTANTS.CATEGORY_TITLE}
        </h2>
      )}

      <section className="flex flex-wrap justify-center">
        <div className="gap-md md:gap-6xl grid w-full grid-cols-3 md:flex md:items-center md:justify-center">
          {productCategories?.map(category => {
            const isSelected =
              String(category.categoryId) === currentCategoryId;

            return (
              <div
                key={category.categoryId}
                className="flex cursor-pointer flex-col items-center"
                onClick={() => handleCategoryClick(category.categoryId)}
              >
                <div
                  className={cn(
                    'flex items-center justify-center rounded-lg transition-all duration-300',
                    isSelected
                      ? 'bg-bg-subBrand text-icon-inverse'
                      : 'bg-bg-infoSubtle hover:bg-bg-primaryHover active:bg-bg-primaryPressed text-icon-primaryInteraction hover:text-icon-inverse',
                  )}
                >
                  <Icon iconName={category.iconName} />
                </div>
                <span
                  className={cn(
                    'font-style-paragraph',
                    isSelected ? 'text-text-visited' : 'text-text-primary',
                  )}
                >
                  {category.name}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProductCategory;
