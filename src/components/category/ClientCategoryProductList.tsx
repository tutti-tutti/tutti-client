'use client';

import { useQuery } from '@tanstack/react-query';

import { categoryByIdQueryOptions } from '@/queries';
import type { Product } from '@/types';
import { ProductItem } from '../products';

interface ClientCategoryProductListProps {
  initialProducts: Product[];
  categoryId: string;
}

const ClientCategoryProductList = ({
  initialProducts,
  categoryId,
}: ClientCategoryProductListProps) => {
  const { data: productItems, isPending } = useQuery({
    ...categoryByIdQueryOptions(String(categoryId)),
    initialData: initialProducts,
    enabled: !!categoryId,
  });

  if (isPending) {
    return (
      <div className="text-text-danger py-4 text-center">
        카테고리 상품을 불러오는 중입니다...
      </div>
    );
  }

  return (
    <section>
      <ul className="gap-x-md gap-y-lg md:gap-y-7xl py-lg md:py-7xl grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {productItems.map((item: Product) => (
          <ProductItem key={item.productId} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default ClientCategoryProductList;
