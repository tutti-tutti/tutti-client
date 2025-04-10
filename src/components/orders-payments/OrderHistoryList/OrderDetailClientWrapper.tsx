'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchOrderDetail } from '@/services';
import { cn } from '@/utils';
import type { OrderDetailResponseAPISchema } from '@/types';
import { OrderDetailListGroupHeader, OrderHistoryList } from '@/components';

interface OrderDetailClientWrapperProps {
  orderId: number;
  initialOrderDetailInfo: OrderDetailResponseAPISchema;
  className?: string;
}

const OrderDetailClientWrapper = ({
  orderId,
  initialOrderDetailInfo,
  className,
}: OrderDetailClientWrapperProps) => {
  const { data: orderDetailInfo } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => fetchOrderDetail(orderId.toString()),
    initialData: initialOrderDetailInfo,
  });

  const { orderNumber, orderItems, orderStatus, createdAt } = orderDetailInfo;

  return (
    <section className={cn('bg-bg-tertiary px-5xl rounded-md', className)}>
      <OrderDetailListGroupHeader
        orderId={orderId}
        orderNumber={orderNumber}
        createdAt={createdAt}
        isCanceled={orderStatus === 'CANCELED'}
      />
      <OrderHistoryList
        orderId={orderId}
        orderNumber={orderNumber}
        orderItems={orderItems}
        orderStatus={orderStatus}
      />
    </section>
  );
};

export default OrderDetailClientWrapper;
