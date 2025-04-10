'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchOrderDetail } from '@/services';
import { cn, formatDateWithSeparator } from '@/utils';
import { ORDER_CONSTANT } from '@/constants';
import type { OrderDetailResponseAPISchema } from '@/types';
import { OrderGroupHeader, OrderHistoryList } from '@/components';

interface OrderDetailClientWrapperProps {
  orderId: number;
  initialOrderDetailInfo: OrderDetailResponseAPISchema;
  className?: string;
}

const { ORDER_DATE, ORDER_SHEET_NO } = ORDER_CONSTANT;

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
      <OrderGroupHeader
        orderId={orderId}
        orderNumber={orderNumber}
        isCanceled={orderStatus === 'CANCELED'}
      >
        <h2 className="gap-sm flex">
          <span>
            {ORDER_DATE} : {formatDateWithSeparator(createdAt, '.')}
          </span>

          <span className="text-text-tertiary">
            {ORDER_SHEET_NO} : {orderNumber}
          </span>
        </h2>
      </OrderGroupHeader>

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
