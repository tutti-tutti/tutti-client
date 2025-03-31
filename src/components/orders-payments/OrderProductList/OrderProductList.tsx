import { cn, formatAfterDays } from '@/utils';
import type { OrderItem } from '@/types';
import {
  ProductThumbnail,
  ProductName,
  ProductAmoutInfo,
  ProductOptionInfo,
} from '@/components';

interface OrderProductListProps {
  orderItems: Required<OrderItem>[];
  gapStyles?: string;
}

const OrderProductList = ({ orderItems, gapStyles }: OrderProductListProps) => {
  const paddingStyles = 'py-md sm:py-lg sm:pr-lg first:pt-0';
  const thumbColumnStyles = 'w-5/12 w-[120px] sm:w-[200px]';
  const infoColumnStyles = 'w-7/12 sm:w-full';

  return (
    <ul>
      {orderItems.map(item => (
        <li
          key={item.productItemId}
          className={cn(paddingStyles, 'border-border-secondary border-b')}
        >
          <article className={cn('flex-col', gapStyles)}>
            <div className={cn(gapStyles, 'items-center')}>
              <div className={thumbColumnStyles}>
                <ProductThumbnail
                  width="w-full"
                  className="aspect-200/175"
                  imageUrl={item.productImgUrl}
                  name={item.productName}
                />
              </div>
              <div
                className={cn('gap-md flex flex-1 flex-col', infoColumnStyles)}
              >
                <ProductName productName={item.productName} />

                {item.firstOptionValue && (
                  <ProductOptionInfo
                    firstOptionValue={item.firstOptionValue}
                    secondOptionValue={item.secondOptionValue}
                  />
                )}

                <ProductAmoutInfo
                  className="hidden sm:flex"
                  price={item.price}
                  quantity={item.quantity}
                  expectedArrivalAt={formatAfterDays(item.expectedArrivalAt)}
                />
              </div>
            </div>
            <div className="sm:hidden">
              <ProductAmoutInfo
                price={item.price}
                quantity={item.quantity}
                expectedArrivalAt={formatAfterDays(item.expectedArrivalAt)}
                className="justify-center"
              />
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default OrderProductList;
