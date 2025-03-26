'use client';

import { useEffect } from 'react';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { useCartStore } from '@/stores';
import { removeFromCart } from '@/services';
import { toast } from '@/utils';
import { cartQueryOptions } from '@/queries';

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

  const { isLoading, error, data } = useQuery(cartQueryOptions);

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
        console.error('선택한 상품 삭제 중 오류가 발생했습니다.', error);
        toast.error('선택한 상품 삭제에 실패했습니다.');
      }
    },
  });

  const handleDeleteSelected = async () => {
    const checkedCount = getCheckedItemsCount();
    if (checkedCount === 0) return;

    if (window.confirm('선택한 상품을 삭제하시겠습니까?')) {
      try {
        const selectedProductItemIds = Object.entries(checkedItems)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .filter(([_, checked]) => checked)
          .map(([productItemId]) => Number(productItemId));

        deleteSelectedMutation.mutate(selectedProductItemIds);
      } catch (err) {
        console.error('선택한 상품 삭제 중 오류가 발생했습니다.', err);
        toast.error('선택한 상품 삭제에 실패했습니다.');
      }
    }
  };

  return {
    isLoading,
    error,
    items,
    checkedCount: getCheckedItemsCount(),
    totalCount: getTotalItemsCount(),
    isAllChecked: isAllChecked(),
    paymentInfo: getPaymentInfo(),
    toggleAllCheckbox,
    handleDeleteSelected,
  };
};

export { useCart };
