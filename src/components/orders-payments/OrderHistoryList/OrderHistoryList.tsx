import { cn, formatAfterDays } from '@/utils';
import type { OrderItem } from '@/types';
import {
  ProductThumbnail,
  ProductName,
  ProductAmoutInfo,
  ProductOptionInfo,
  OrdersActions,
  Badge,
} from '@/components';
import { default as OrdersExtraActions } from './OrdersExtraActions';

interface OrderProductListProps {
  orderId: number;
  orderItems: OrderItem[];
}

const OrderHistoryList = ({ orderId, orderItems }: OrderProductListProps) => {
  const paddingStyles = 'py-md md:p-lg';
  const thumbColumnStyles = 'w-[120px] md:w-[288px]';
  const infoColumnStyles = 'w-full md:w-full';

  return (
    <ul>
      {orderItems.map(item => (
        <li
          key={`${orderId}-${item.productItemId}`}
          className={cn(paddingStyles, 'border-border-secondary border-b')}
        >
          <article className="gap-style-orderList flex-col">
            <div className="gap-4xl flex justify-between">
              <article className="gap-style-orderList flex-1">
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
                    infoColumnStyles,
                    'gap-2xs items-between flex flex-col',
                  )}
                >
                  <Badge variant="successOutlineSquare">결제완료</Badge>

                  <div className="gap-xs flex flex-1 flex-col">
                    <ProductName
                      className="w-full"
                      productName={item.productName}
                    />

                    {item.firstOptionValue && (
                      <ProductOptionInfo
                        className="w-full"
                        firstOptionValue={item.firstOptionValue}
                        secondOptionValue={item.secondOptionValue}
                      />
                    )}

                    <ProductAmoutInfo
                      className="hidden w-full items-center md:flex"
                      price={item.price}
                      quantity={item.quantity}
                      expectedArrivalAt={formatAfterDays(
                        item.expectedArrivalAt,
                      )}
                    />
                  </div>

                  <OrdersExtraActions orderId={orderId} />
                </div>
              </article>
              <div className="hidden md:flex">
                <OrdersActions />
              </div>
            </div>

            {/**NOTE - Mobile 용 */}
            <div className="gap-md flex flex-col md:hidden">
              <ProductAmoutInfo
                price={item.price}
                quantity={item.quantity}
                expectedArrivalAt={formatAfterDays(item.expectedArrivalAt)}
                className="justify-center"
              />
              <OrdersActions />
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default OrderHistoryList;
