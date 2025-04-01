'use client';

import { cn } from '@/utils';
import { requestRefundPayment } from '@/services';
import { Button } from '@/components';

interface OrdersActionsProps {
  orderNumber: string;
  itemsCount: number;
  isCanceled?: boolean;
  className?: string;
}

const OrdersActions = ({
  orderNumber,
  itemsCount,
  isCanceled = false,
  className,
}: OrdersActionsProps) => {
  const buttonStyles = 'h-[40px] md:h-[60px] w-full md:w-[147px]';

  const handleCancelOrder = async () => {
    if (itemsCount > 0) {
      confirm('현재는 전체 주문 취소만 가능합니다. 진행하시겠습니까?');

      return;
    }

    await requestRefundPayment({ orderNumber, cancelReason: '' });
  };

  const handleConfirmShipping = async () =>
    alert('지금은 배송 현황을 확인할 수 없습니다.');

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
