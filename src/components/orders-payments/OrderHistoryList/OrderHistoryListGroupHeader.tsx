'use client';

import Link from 'next/link';

import { requestRefundPayment } from '@/services';
import { ROUTER_PATH } from '@/constants';
import { Icon, ExtraButton } from '@/components';

interface OrderHistoryListGroupHeaderProps {
  orderId: number;
  orderNumber: string;
  isCanceled: boolean;
}

const OrderHistoryListGroupHeader = ({
  orderId,
  orderNumber,
  isCanceled,
}: OrderHistoryListGroupHeaderProps) => {
  const handleCancelOrder = async () => {
    confirm('주문 번호의 전체 상품 주문이 취소됩니다. 진행 하시겠습니까?');

    await requestRefundPayment({
      orderNumber,
      cancelReason: '',
    });
  };

  return (
    <header className="flex w-full items-center justify-between">
      <div className="gap-xs flex items-center text-xl">
        <strong>주문번호 {orderId}</strong>
        <Link
          href={ROUTER_PATH.ORDERS_DETAIL(orderId)}
          className="text-text-info flex items-center"
        >
          주문 상세 보기 <Icon iconName="right" />
        </Link>
      </div>

      {!isCanceled ? (
        <ExtraButton onClick={handleCancelOrder}>전체 주문 취소</ExtraButton>
      ) : (
        <span className="text-text-disabled inline-flex items-center">
          해당 주문이 전체 취소되었습니다
        </span>
      )}
    </header>
  );
};

export default OrderHistoryListGroupHeader;
