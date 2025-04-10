'use client';

import { useEffect } from 'react';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { useCartStore } from '@/stores';
import { removeFromCart } from '@/services';
import { toast } from '@/utils';
import { cartQueryOptions } from '@/queries';
import { CART_CONSTANTS } from '@/constants';

const { CART_TOAST_MESSAGE, CONFIRM_DELETE_MESSAGE } = CART_CONSTANTS;

const useCart = () => {
  const queryClient = useQueryClient();

  const {
    items,
    checkedItems,
    wasDeleted,
    setCartItems,
    toggleAllCheckbox,
    removeSelectedItems,
    resetDeleteFlag,
    getCheckedItemsCount,
    getTotalItemsCount,
    isAllChecked,
    getPaymentInfo,
    getPayloadCheckedCartItems,
  } = useCartStore();

  useEffect(() => {
    if (wasDeleted) {
      queryClient.invalidateQueries({ queryKey: cartQueryOptions.queryKey });
      resetDeleteFlag();
    }

    return () => {
      resetDeleteFlag();
    };
  }, [wasDeleted, queryClient, resetDeleteFlag]);

  const { isPending, error, data } = useQuery(cartQueryOptions);

  useEffect(() => {
    if (data) {
      setCartItems(data || []);
    }
  }, [data, setCartItems]);

  const deleteSelectedMutation = useMutation({
    mutationFn: (selectedProductItemIds: number[]) =>
      removeFromCart(items, selectedProductItemIds),
    onSettled: (data, error) => {
      if (data) {
        removeSelectedItems();
        toast.success(data.message);

        queryClient.invalidateQueries({ queryKey: cartQueryOptions.queryKey });
      }
      if (error) {
        console.error(CART_TOAST_MESSAGE.DELETE_ERROR, error);
        toast.error(CART_TOAST_MESSAGE.DELETE_ERROR);
      }
    },
  });

  const handleDeleteSelected = async () => {
    const checkedCount = getCheckedItemsCount();
    if (checkedCount === 0) return;

    if (window.confirm(CONFIRM_DELETE_MESSAGE)) {
      try {
        const selectedProductItemIds = Object.entries(checkedItems)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .filter(([_, checked]) => checked)
          .map(([productItemId]) => Number(productItemId));

        deleteSelectedMutation.mutate(selectedProductItemIds);
      } catch (err) {
        console.error(CART_TOAST_MESSAGE.DELETE_ERROR, err);
        toast.error(CART_TOAST_MESSAGE.DELETE_ERROR);
      }
    }
  };

  return {
    isPending,
    error,
    items,
    checkedCount: getCheckedItemsCount(),
    totalCount: getTotalItemsCount(),
    isAllChecked: isAllChecked(),
    paymentInfo: getPaymentInfo(),
    toggleAllCheckbox,
    handleDeleteSelected,
    payloadCheckedCartItems: getPayloadCheckedCartItems(),
  };
};

export { useCart };
