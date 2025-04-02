'use client';

import { cn } from '@/utils';
import { useRefundMutation } from '@/hooks';
import { Button } from '@/components';

interface OrdersActionsProps {
  orderId: number;
  orderNumber: string;
  itemsCount: number;
  isCanceled?: boolean;
  className?: string;
}

const OrdersActions = ({
  orderId,
  orderNumber,
  itemsCount,
  isCanceled = false,
  className,
}: OrdersActionsProps) => {
  const { isPending, handleCancelOrder } = useRefundMutation(orderId);

  const onCancelOrder = () => {
    if (isPending) return;

    handleCancelOrder(orderNumber, {
      itemsCount,
      confirmMessage:
        itemsCount > 1
          ? '현재는 전체 주문 취소만 가능합니다. 진행하시겠습니까?'
          : '해당 상품의 주문을 취소합니다. 진행하시겠습니까?',
    });
  };

  const handleConfirmShipping = () =>
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
          onClick={onCancelOrder}
        >
          {isPending ? '처리 중...' : '주문 취소'}
        </Button>
      )}
    </article>
  );
};

export default OrdersActions;
