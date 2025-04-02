'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { requestRefundPayment } from '@/services';
import type { OrderHistoryItem, OrderDetailResponseAPISchema } from '@/types';

interface CancelPaymentParams {
  orderNumber: string;
  cancelReason: string;
}

interface MutationContext {
  previousOrders?: OrderHistoryItem[];
  previousOrderDetail?: OrderDetailResponseAPISchema;
  orderId?: number;
}

/**
 * 결제 취소/환불 처리를 위한 커스텀 훅
 * @param orderId 주문 ID (주문 상세 페이지에서 사용 시 필요)
 * @returns mutation 객체 및 취소 처리 핸들러
 */
export const useRefundMutation = (orderId?: number) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: CancelPaymentParams) => requestRefundPayment(data),

    onMutate: async (variables): Promise<MutationContext> => {
      // 진행 중인 쿼리 취소
      await queryClient.cancelQueries({ queryKey: ['orders'] });
      if (orderId) {
        await queryClient.cancelQueries({ queryKey: ['order', orderId] });
      }

      // 주문 목록 스냅샷 저장
      const previousOrders = queryClient.getQueryData<OrderHistoryItem[]>([
        'orders',
      ]);

      // 주문 상세 스냅샷 저장
      const previousOrderDetail = orderId
        ? queryClient.getQueryData<OrderDetailResponseAPISchema>([
            'order',
            orderId,
          ])
        : undefined;

      // 낙관적으로 주문 목록 업데이트
      if (previousOrders) {
        queryClient.setQueryData<OrderHistoryItem[]>(['orders'], old => {
          if (!old) return old;

          return old.map(order => {
            if (order.orderNumber === variables.orderNumber) {
              return { ...order, orderStatus: 'CANCELED' };
            }
            return order;
          });
        });
      }

      // 낙관적으로 주문 상세 업데이트
      if (previousOrderDetail && orderId) {
        queryClient.setQueryData<OrderDetailResponseAPISchema>(
          ['order', orderId],
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
        queryClient.setQueryData(['orders'], context.previousOrders);
      }

      if (context?.previousOrderDetail && context.orderId) {
        queryClient.setQueryData(
          ['order', context.orderId],
          context.previousOrderDetail,
        );
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      if (orderId) {
        queryClient.invalidateQueries({ queryKey: ['order', orderId] });
      }
    },
  });

  /**
   * 주문 취소 처리 핸들러
   * @param orderNumber 주문 번호
   * @param options 추가 옵션 (취소 사유)
   */
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
