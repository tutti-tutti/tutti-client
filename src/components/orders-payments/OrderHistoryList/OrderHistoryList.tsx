'use client';

import { cn } from '@/utils';
import type { OrderItem, OrderStatus } from '@/types';
import {
  ProductThumbnail,
  ProductName,
  ProductAmoutInfo,
  ProductOptionInfo,
  OrdersActions,
  OrderStatusBadge,
} from '@/components';
import { default as OrdersExtraActions } from './OrdersExtraActions';

type OrderProductListProps = {
  orderId: number;
  orderNumber: string;
  orderItems: OrderItem[];
  orderStatus: string;
};

const OrderHistoryList = ({
  orderId,
  orderNumber,
  orderItems,
  orderStatus,
}: OrderProductListProps) => {
  const itemsCount = orderItems.length;

  const paddingStyles = 'px-0 py-md md:py-xl';
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
                  <OrderStatusBadge orderStatus={orderStatus as OrderStatus} />

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
                      expectedArrivalAt={item.expectedArrivalAt}
                    />
                  </div>

                  <OrdersExtraActions
                    orderId={orderId}
                    orderNumber={orderNumber}
                    productItemId={item.productItemId}
                    isCanceled={orderStatus === 'CANCELED'}
                  />
                </div>
              </article>
              <div className="hidden md:flex">
                <OrdersActions
                  orderId={orderId}
                  itemsCount={itemsCount}
                  orderNumber={orderNumber}
                  isCanceled={orderStatus === 'CANCELED'}
                />
              </div>
            </div>

            {/**NOTE - Mobile 용 */}
            <div className="gap-md flex flex-col md:hidden">
              <ProductAmoutInfo
                price={item.price}
                quantity={item.quantity}
                expectedArrivalAt={item.expectedArrivalAt}
                className="justify-center"
              />
              <OrdersActions
                orderId={orderId}
                itemsCount={itemsCount}
                orderNumber={orderNumber}
                isCanceled={orderStatus === 'CANCELED'}
              />
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default OrderHistoryList;
