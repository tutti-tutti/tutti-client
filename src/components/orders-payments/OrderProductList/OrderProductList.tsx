import { cn } from '@/utils';
import type { OrderItem } from '@/types';
import { ProductThumbnail } from '@/components';
import { default as ProductName } from './ProductName';
import { default as ProductAmoutInfo } from './ProductAmoutInfo';

interface OrderProductListProps {
  orderItems: OrderItem[];
}

const OrderProductList = ({ orderItems }: OrderProductListProps) => {
  const deliveredAt = '3일 뒤 도착 예상';
  const paddingStyles = 'py-md md:py-lg pr-md md:pr-lg first:pt-0';
  const gapStyles = `flex gap-md md:gap-lg`;
  const thumbColumnStyles = 'w-5/12 w-[120px] md:w-[200px]';
  const infoColumnStyles = 'w-7/12 md:w-full';

  return (
    <article className={cn('flex-col', gapStyles)}>
      <div className="gap-xs flex text-xl">
        <strong className="text-text-info">00월 00일(월)</strong>
        <span>도착 예정</span>
      </div>
      <ul>
        {orderItems.map(item => (
          <li key={item.productItemId}>
            <article
              className={cn(
                'md:border-border-secondary md:border-b',
                paddingStyles,
                gapStyles,
              )}
            >
              <div className={thumbColumnStyles}>
                <ProductThumbnail
                  width="w-full"
                  className="aspect-200/175"
                  imageUrl={item.productImgUrl}
                  name={item.productName}
                />
              </div>
              <div
                className={cn('gap-2xs flex flex-1 flex-col', infoColumnStyles)}
              >
                <ProductName productName={item.productName} />
                <ProductAmoutInfo
                  className="hidden md:flex"
                  price={item.price}
                  quantity={item.quantity}
                  deliveredAt={deliveredAt}
                />
                <ProductOption
                  firstOptionValue={item.firstOptionValue}
                  secondOptionValue={item.secondOptionValue}
                />
              </div>
            </article>
            <div className="md:hidden">
              <ProductAmoutInfo
                price={item.price}
                quantity={item.quantity}
                deliveredAt={deliveredAt}
                className="justify-center"
              />
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

interface ProductOptionProps {
  firstOptionValue: string;
  secondOptionValue: string;
  className?: string;
}

const ProductOption = ({
  firstOptionValue,
  secondOptionValue,
  className,
}: ProductOptionProps) => {
  return (
    <div
      className={cn(
        className,
        'gap-sm text-text-tertiary flex text-sm font-normal md:text-base',
      )}
    >
      <span>{firstOptionValue}</span>
      {secondOptionValue ? (
        <>
          <i>·</i>
          <span>{secondOptionValue}</span>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default OrderProductList;
