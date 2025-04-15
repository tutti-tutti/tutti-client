'use client';

import { useQueryClient } from '@tanstack/react-query';

import { CART_CONSTANTS } from '@/constants';
import { toast } from '@/utils';
import { addCart } from '@/services';
import { cartQueryOptions } from '@/queries';
import type { CartItem } from '@/types';

const { ADD_SUCCESS_MESSAGE, ADD_FAIL_MESSAGE } = CART_CONSTANTS;

const useAddCart = (productId: number, cartItems: CartItem[]) => {
  const queryClient = useQueryClient();

  const handleAddCart = async () => {
    try {
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

  return {
    handleAddCart,
  };
};

export { useAddCart };
