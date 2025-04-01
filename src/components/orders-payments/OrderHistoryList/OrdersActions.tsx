'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { cn } from '@/utils';
import { requestRefundPayment } from '@/services';
import type { OrderHistoryItem, OrderDetailResponseAPISchema } from '@/types';
import { Button } from '@/components';

interface OrdersActionsProps {
  orderId: number;
  orderNumber: string;
  itemsCount: number;
  isCanceled?: boolean;
  className?: string;
}

interface MutationContext {
  previousOrders?: OrderHistoryItem[];
  previousOrderDetail?: OrderDetailResponseAPISchema;
}

const OrdersActions = ({
  orderId,
  orderNumber,
  itemsCount,
  isCanceled = false,
  className,
}: OrdersActionsProps) => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (data: { orderNumber: string; cancelReason: string }) =>
      requestRefundPayment(data),
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

      // 주문 상세 스냅샷 저장 - undefined로 변경
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

      return { previousOrders, previousOrderDetail };
    },
    onError: (err, variables, context) => {
      // 오류 발생 시 이전 상태로 복구
      if (context?.previousOrders) {
        queryClient.setQueryData(['orders'], context.previousOrders);
      }

      if (context?.previousOrderDetail && orderId) {
        queryClient.setQueryData(
          ['order', orderId],
          context.previousOrderDetail,
        );
      }
    },
    onSettled: () => {
      // 작업 완료 후 데이터 재검증
      queryClient.invalidateQueries({ queryKey: ['orders'] });
      if (orderId) {
        queryClient.invalidateQueries({ queryKey: ['order', orderId] });
      }
    },
  });

  const handleCancelOrder = async () => {
    if (isPending) return;

    if (itemsCount > 1) {
      if (confirm('현재는 전체 주문 취소만 가능합니다. 진행하시겠습니까?')) {
        mutate({ orderNumber, cancelReason: '' });
      }
    } else {
      if (confirm('해당 상품의 주문을 취소합니다. 진행하시겠습니까?')) {
        mutate({ orderNumber, cancelReason: '' });
      }
    }
  };

  const handleConfirmShipping = async () =>
    alert('지금은 배송 현황을 확인할 수 없습니다.');

  const buttonStyles = 'h-[40px] md:h-[60px] w-full md:w-[147px]';

  return (
    <article
      className={cn(
        'gap-xs md:gap-md md:py-xl flex md:basis-[147px] md:flex-col',
        className,
      )}
    >
      <Button
        type="button"
        variant="primaryOutline"
        className={buttonStyles}
        onClick={handleConfirmShipping}
      >
        배송 조회
      </Button>
      {!isCanceled && (
        <Button
          type="button"
          variant="tertiaryOutline"
          className={buttonStyles}
          onClick={handleCancelOrder}
        >
          주문 취소
        </Button>
      )}
    </article>
  );
};

export default OrdersActions;
