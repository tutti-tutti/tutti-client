'use client';

import { redirect } from 'next/navigation';

import { ROUTER_PATH, ORDER_CONSTANT, REVIEW_CONSTANTS } from '@/constants';
import { ExtraButton } from '@/components';

interface OrdersExtraActionsProps {
  orderId: number;
  orderSheetNo: string;
  productId: number;
  productItemId: number;
  isCanceled: boolean;
}

const OrdersExtraActions = ({
  orderId,
  orderSheetNo,
  productId,
  productItemId,
  isCanceled,
}: OrdersExtraActionsProps) => {
  const handleWriteReview = () =>
    redirect(ROUTER_PATH.REVIEW_PRODUCT(orderId, productId, productItemId));

  return (
    <article className="w-full md:flex md:justify-between">
      <div className="text-text-tertiary inline-flex items-center text-base">
        {ORDER_CONSTANT.ORDER_SHEET_NO} : {orderSheetNo}
      </div>

      {!isCanceled && (
        <div className="gap-xs flex justify-end">
          <ExtraButton onClick={handleWriteReview}>
            {REVIEW_CONSTANTS.CREATE.LABEL}
          </ExtraButton>
        </div>
      )}
    </article>
  );
};

export default OrdersExtraActions;
