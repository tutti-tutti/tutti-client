import {
  cn,
  formatDateWithDay,
  getGroupedOrderItemsByExpectedArrivalAt,
} from '@/utils';
import type { OrderItem } from '@/types';
import { default as OrderProductList } from './OrderProductList';

interface OrderProductListProps {
  orderItems: OrderItem[];
}

const OrderProductListGroup = ({ orderItems }: OrderProductListProps) => {
  const groupedOrderItems = getGroupedOrderItemsByExpectedArrivalAt(orderItems);
  const gapStyles = `flex gap-md sm:gap-lg`;

  return (
    <ul className={cn('flex-col', gapStyles)}>
      {groupedOrderItems.map(({ expectedArrivalAt, items }) => (
        <li key={expectedArrivalAt}>
          <article className={cn('flex-col', gapStyles)}>
            <div className="gap-xs flex text-xl">
              <strong className="text-text-info">
                {formatDateWithDay(expectedArrivalAt)}
              </strong>
              <span>도착 예정</span>
            </div>
            <OrderProductList orderItems={items} gapStyles={gapStyles} />
          </article>
        </li>
      ))}
    </ul>
  );
};

export default OrderProductListGroup;
