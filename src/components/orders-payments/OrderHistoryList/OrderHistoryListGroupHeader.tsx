'use client';

import Link from 'next/link';

import { ROUTER_PATH, ORDER_CONSTANT } from '@/constants';
import { useRefundMutation } from '@/hooks';
import { Icon, ExtraButton } from '@/components';

interface OrderHistoryListGroupHeaderProps {
  orderId: number;
  orderNumber: string;
  isCanceled: boolean;
}

const { MESSAGE, TEXT_LINK, TEXT_BUTTON } = ORDER_CONSTANT;

const OrderHistoryListGroupHeader = ({
  orderId,
  orderNumber,
  isCanceled,
}: OrderHistoryListGroupHeaderProps) => {
  const { isPending, handleCancelOrder } = useRefundMutation(orderId);

  const onCancelOrder = () => {
    if (isPending) return;

    handleCancelOrder(orderNumber, {
      confirmMessage: MESSAGE.ALL_CANCEL_ORDER_WARNING,
    });
  };

  return (
    <header className="flex w-full items-center justify-between">
      <div className="gap-xs flex items-center text-xl">
        {/**TODO - 주문내역 API 응답 값에 주문일자가 포함될 경우 적용 */}
        {/* <strong>{ORDER_DATE} {}</strong> */}

        <Link
          href={ROUTER_PATH.ORDERS_DETAIL(orderId)}
          className="text-text-info flex items-center"
        >
          {TEXT_LINK.DETAIL} <Icon iconName="right" />
        </Link>
      </div>

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

export default OrderHistoryListGroupHeader;
