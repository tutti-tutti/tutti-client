'use client';

import Link from 'next/link';
import { redirect } from 'next/navigation';

import {
  ROUTER_PATH,
  ORDER_CONSTANT,
  REVIEW_CONSTANTS,
  CART_CONSTANTS,
} from '@/constants';
import { useAddCart } from '@/hooks';
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

  const cartItems = [{ productItemId, quantity: 1 }];
  const { handleAddCart } = useAddCart(productId, cartItems);

  return (
    <article className="w-full md:flex md:justify-between">
      <div className="text-text-tertiary inline-flex items-center text-base">
        <Link href={ROUTER_PATH.ORDERS_DETAIL(orderId)}>
          {ORDER_CONSTANT.ORDER_SHEET_NO} : {orderSheetNo}
        </Link>
      </div>

      <div className="gap-xs flex justify-end">
        <ExtraButton onClick={handleAddCart}>
          {CART_CONSTANTS.ADD_CART}
        </ExtraButton>

        {!isCanceled && (
          <ExtraButton onClick={handleWriteReview}>
            {REVIEW_CONSTANTS.CREATE.LABEL}
          </ExtraButton>
        )}
      </div>
    </article>
  );
};

export default OrdersExtraActions;
