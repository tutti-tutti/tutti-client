import Link from 'next/link';

import {
  getGroupOrderItemsByOrderId,
  cn,
  formatDateWithSeparator,
} from '@/utils';
import { ROUTER_PATH, ORDER_CONSTANT, ORDER_STATUS_LIST } from '@/constants';
import type { OrderHistoryItem, GroupedOrderItemByOrderId } from '@/types';
import { OrderGroupHeader, OrderHistoryList, Icon } from '@/components';

interface OrderHistoryListGroupProps {
  orderHistoryList: OrderHistoryItem[];
}

const { TEXT_LINK } = ORDER_CONSTANT;
const [, , CANCELED] = ORDER_STATUS_LIST;

const OrderHistoryListGroup = ({
  orderHistoryList,
}: OrderHistoryListGroupProps) => {
  const groupedOrderItems: GroupedOrderItemByOrderId[] =
    getGroupOrderItemsByOrderId(orderHistoryList);

  return (
    <ul className="gap-2xl flex flex-col">
      {groupedOrderItems.map(
        ({ orderId, orderSheetNo, items, orderStatus, createdAt }) => (
          <li
            key={orderId}
            className={cn(
              orderStatus === CANCELED
                ? 'bg-bg-tertiary rounded-md opacity-75'
                : '',
            )}
          >
            <article>
              <OrderGroupHeader
                orderId={orderId}
                orderSheetNo={orderSheetNo}
                isCanceled={orderStatus === CANCELED}
              >
                <div className="gap-xs flex items-center text-xl">
                  <strong>{formatDateWithSeparator(createdAt, '.')}</strong>

                  <Link
                    href={ROUTER_PATH.ORDERS_DETAIL(orderId)}
                    className="text-text-info flex items-center"
                  >
                    {TEXT_LINK.DETAIL} <Icon iconName="right" />
                  </Link>
                </div>
              </OrderGroupHeader>
              <OrderHistoryList
                orderId={orderId}
                orderSheetNo={orderSheetNo}
                orderItems={items}
                orderStatus={orderStatus}
              />
            </article>
          </li>
        ),
      )}
    </ul>
  );
};

export default OrderHistoryListGroup;
