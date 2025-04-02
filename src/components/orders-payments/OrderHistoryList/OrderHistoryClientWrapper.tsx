'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchOrderHistoryList } from '@/services';
import type { OrderHistoryItem } from '@/types';
import { OrderHistoryListGroup } from '@/components';

interface OrderHistoryClientWrapperProps {
  initialOrderHistoryList: OrderHistoryItem[];
}

const OrderHistoryClientWrapper = ({
  initialOrderHistoryList,
}: OrderHistoryClientWrapperProps) => {
  // 초기 데이터를 사용하면서 백그라운드에서 새로운 데이터 가져오기

  const { data: orderHistoryList } = useQuery({
    queryKey: ['orders'],
    queryFn: fetchOrderHistoryList,
    initialData: initialOrderHistoryList,
  });

  return <OrderHistoryListGroup orderHistoryList={orderHistoryList} />;
};

export default OrderHistoryClientWrapper;
