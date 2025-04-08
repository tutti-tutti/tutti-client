import type { BadgeVariant, OrderStatus } from '@/types';
import { Badge } from '@/components';

interface OrderStatusBadgeProps {
  orderStatus: OrderStatus;
}

interface StatusInfo {
  label: string;
  variant: BadgeVariant;
}

const OrderStatusBadge = ({ orderStatus }: OrderStatusBadgeProps) => {
  const status: Record<OrderStatus, StatusInfo> = {
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

  return (
    <Badge orderStatus={orderStatus}>
      {status[orderStatus]?.label || orderStatus}
    </Badge>
  );
};

export default OrderStatusBadge;
