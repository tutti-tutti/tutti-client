'use client';

import { useRouter } from 'next/navigation';

import { useQuery } from '@tanstack/react-query';

import { categoryQueryOptions } from '@/queries';
import { ROUTER_PATH } from '@/constants';
import CategorySkeleton from './CategorySkeleton';
import { Icon } from '../common';

const ProductCategory = () => {
  const router = useRouter();
  const {
    data: productCategories,
    isPending,
    error,
  } = useQuery(categoryQueryOptions);

  const handleCategoryClick = (categoryId: number) => {
    router.push(ROUTER_PATH.PRODUCT_CATEGORY(String(categoryId)));
  };

  if (isPending) return <CategorySkeleton />;
  if (error)
    return (
      <div className="text-text-danger py-4 text-center">
        카테고리를 불러오는 중 오류가 발생했습니다.
      </div>
    );

  return (
    <div className="gap-6xl flex items-center justify-center">
      {productCategories?.map(category => (
        <div
          key={category.categoryId}
          className="flex cursor-pointer flex-col items-center"
          onClick={() => handleCategoryClick(category.categoryId)}
        >
          <div className="flex items-center justify-center">
            <Icon iconName={category.iconName} />
          </div>
          <span className="font-style-paragraph text-text-primary">
            {category.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProductCategory;
