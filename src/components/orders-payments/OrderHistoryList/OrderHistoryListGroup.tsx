import Link from 'next/link';

import { cn, getGroupOrderItemsByOrderId } from '@/utils';
import type { OrderHistoryItem, GroupedOrderItemByOrderId } from '@/types';
import { Icon } from '@/components';
import { default as OrderHistoryList } from './OrderHistoryList';

interface OrderHistoryListGroupProps {
  orderHistoryList: OrderHistoryItem[];
}

const OrderHistoryListGroup = ({
  orderHistoryList,
}: OrderHistoryListGroupProps) => {
  const groupedOrderItems: GroupedOrderItemByOrderId[] =
    getGroupOrderItemsByOrderId(orderHistoryList);
  const gapStyles = `flex gap-md md:gap-lg`;

  return (
    <ul className={cn('flex-col', gapStyles)}>
      {groupedOrderItems.map(({ orderId, items }) => (
        <li key={orderId}>
          <article className={cn('flex-col', gapStyles)}>
            <div className="gap-xs flex text-xl">
              <strong>주문번호 {orderId}</strong>
              <Link
                href={`my/orders/${orderId}`}
                className="text-text-info flex items-center"
              >
                주문 상세 보기 <Icon iconName="right" />
              </Link>
            </div>
            <OrderHistoryList
              orderId={orderId}
              orderItems={items}
              gapStyles={gapStyles}
            />
          </article>
        </li>
      ))}
    </ul>
  );
};

export default OrderHistoryListGroup;
