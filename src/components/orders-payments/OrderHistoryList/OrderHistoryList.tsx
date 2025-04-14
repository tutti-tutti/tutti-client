'use client';

import Link from 'next/link';

import { cn } from '@/utils';
import { ORDER_STATUS_LIST, ROUTER_PATH } from '@/constants';
import type { OrderItem, OrderStatus } from '@/types';
import {
  ProductThumbnail,
  ProductName,
  ProductAmoutInfo,
  ProductOptionInfo,
  OrdersActions,
  OrderStatusBadge,
  OrdersExtraActions,
} from '@/components';

type OrderProductListProps = {
  orderId: number;
  orderSheetNo: string;
  orderItems: OrderItem[];
  orderStatus: string;
};

const [, , CANCELED] = ORDER_STATUS_LIST;

const PADDING_STYLES = 'px-0 py-md md:py-xl';
const THUMB_COLUMN_STYLES = 'w-[120px] md:w-[288px]';
const INFO_COLUMN_STYLES = 'w-full md:w-full';

const OrderHistoryList = ({
  orderId,
  orderSheetNo,
  orderItems,
  orderStatus,
}: OrderProductListProps) => {
  const itemsCount = orderItems.length;

  return (
    <ul>
      {orderItems.map(item => (
        <li
          key={`${orderId}-${item.productItemId}`}
          className={cn(PADDING_STYLES, 'border-border-secondary border-b')}
        >
          <article className="gap-style-orderList flex-col">
            <div className="gap-4xl flex justify-between">
              <article className="gap-style-orderList flex-1">
                <div className={THUMB_COLUMN_STYLES}>
                  <Link href={ROUTER_PATH.PRODUCT_DETAIL(item.productId)}>
                    <ProductThumbnail
                      width="w-full"
                      className="aspect-200/175"
                      imageUrl={item.productImgUrl}
                      name={item.productName}
                    />
                  </Link>
                </div>

                <div
                  className={cn(
                    INFO_COLUMN_STYLES,
                    'gap-2xs items-between flex flex-col',
                  )}
                >
                  <OrderStatusBadge orderStatus={orderStatus as OrderStatus} />

                  <div className="gap-xs flex flex-1 flex-col">
                    <Link href={ROUTER_PATH.PRODUCT_DETAIL(item.productId)}>
                      <ProductName
                        className="w-full"
                        productName={item.productName}
                      />
                    </Link>

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
                    orderSheetNo={orderSheetNo}
                    productId={item.productId}
                    productItemId={item.productItemId}
                    isCanceled={orderStatus === CANCELED}
                  />
                </div>
              </article>
              <div className="hidden md:flex">
                <OrdersActions
                  orderId={orderId}
                  itemsCount={itemsCount}
                  orderSheetNo={orderSheetNo}
                  isCanceled={orderStatus === CANCELED}
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
                orderSheetNo={orderSheetNo}
                isCanceled={orderStatus === CANCELED}
              />
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default OrderHistoryList;
