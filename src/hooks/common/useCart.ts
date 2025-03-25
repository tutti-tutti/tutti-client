'use client';

import { useState, useEffect } from 'react';

import { useCartStore } from '@/stores';
import { fetchCart, removeFromCart } from '@/services';
import { toast } from '@/utils';

const useCart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const {
    items,
    checkedItems,
    setCartItems,
    toggleAllCheckbox,
    removeSelectedItems,
    getCheckedItemsCount,
    getTotalItemsCount,
    isAllChecked,
    getPaymentInfo,
  } = useCartStore();

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const result = await fetchCart();
        setCartItems(result || []);
      } catch (err) {
        console.error('장바구니 로딩 중 오류가 발생했습니다.', err);
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [setCartItems]);

  const handleDeleteSelected = async () => {
    const checkedCount = getCheckedItemsCount();
    if (checkedCount === 0) return;

    if (window.confirm('선택한 상품을 삭제하시겠습니까?')) {
      try {
        const selectedProductItemIds = Object.entries(checkedItems)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .filter(([_, checked]) => checked)
          .map(([productItemId]) => Number(productItemId));

        const result = await removeFromCart(items, selectedProductItemIds);

        removeSelectedItems();
        toast.success(result.message);
      } catch (err) {
        console.error('선택한 상품 삭제 중 오류가 발생했습니다.', err);
        setError(err as Error);
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

// 'use client';

// import { useQuery } from '@tanstack/react-query';

// import { useCartStore } from '@/stores';
// import { fetchCart } from '@/services';
// import { CART_QUERY_KEY } from '@/constants';

// const useCart = () => {
//   const {
//     items,
//     setCartItems,
//     toggleAllCheckbox,
//     removeSelectedItems,
//     getCheckedItemsCount,
//     getTotalItemsCount,
//     isAllChecked,
//     getPaymentInfo,
//   } = useCartStore();

//   const { isLoading, error } = useQuery(cartQueryOptions); -> 이렇게 사용하려 했는데 이러면 캐싱이 안됨.
//   const { isLoading, error } = useQuery({
//     queryKey: [CART_QUERY_KEY.CART],
//     queryFn: async () => {
//       try {
//         const result = await fetchCart();
//         setCartItems(result || []);
//         return result;
//       } catch (err) {
//         console.error('장바구니 로딩 중 오류가 발생했습니다.', err);
//         throw err;
//       }
//     },
//   });

//   const handleDeleteSelected = () => {
//     const checkedCount = getCheckedItemsCount();
//     if (checkedCount > 0 && window.confirm('선택한 상품을 삭제하시겠습니까?')) {
//       removeSelectedItems();
//     }
//   };

//   return {
//     isLoading,
//     error,
//     items,
//     checkedCount: getCheckedItemsCount(),
//     totalCount: getTotalItemsCount(),
//     isAllChecked: isAllChecked(),
//     paymentInfo: getPaymentInfo(),
//     toggleAllCheckbox,
//     handleDeleteSelected,
//   };
// };

// export { useCart };
