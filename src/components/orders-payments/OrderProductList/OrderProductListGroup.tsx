import {
  cn,
  formatDateWithDay,
  getGroupedOrderItemsByExpectedArrivalAt,
} from '@/utils';
import { ORDER_CONSTANT } from '@/constants';
import type { OrderItem } from '@/types';
import { default as OrderProductList } from './OrderProductList';

interface OrderProductListProps {
  orderItems: OrderItem[];
}

const GAP_STYLES = `flex gap-md sm:gap-lg`;

const OrderProductListGroup = ({ orderItems }: OrderProductListProps) => {
  const groupedOrderItems = getGroupedOrderItemsByExpectedArrivalAt(orderItems);

  return (
    <ul className={cn('flex-col', GAP_STYLES)}>
      {groupedOrderItems.map(({ expectedArrivalAt, items }) => (
        <li key={expectedArrivalAt}>
          <article className={cn('flex-col', GAP_STYLES)}>
            <div className="gap-xs flex text-xl">
              <strong className="text-text-info">
                {formatDateWithDay(expectedArrivalAt)}
              </strong>
              <span>{ORDER_CONSTANT.EXPECTED_SHIPPING}</span>
            </div>
            <OrderProductList orderItems={items} gapStyles={GAP_STYLES} />
          </article>
        </li>
      ))}
    </ul>
  );
};

export default OrderProductListGroup;
