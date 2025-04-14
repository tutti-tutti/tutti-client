'use client';

import { useQuery } from '@tanstack/react-query';

import { categoryByIdQueryOptions } from '@/queries';
import { useProductListVirtualizer } from '@/hooks';
import type { Product, ProductReviewInfo } from '@/types';
import { ProductItem, ProductListSkeleton } from '../products';

interface ClientCategoryProductListProps {
  initialProducts: Product[];
  categoryId: string;
}

const ClientCategoryProductList = ({
  initialProducts,
  categoryId,
  productReviews = [],
}: ClientCategoryProductListProps & {
  productReviews: ProductReviewInfo[];
}) => {
  const { data: productItems, isPending } = useQuery({
    ...categoryByIdQueryOptions(String(categoryId)),
    initialData: initialProducts,
    enabled: !!categoryId,
  });

  const { groupedRows, totalSize, virtualRows, rowVirtualizer } =
    useProductListVirtualizer({ products: productItems });

  if (isPending) {
    return <ProductListSkeleton />;
  }

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
              <ul className="gap-x-md grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {rowItems.map((item: Product) => (
                  <ProductItem
                    key={item.productId}
                    {...item}
                    reviewInfo={
                      productReviews[item.productId] || {
                        avg: '0.0',
                        totalCount: 0,
                      }
                    }
                  />
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ClientCategoryProductList;
