'use client';

import { useQuery } from '@tanstack/react-query';

import { productsQueryOptions } from '@/queries';
import type { Product } from '@/types';
import ProductItem from './ProductItem';

const ClientProductList = ({
  initialProducts,
}: {
  initialProducts: Product[];
}) => {
  const { data: productItems } = useQuery({
    ...productsQueryOptions,
    initialData: initialProducts,
  });

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

export default ClientProductList;
