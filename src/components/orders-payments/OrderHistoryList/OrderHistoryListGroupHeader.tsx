'use client';

import Link from 'next/link';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { requestRefundPayment } from '@/services';
import { ROUTER_PATH } from '@/constants';
import type { OrderHistoryItem } from '@/types';
import { Icon, ExtraButton } from '@/components';

interface OrderHistoryListGroupHeaderProps {
  orderId: number;
  orderNumber: string;
  isCanceled: boolean;
}

const OrderHistoryListGroupHeader = ({
  orderId,
  orderNumber,
  isCanceled,
}: OrderHistoryListGroupHeaderProps) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: { orderNumber: string; cancelReason: string }) =>
      requestRefundPayment(data),
    onMutate: async variables => {
      // 낙관적 업데이트를 위해 진행 중인 쿼리 취소
      await queryClient.cancelQueries({ queryKey: ['orders'] });

      // 현재 데이터 스냅샷 저장
      const previousOrders = queryClient.getQueryData<OrderHistoryItem[]>([
        'orders',
      ]);

      // 낙관적으로 상태 업데이트
      queryClient.setQueryData<OrderHistoryItem[]>(['orders'], old => {
        if (!old) return old;

        return old.map(order => {
          if (order.orderNumber === variables.orderNumber) {
            // 주문 상태를 'CANCELED'로 변경
            return { ...order, orderStatus: 'CANCELED' };
          }
          return order;
        });
      });

      return { previousOrders };
    },
    onError: (err, variables, context) => {
      // 오류 발생 시 이전 상태로 복구
      if (context?.previousOrders) {
        queryClient.setQueryData(['orders'], context.previousOrders);
      }
    },
    onSettled: () => {
      // 항상 서버와 데이터 재동기화
      queryClient.invalidateQueries({ queryKey: ['orders'] });
    },
  });

  const handleCancelOrder = async () => {
    if (isPending) return; // 중복 클릭 방지

    if (
      confirm('주문 번호의 전체 상품 주문이 취소됩니다. 진행 하시겠습니까?')
    ) {
      mutate({
        orderNumber,
        cancelReason: '',
      });
    }
  };

  return (
    <header className="flex w-full items-center justify-between">
      <div className="gap-xs flex items-center text-xl">
        <strong>주문번호 {orderId}</strong>
        <Link
          href={ROUTER_PATH.ORDERS_DETAIL(orderId)}
          className="text-text-info flex items-center"
        >
          주문 상세 보기 <Icon iconName="right" />
        </Link>
      </div>
      {!isCanceled ? (
        <ExtraButton onClick={handleCancelOrder}>
          {isPending ? '처리 중...' : '전체 주문 취소'}
        </ExtraButton>
      ) : (
        <span className="text-text-disabled inline-flex items-center">
          해당 주문이 전체 취소되었습니다
        </span>
      )}
    </header>
  );
};

export default OrderHistoryListGroupHeader;
