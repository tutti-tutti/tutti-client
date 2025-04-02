'use client';

import { formatDateWithKorean } from '@/utils';
import { useRefundMutation } from '@/hooks';
import { ExtraButton } from '@/components';

interface OrderDetailListGroupHeaderProps {
  orderId: number;
  orderNumber: string;
  orderedAt: string;
  isCanceled: boolean;
}

const OrderDetailListGroupHeader = ({
  orderNumber,
  orderedAt,
  isCanceled,
}: OrderDetailListGroupHeaderProps) => {
  const { isPending, handleCancelOrder } = useRefundMutation();

  const onCancelOrder = () => {
    if (isPending) return;

    handleCancelOrder(orderNumber, {
      confirmMessage:
        '주문 번호의 전체 상품 주문이 취소됩니다. 진행 하시겠습니까?',
    });
  };

  return (
    <header className="flex w-full items-center justify-between">
      <h2 className="gap-sm flex">
        <span>{formatDateWithKorean(orderedAt)} 주문</span>
        <span className="text-text-tertiary">주문번호 : {orderNumber}</span>
      </h2>

      {!isCanceled ? (
        <ExtraButton onClick={onCancelOrder}>
          {isPending ? '처리 중...' : '전체 주문 취소'}
        </ExtraButton>
      ) : (
        <span className="text-text-disabled inline-flex items-center">
          해당 주문이 전체 취소되었습니다
        </span>
      )}
    </header>
  );
};

export default OrderDetailListGroupHeader;
