import Link from 'next/link';
import { ROUTER_PATH } from '@/constants';
import { Icon } from '@/components';

interface OrderHistoryListGroupProps {
  orderId: number;
  orderNumber: string;
}

const OrderIdHeading = ({
  orderId,
  orderNumber,
}: OrderHistoryListGroupProps) => {
  return (
    <div className="gap-xs flex items-center text-xl">
      <strong>주문번호 {orderNumber}</strong>
      <Link
        href={ROUTER_PATH.ORDERS_DETAIL(orderId)}
        className="text-text-info flex items-center"
      >
        주문 상세 보기 <Icon iconName="right" />
      </Link>
    </div>
  );
};

export default OrderIdHeading;
