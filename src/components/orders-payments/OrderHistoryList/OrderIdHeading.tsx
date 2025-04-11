import Link from 'next/link';

import { ROUTER_PATH, ORDER_CONSTANT } from '@/constants';
import { Icon } from '@/components';

interface OrderHistoryListGroupProps {
  orderId: number;
  orderNumber: string;
}

const { ORDER_SHEET_NO, TEXT_LINK } = ORDER_CONSTANT;

const OrderIdHeading = ({
  orderId,
  orderNumber,
}: OrderHistoryListGroupProps) => {
  return (
    <div className="gap-xs flex items-center text-xl">
      <strong>
        {ORDER_SHEET_NO} {orderNumber}
      </strong>
      <Link
        href={ROUTER_PATH.ORDERS_DETAIL(orderId)}
        className="text-text-info flex items-center"
      >
        {TEXT_LINK.DETAIL} <Icon iconName="right" />
      </Link>
    </div>
  );
};

export default OrderIdHeading;
