import type { BadgeVariant, OrderStatus } from '@/types';
import { Badge } from '@/components';

interface OrderStatusBadgeProps {
  orderStatus: OrderStatus;
}

interface StatusInfo {
  label: string;
  variant: BadgeVariant;
}

const ORDER_STATUS: Record<OrderStatus, StatusInfo> = {
  READY: {
    label: '결제 대기',
    variant: {
      color: 'warning',
      style: 'outlineSquare',
    },
  },
  DONE: {
    label: '결제 완료',
    variant: {
      color: 'success',
      style: 'outlineSquare',
    },
  },
  CANCELED: {
    label: '주문 취소',
    variant: {
      color: 'secondary',
      style: 'outlineSquare',
    },
  },
};

const OrderStatusBadge = ({ orderStatus }: OrderStatusBadgeProps) => {
  return (
    <Badge orderStatus={orderStatus}>
      {ORDER_STATUS[orderStatus]?.label || orderStatus}
    </Badge>
  );
};

export default OrderStatusBadge;
