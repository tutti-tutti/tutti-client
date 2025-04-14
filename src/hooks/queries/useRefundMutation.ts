'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  QUERY_KEYS_ENDPOINT,
  ORDER_CONSTANT,
  ORDER_STATUS_LIST,
} from '@/constants';
import { requestRefundPayment } from '@/services';
import type {
  OrderHistoryItem,
  OrderDetailResponseAPISchema,
  RefundRequestAPISchema,
} from '@/types';

interface MutationContext {
  previousOrders?: OrderHistoryItem[];
  previousOrderDetail?: OrderDetailResponseAPISchema;
  orderId: number;
}

const { MESSAGE } = ORDER_CONSTANT;
const [, , CANCELED] = ORDER_STATUS_LIST;

export const useRefundMutation = (orderId: number) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (payload: RefundRequestAPISchema) =>
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
              if (order.orderSheetNo === variables.orderSheetNo) {
                return { ...order, orderStatus: CANCELED };
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

            return { ...old, orderStatus: CANCELED };
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
    orderSheetNo: string,
    options: {
      cancelReason?: string;
      confirmMessage?: string;
      itemsCount?: number;
    } = {},
  ) => {
    if (isPending) return;

    const {
      cancelReason = '',
      confirmMessage = MESSAGE.CANCEL_ORDER_WARNING,
      itemsCount,
    } = options;

    let finalConfirmMessage = confirmMessage;

    if (itemsCount && itemsCount > 1) {
      finalConfirmMessage = MESSAGE.NOT_PARTIAL_CANCEL_ORDER_WARNING;
    }

    if (confirm(finalConfirmMessage)) {
      mutate({ orderSheetNo, cancelReason });
    }
  };

  return {
    mutate,
    isPending,
    handleCancelOrder,
  };
};
