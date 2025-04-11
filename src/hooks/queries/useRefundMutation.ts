'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEYS_ENDPOINT } from '@/constants';
import { requestRefundPayment } from '@/services';
import type {
  OrderHistoryItem,
  OrderDetailResponseAPISchema,
  RefundRequestAPISSchema,
} from '@/types';

interface MutationContext {
  previousOrders?: OrderHistoryItem[];
  previousOrderDetail?: OrderDetailResponseAPISchema;
  orderId: number;
}

export const useRefundMutation = (orderId: number) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (payload: RefundRequestAPISSchema) =>
      requestRefundPayment(payload),

    onMutate: async (variables): Promise<MutationContext> => {
      // 진행 중인 쿼리 취소
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEYS_ENDPOINT.ORDERS],
      });
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEYS_ENDPOINT.ORDERS, orderId],
      });

      // 주문 목록 스냅샷 저장
      const previousOrders = queryClient.getQueryData<OrderHistoryItem[]>([
        QUERY_KEYS_ENDPOINT.ORDERS,
      ]);

      // 주문 상세 스냅샷 저장
      const previousOrderDetail = orderId
        ? queryClient.getQueryData<OrderDetailResponseAPISchema>([
            QUERY_KEYS_ENDPOINT.ORDERS,
            orderId,
          ])
        : undefined;

      // 낙관적으로 주문 목록 업데이트
      if (previousOrders) {
        queryClient.setQueryData<OrderHistoryItem[]>(
          [QUERY_KEYS_ENDPOINT.ORDERS],
          old => {
            if (!old) return old;

            return old.map(order => {
              if (order.orderNumber === variables.orderNumber) {
                return { ...order, orderStatus: 'CANCELED' };
              }
              return order;
            });
          },
        );
      }

      // 낙관적으로 주문 상세 업데이트
      if (previousOrderDetail && orderId) {
        queryClient.setQueryData<OrderDetailResponseAPISchema>(
          [QUERY_KEYS_ENDPOINT.ORDERS, orderId],
          old => {
            if (!old) return old;

            return { ...old, orderStatus: 'CANCELED' };
          },
        );
      }

      return { previousOrders, previousOrderDetail, orderId };
    },

    onError: (err, variables, context) => {
      // 오류 발생 시 이전 상태로 복구
      if (context?.previousOrders) {
        queryClient.setQueryData(
          [QUERY_KEYS_ENDPOINT.ORDERS],
          context.previousOrders,
        );
      }

      if (context?.previousOrderDetail && context.orderId) {
        queryClient.setQueryData(
          [QUERY_KEYS_ENDPOINT.ORDERS, context.orderId],
          context.previousOrderDetail,
        );
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS_ENDPOINT.ORDERS] });
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS_ENDPOINT.ORDERS, orderId],
      });
    },
  });

  const handleCancelOrder = (
    orderNumber: string,
    options: {
      cancelReason?: string;
      confirmMessage?: string;
      itemsCount?: number;
    } = {},
  ) => {
    if (isPending) return;

    const {
      cancelReason = '',
      confirmMessage = '주문을 취소하시겠습니까?',
      itemsCount,
    } = options;

    let finalConfirmMessage = confirmMessage;

    if (itemsCount && itemsCount > 1) {
      finalConfirmMessage =
        '현재는 전체 주문 취소만 가능합니다. 진행하시겠습니까?';
    }

    if (confirm(finalConfirmMessage)) {
      mutate({ orderNumber, cancelReason });
    }
  };

  return {
    mutate,
    isPending,
    handleCancelOrder,
  };
};
