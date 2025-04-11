import { cn } from '@/utils';
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

const PADDING_STYLES = 'py-md sm:py-lg sm:pr-lg first:pt-0';
const THUMB_COLUMN_STYLES = 'w-5/12 w-[120px] sm:w-[200px]';
const INFO_COLUMN_STYLES = 'w-7/12 sm:w-full';

const OrderProductList = ({ orderItems, gapStyles }: OrderProductListProps) => {
  return (
    <ul>
      {orderItems.map(item => (
        <li
          key={item.productItemId}
          className={cn(PADDING_STYLES, 'border-border-secondary border-b')}
        >
          <article className={cn('flex-col', gapStyles)}>
            <div className={cn(gapStyles, 'items-center')}>
              <div className={THUMB_COLUMN_STYLES}>
                <ProductThumbnail
                  width="w-full"
                  className="aspect-200/175"
                  imageUrl={item.productImgUrl}
                  name={item.productName}
                />
              </div>
              <div
                className={cn(
                  'gap-md flex flex-1 flex-col',
                  INFO_COLUMN_STYLES,
                )}
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
                  expectedArrivalAt={item.expectedArrivalAt}
                />
              </div>
            </div>
            <div className="sm:hidden">
              <ProductAmoutInfo
                price={item.price}
                quantity={item.quantity}
                expectedArrivalAt={item.expectedArrivalAt}
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
