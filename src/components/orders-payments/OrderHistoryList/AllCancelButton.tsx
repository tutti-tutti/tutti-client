'use client';

import { ORDER_CONSTANT } from '@/constants';
import { useRefundMutation } from '@/hooks';
import { ExtraButton } from '@/components';

interface AllCancelButtonProps {
  orderId: number;
  orderNumber: string;
  isCanceled: boolean;
}

const { MESSAGE, TEXT_BUTTON } = ORDER_CONSTANT;

const AllCancelButton = ({
  orderId,
  orderNumber,
  isCanceled,
}: AllCancelButtonProps) => {
  const { isPending, handleCancelOrder } = useRefundMutation(orderId);

  const onCancelOrder = () => {
    if (isPending) return;

    handleCancelOrder(orderNumber, {
      confirmMessage: MESSAGE.ALL_CANCEL_ORDER_WARNING,
    });
  };

  return (
    <>
      {!isCanceled ? (
        <ExtraButton onClick={onCancelOrder}>
          {isPending ? TEXT_BUTTON.PENDING : TEXT_BUTTON.ALL_CANCEL}
        </ExtraButton>
      ) : (
        <span className="text-text-disabled inline-flex items-center">
          {MESSAGE.ALL_CANCEL_ORDER_SUCCESS}
        </span>
      )}
    </>
  );
};

export default AllCancelButton;
