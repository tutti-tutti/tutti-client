'use client';

import { useQuery } from '@tanstack/react-query';

import { productsQueryOptions } from '@/queries';
import { useProductListVirtualizer } from '@/hooks';
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

  const { groupedRows, totalSize, virtualRows, rowVirtualizer } =
    useProductListVirtualizer({ products: productItems });

  return (
    <section className="relative">
      <div
        style={{
          height: `${totalSize}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualRows.map(virtualRow => {
          const rowIndex = virtualRow.index;
          const rowItems = groupedRows[rowIndex];

          return (
            <div
              key={virtualRow.key}
              data-index={virtualRow.index}
              ref={rowVirtualizer.measureElement}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${virtualRow.start}px)`,
                height: `${virtualRow.size}px`,
              }}
            >
              <ul className="gap-x-md grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                {rowItems.map((item: Product) => (
                  <ProductItem key={item.productId} {...item} />
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ClientProductList;
