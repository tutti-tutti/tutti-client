import type { BadgeVariant } from '@/types';
import { Badge } from '@/components';

type OrderStatus = 'CANCELED' | 'DONE' | string;

interface OrderStatusBadgeProps {
  orderStatus: OrderStatus;
}

interface StatusInfo {
  label: string;
  variant: BadgeVariant;
}

const OrderStatusBadge = ({ orderStatus }: OrderStatusBadgeProps) => {
  const status: Record<OrderStatus, StatusInfo> = {
    CANCELED: {
      label: '주문 취소',
      variant: 'secondaryOutlineSquare',
    },
    DONE: {
      label: '결제 완료',
      variant: 'successOutlineSquare',
    },
  };

  return (
    <Badge variant={status[orderStatus]?.variant || 'primaryOutlineSquare'}>
      {status[orderStatus]?.label || '확인 중'}
    </Badge>
  );
};

export default OrderStatusBadge;
