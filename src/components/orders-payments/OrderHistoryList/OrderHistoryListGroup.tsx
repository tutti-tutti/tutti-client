import { getGroupOrderItemsByOrderId } from '@/utils';
import type { OrderHistoryItem, GroupedOrderItemByOrderId } from '@/types';
import { OrderHistoryListGroupHeader } from '@/components';
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
      {groupedOrderItems.map(({ orderId, orderNumber, items }) => (
        <li key={orderId} className="md:-pl-xl">
          <article>
            <OrderHistoryListGroupHeader
              orderId={orderId}
              orderNumber={orderNumber}
            />
            <OrderHistoryList
              orderId={orderId}
              orderNumber={orderNumber}
              orderItems={items}
            />
          </article>
        </li>
      ))}
    </ul>
  );
};

export default OrderHistoryListGroup;
