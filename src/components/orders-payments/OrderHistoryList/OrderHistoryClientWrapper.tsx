'use client';

import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS_ENDPOINT } from '@/constants';
import { fetchOrderHistoryList } from '@/services';
import type { OrderHistoryItem } from '@/types';
import { OrderHistoryListGroup } from '@/components';

interface OrderHistoryClientWrapperProps {
  initialOrderHistoryList: OrderHistoryItem[];
}

const OrderHistoryClientWrapper = ({
  initialOrderHistoryList,
}: OrderHistoryClientWrapperProps) => {
  const { data: orderHistoryList } = useQuery({
    queryKey: [QUERY_KEYS_ENDPOINT.ORDERS],
    queryFn: fetchOrderHistoryList,
    initialData: initialOrderHistoryList,
  });

  return <OrderHistoryListGroup orderHistoryList={orderHistoryList} />;
};

export default OrderHistoryClientWrapper;
