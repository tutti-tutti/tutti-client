'use client';

import { redirect } from 'next/navigation';
import { ROUTER_PATH } from '@/constants';
import { ExtraButton } from '@/components';

interface OrdersExtraActionsProps {
  orderId: number;
  productItemId: number;
  isCanceled: boolean;
}

const OrdersExtraActions = ({
  orderId,
  productItemId,
  isCanceled,
}: OrdersExtraActionsProps) => {
  const handleWriteReview = () =>
    redirect(ROUTER_PATH.REVIEW_PRODUCT(orderId, productItemId));

  return (
    <article className="w-full md:flex md:justify-between">
      <div className="text-text-tertiary inline-flex items-center text-base">
        주문번호 : {orderId}
      </div>
      {!isCanceled && (
        <div className="gap-xs flex justify-end">
          <ExtraButton onClick={handleWriteReview}>리뷰 작성</ExtraButton>
        </div>
      )}
    </article>
  );
};

export default OrdersExtraActions;
