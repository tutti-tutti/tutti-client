'use client';

import { useState, useEffect } from 'react';

import { useCartStore } from '@/stores';
import { fetchCart } from '@/services';

const useCart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const {
    items,
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

  const handleDeleteSelected = () => {
    const checkedCount = getCheckedItemsCount();
    if (checkedCount > 0 && window.confirm('선택한 상품을 삭제하시겠습니까?')) {
      removeSelectedItems();
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
