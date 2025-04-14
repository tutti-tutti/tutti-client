'use client';

import { redirect } from 'next/navigation';

import { useQueryClient } from '@tanstack/react-query';

import {
  ROUTER_PATH,
  ORDER_CONSTANT,
  REVIEW_CONSTANTS,
  CART_CONSTANTS,
} from '@/constants';
import { toast } from '@/utils';
import { addCart } from '@/services';
import { cartQueryOptions } from '@/queries';
import { ExtraButton } from '@/components';

interface OrdersExtraActionsProps {
  orderId: number;
  orderSheetNo: string;
  productId: number;
  productItemId: number;
  isCanceled: boolean;
}

const { ADD_SUCCESS_MESSAGE, ADD_FAIL_MESSAGE } = CART_CONSTANTS;

const OrdersExtraActions = ({
  orderId,
  orderSheetNo,
  productId,
  productItemId,
  isCanceled,
}: OrdersExtraActionsProps) => {
  const queryClient = useQueryClient();

  const handleWriteReview = () =>
    redirect(ROUTER_PATH.REVIEW_PRODUCT(orderId, productId, productItemId));

  const handleAddCart = async () => {
    try {
      const cartItems = [{ productItemId, quantity: 1 }];

      const result = await addCart(productId, cartItems);

      if (result.isSuccess) {
        toast.success(result.message || ADD_SUCCESS_MESSAGE);

        await queryClient.invalidateQueries({
          queryKey: cartQueryOptions.queryKey,
        });
        await queryClient.prefetchQuery(cartQueryOptions);
      } else {
        toast.error(result.message || ADD_FAIL_MESSAGE);
      }
    } catch (error) {
      console.error(ADD_FAIL_MESSAGE, error);
      toast.error(ADD_FAIL_MESSAGE);
    }
  };

  return (
    <article className="w-full md:flex md:justify-between">
      <div className="text-text-tertiary inline-flex items-center text-base">
        {ORDER_CONSTANT.ORDER_SHEET_NO} : {orderSheetNo}
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
