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
      {groupedOrderItems.map(({ orderId, orderNumber, items, orderStatus }) => (
        <li key={orderId}>
          <article>
            <OrderHistoryListGroupHeader
              orderId={orderId}
              orderNumber={orderNumber}
            />
            <OrderHistoryList
              orderId={orderId}
              orderNumber={orderNumber}
              orderItems={items}
              orderStatus={orderStatus}
            />
          </article>
        </li>
      ))}
    </ul>
  );
};

export default OrderHistoryListGroup;
