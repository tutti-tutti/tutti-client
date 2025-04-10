'use client';

import { formatDateWithKorean } from '@/utils';
import { ORDER_CONSTANT } from '@/constants';
import { useRefundMutation } from '@/hooks';
import { ExtraButton } from '@/components';

interface OrderDetailListGroupHeaderProps {
  orderId: number;
  orderNumber: string;
  createdAt: string;
  isCanceled: boolean;
}

const { MESSAGE, ORDER, TEXT_BUTTON, ORDER_SHEET_NO } = ORDER_CONSTANT;

const OrderDetailListGroupHeader = ({
  orderId,
  orderNumber,
  createdAt,
  isCanceled,
}: OrderDetailListGroupHeaderProps) => {
  const { isPending, handleCancelOrder } = useRefundMutation(orderId);

  const onCancelOrder = () => {
    if (isPending) return;

    handleCancelOrder(orderNumber, {
      confirmMessage: MESSAGE.ALL_CANCEL_ORDER_WARNING,
    });
  };

  return (
    <header className="flex w-full items-center justify-between">
      <h2 className="gap-sm flex">
        <span>
          {formatDateWithKorean(createdAt)} {ORDER}
        </span>
        <span className="text-text-tertiary">
          {ORDER_SHEET_NO} : {orderNumber}
        </span>
      </h2>

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

export default OrderDetailListGroupHeader;
