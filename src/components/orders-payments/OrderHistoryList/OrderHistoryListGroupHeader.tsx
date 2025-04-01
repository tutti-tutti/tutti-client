'use client';

import Link from 'next/link';

import { requestRefundPayment } from '@/services';
import { ROUTER_PATH } from '@/constants';
import { Icon, ExtraButton } from '@/components';

interface OrderHistoryListGroupProps {
  orderId: number;
  orderNumber: string;
}

const OrderHistoryListGroup = ({
  orderId,
  orderNumber,
}: OrderHistoryListGroupProps) => {
  const handleCancelOrder = async () => {
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

      <ExtraButton onClick={handleCancelOrder}>전체 주문 취소</ExtraButton>
    </header>
  );
};

export default OrderHistoryListGroup;
