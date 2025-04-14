'use client';

import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS_ENDPOINT } from '@/constants';
import { fetchOrderHistory } from '@/services';
import type { OrderHistoryListResponseAPISchema } from '@/types';
import { OrderHistoryListGroup } from '@/components';

interface OrderHistoryClientWrapperProps {
  initialOrderHistory: OrderHistoryListResponseAPISchema;
}

const OrderHistoryClientWrapper = ({
  initialOrderHistory,
}: OrderHistoryClientWrapperProps) => {
  const { data: orderHistory } = useQuery({
    queryKey: [QUERY_KEYS_ENDPOINT.ORDERS],
    queryFn: fetchOrderHistory,
    initialData: initialOrderHistory,
  });

  return <OrderHistoryListGroup orderHistoryList={orderHistory.content} />;
};

export default OrderHistoryClientWrapper;
