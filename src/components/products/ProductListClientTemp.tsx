'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

import { getProductsQueryOptions } from '@/queries';
import type { Product } from '@/types';
import ProductItem from './ProductItem';

const ProductListClientTemp = () => {
  const { data, isError, error } = useSuspenseQuery(getProductsQueryOptions);
  const productItems = data[0].latestList || [];

  if (isError && error) return 'An error has occurred: ' + error.message;

  return (
      <section>
        <ul className="gap-x-md gap-y-7xl py-7xl grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {productItems.map((item: Product) => (
            <ProductItem key={item.productId} {...item} />
          ))}
        </ul>
      </section>
  );
};

export default ProductListClientTemp;
