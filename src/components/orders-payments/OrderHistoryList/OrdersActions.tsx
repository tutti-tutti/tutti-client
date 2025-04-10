'use client';

import { cn } from '@/utils';
import { ORDER_CONSTANT } from '@/constants';
import { useRefundMutation } from '@/hooks';
import { Button } from '@/components';

interface OrdersActionsProps {
  orderId: number;
  orderNumber: string;
  itemsCount: number;
  isCanceled?: boolean;
  className?: string;
}

const { TEXT_BUTTON, MESSAGE } = ORDER_CONSTANT;

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
          ? MESSAGE.NOT_PARTIAL_CANCEL_ORDER_WARNING
          : MESSAGE.CANCEL_ORDER_WARNING,
    });
  };

  const handleConfirmShipping = () =>
    alert(MESSAGE.NOT_FOUND_DELIVERY_TRACKING);

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
        {TEXT_BUTTON.DELIVERY_TRACKING}
      </Button>

      {!isCanceled && (
        <Button
          type="button"
          variant="tertiaryOutline"
          className={buttonStyles}
          onClick={onCancelOrder}
        >
          {isPending ? TEXT_BUTTON.PENDING : TEXT_BUTTON.CANCEL}
        </Button>
      )}
    </article>
  );
};

export default OrdersActions;
