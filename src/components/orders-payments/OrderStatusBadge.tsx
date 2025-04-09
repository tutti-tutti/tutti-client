import { ORDER_STATUS } from '@/constants';
import type { OrderStatus } from '@/types';
import { Badge } from '@/components';

interface OrderStatusBadgeProps {
  orderStatus: OrderStatus;
}

const OrderStatusBadge = ({ orderStatus }: OrderStatusBadgeProps) => {
  return (
    <Badge orderStatus={orderStatus}>
      {ORDER_STATUS[orderStatus]?.label || orderStatus}
    </Badge>
  );
};

export default OrderStatusBadge;
