import { getGroupOrderItemsByOrderId, cn } from '@/utils';
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

  const cancelStyles = 'rounded-md opacity-75 bg-bg-tertiary';

  return (
    <ul className="gap-2xl flex flex-col">
      {groupedOrderItems.map(({ orderId, orderNumber, items, orderStatus }) => (
        <li
          key={orderId}
          className={cn(orderStatus === 'CANCELED' ? cancelStyles : '')}
        >
          <article>
            <OrderHistoryListGroupHeader
              orderId={orderId}
              orderNumber={orderNumber}
              isCanceled={orderStatus === 'CANCELED'}
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
