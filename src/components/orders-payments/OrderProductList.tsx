import { formatPrice, cn } from '@/utils';
import type { OrderItem } from '@/types';
import { ProductThumbnail } from '@/components';

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
                <ProductInfo
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
              <ProductInfo
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

interface ProductNameProps {
  productName: string;
  className?: string;
}

const ProductName = ({ productName, className }: ProductNameProps) => {
  return (
    <h3
      className={cn(
        'font-style-subHeading ellipsis-row-2 leading-[1.6] font-normal break-all md:break-keep',
        className,
      )}
    >
      {productName}
    </h3>
  );
};

interface ProductInfoProps {
  price: number;
  quantity: number;
  deliveredAt: string;
  className?: string;
}

const ProductInfo = ({
  price,
  quantity,
  deliveredAt,
  className,
}: ProductInfoProps) => {
  return (
    <div className={cn('gap-sm flex items-center font-semibold', className)}>
      <strong className="font-style-heading font-semibold">
        {formatPrice(price)}
      </strong>
      <span className="before:pr-sm after:pl-sm text-text-tertiaryInfo before:content-['·'] after:content-['·']">
        {quantity}
      </span>
      <strong className="text-text-primaryInteraction text-base font-semibold md:text-lg">
        {deliveredAt}
      </strong>
    </div>
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
