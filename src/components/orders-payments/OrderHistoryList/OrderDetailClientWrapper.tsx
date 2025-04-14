'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchOrderDetail } from '@/services';
import { cn, formatDateWithSeparator } from '@/utils';
import {
  ORDER_CONSTANT,
  ORDER_STATUS_LIST,
  QUERY_KEYS_ENDPOINT,
} from '@/constants';
import type { OrderDetailResponseAPISchema } from '@/types';
import { OrderGroupHeader, OrderHistoryList } from '@/components';

interface OrderDetailClientWrapperProps {
  orderId: number;
  initialOrderDetailInfo: OrderDetailResponseAPISchema;
  className?: string;
}

const { ORDER_DATE, ORDER_SHEET_NO } = ORDER_CONSTANT;
const [, , CANCELED] = ORDER_STATUS_LIST;

const OrderDetailClientWrapper = ({
  orderId,
  initialOrderDetailInfo,
  className,
}: OrderDetailClientWrapperProps) => {
  const { data: orderDetailInfo } = useQuery({
    queryKey: [QUERY_KEYS_ENDPOINT.ORDERS, orderId],
    queryFn: () => fetchOrderDetail(orderId.toString()),
    initialData: initialOrderDetailInfo,
  });

  const { orderSheetNo, orderItems, orderStatus, createdAt } = orderDetailInfo;

  return (
    <section className={cn('bg-bg-tertiary px-5xl rounded-md', className)}>
      <OrderGroupHeader
        orderId={orderId}
        orderSheetNo={orderSheetNo}
        isCanceled={orderStatus === CANCELED}
      >
        <h2 className="gap-sm flex">
          <span>
            {ORDER_DATE} : {formatDateWithSeparator(createdAt, '.')}
          </span>

          <span className="text-text-tertiary">
            {ORDER_SHEET_NO} : {orderSheetNo}
          </span>
        </h2>
      </OrderGroupHeader>

      <OrderHistoryList
        orderId={orderId}
        orderSheetNo={orderSheetNo}
        orderItems={orderItems}
        orderStatus={orderStatus}
      />
    </section>
  );
};

export default OrderDetailClientWrapper;
