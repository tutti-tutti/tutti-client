import {
  cn,
  formatDateWithDay,
  formatDateAfterDays,
  formatAfterDays,
} from '@/utils';
import type { OrderItem } from '@/types';
import { ProductThumbnail } from '@/components';
import { default as ProductName } from './ProductName';
import { default as ProductAmoutInfo } from './ProductAmoutInfo';

interface OrderProductListProps {
  orderItems: OrderItem[];
}

const OrderProductList = ({ orderItems }: OrderProductListProps) => {
  const deliveredAt = formatDateAfterDays(Math.floor(Math.random() * 5) + 3); // 현재 날짜로 부터 3~7일 뒤 'yyyy-mm-dd'로 배송 날짜 예정
  const paddingStyles = 'py-md md:py-lg pr-md md:pr-lg first:pt-0';
  const gapStyles = `flex gap-md md:gap-lg`;
  const thumbColumnStyles = 'w-5/12 w-[120px] md:w-[200px]';
  const infoColumnStyles = 'w-7/12 md:w-full';

  return (
    <article className={cn('flex-col', gapStyles)}>
      <div className="gap-xs flex text-xl">
        <strong className="text-text-info">
          {formatDateWithDay(deliveredAt)}
        </strong>
        <span>도착 예정</span>
      </div>
      <ul>
        {orderItems.map(item => (
          <li
            key={item.productItemId}
            className={cn(
              paddingStyles,
              'md:border-border-secondary md:border-b',
            )}
          >
            <article>
              <div className={gapStyles}>
                <div className={thumbColumnStyles}>
                  <ProductThumbnail
                    width="w-full"
                    className="aspect-200/175"
                    imageUrl={item.productImgUrl}
                    name={item.productName}
                  />
                </div>
                <div
                  className={cn(
                    'gap-2xs flex flex-1 flex-col',
                    infoColumnStyles,
                  )}
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
              </div>
              <div className="md:hidden">
                <ProductAmoutInfo
                  price={item.price}
                  quantity={item.quantity}
                  deliveredAt={formatAfterDays(deliveredAt)}
                  className="justify-center"
                />
              </div>
            </article>
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
        'gap-sm text-text-tertiary flex text-sm font-normal md:text-base',
        className,
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
