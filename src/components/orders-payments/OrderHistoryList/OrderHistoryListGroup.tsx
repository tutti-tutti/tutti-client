import Link from 'next/link';

import { getGroupOrderItemsByOrderId } from '@/utils';
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

  return (
    <ul className="gap-2xl flex flex-col">
      {groupedOrderItems.map(({ orderId, items }) => (
        <li key={orderId} className="md:-pl-xl">
          <article>
            <div className="gap-xs flex text-xl">
              <strong>주문번호 {orderId}</strong>
              <Link
                href={`/my/orders/${orderId}`}
                className="text-text-info flex items-center"
              >
                주문 상세 보기 <Icon iconName="right" />
              </Link>
            </div>
            <OrderHistoryList orderId={orderId} orderItems={items} />
          </article>
        </li>
      ))}
    </ul>
  );
};

export default OrderHistoryListGroup;
