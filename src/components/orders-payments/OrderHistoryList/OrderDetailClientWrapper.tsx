'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchOrderDetail } from '@/services';
import type { OrderDetailResponseAPISchema } from '@/types';
import { OrderHistoryList } from '@/components';

interface OrderDetailClientWrapperProps {
  orderId: number;
  initialOrderDetailInfo: OrderDetailResponseAPISchema;
}

const OrderDetailClientWrapper = ({
  orderId,
  initialOrderDetailInfo,
}: OrderDetailClientWrapperProps) => {
  const { data: orderDetailInfo } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => fetchOrderDetail(orderId.toString()),
    initialData: initialOrderDetailInfo,
  });

  return (
    <OrderHistoryList
      orderId={orderId}
      orderNumber={orderDetailInfo.orderNumber}
      orderItems={orderDetailInfo.orderItems}
      orderStatus={orderDetailInfo.orderStatus}
    />
  );
};

export default OrderDetailClientWrapper;
