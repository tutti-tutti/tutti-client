'use client';

import { ORDER_CONSTANT } from '@/constants';
import { useRefundMutation } from '@/hooks';
import { ExtraButton } from '@/components';

interface OrderGroupHeaderProps {
  orderId: number;
  orderNumber: string;
  isCanceled: boolean;
  children: React.ReactNode;
}

const { MESSAGE, TEXT_BUTTON } = ORDER_CONSTANT;

const OrderGroupHeader = ({
  orderId,
  orderNumber,
  isCanceled,
  children,
}: OrderGroupHeaderProps) => {
  const { isPending, handleCancelOrder } = useRefundMutation(orderId);

  const onCancelOrder = () => {
    if (isPending) return;

    handleCancelOrder(orderNumber, {
      confirmMessage: MESSAGE.ALL_CANCEL_ORDER_WARNING,
    });
  };

  return (
    <header className="flex w-full items-center justify-between">
      {children}

      {!isCanceled ? (
        <ExtraButton onClick={onCancelOrder}>
          {isPending ? TEXT_BUTTON.PENDING : TEXT_BUTTON.ALL_CANCEL}
        </ExtraButton>
      ) : (
        <span className="text-text-disabled inline-flex items-center">
          {MESSAGE.ALL_CANCEL_ORDER_SUCCESS}
        </span>
      )}
    </header>
  );
};

export default OrderGroupHeader;
