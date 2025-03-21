import { create } from 'zustand';

import type { CartProductItem } from '@/types';

interface CartState {
  items: CartProductItem[];
  checkedItems: Record<number, boolean>;
  setCartItems: (items: CartProductItem[]) => void;
  toggleItemCheckbox: (productId: number, isChecked: boolean) => void;
  toggleAllCheckbox: (isChecked: boolean) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeItem: (productId: number) => void;
  removeSelectedItems: () => void;
  getPaymentInfo: () => {
    totalPrice: number;
    discountPrice: number;
    deliveryPrice: number;
    finalPrice: number;
  };
  getCheckedItemsCount: () => number;
  getTotalItemsCount: () => number;
  isAllChecked: () => boolean;
}

const useCartStore = create<CartState>((set, get) => ({
  items: [],
  checkedItems: {},

  setCartItems: items => set({ items }),

  toggleItemCheckbox: (productId, isChecked) => {
    set(state => ({
      checkedItems: { ...state.checkedItems, [productId]: isChecked },
    }));
  },

  toggleAllCheckbox: isChecked => {
    set(state => ({
      checkedItems: state.items.reduce(
        (acc, item) => {
          acc[item.productId] = isChecked;
          return acc;
        },
        {} as Record<string, boolean>,
      ),
    }));
  },

  updateQuantity: (productId, quantity) => {
    set(state => ({
      items: state.items.map(item =>
        item.productId === productId ? { ...item, quantity } : item,
      ),
    }));
  },

  removeItem: productId => {
    set(state => {
      const newCheckedItems = { ...state.checkedItems };
      delete newCheckedItems[productId];

      return {
        items: state.items.filter(item => item.productId !== productId),
        checkedItems: newCheckedItems,
      };
    });
  },

  removeSelectedItems: () => {
    set(state => {
      const remainingItems = state.items.filter(
        item => !state.checkedItems[item.productId],
      );

      const newCheckedItems = {} as Record<string, boolean>;
      remainingItems.forEach(item => {
        newCheckedItems[item.productId] = false;
      });

      return {
        items: remainingItems,
        checkedItems: newCheckedItems,
      };
    });
  },

  getPaymentInfo: () => {
    const state = get();
    let totalPrice = 0;
    let discountPrice = 0;

    state.items.forEach(item => {
      if (state.checkedItems[item.productId]) {
        totalPrice += item.originalPrice * item.quantity;
        discountPrice +=
          (item.originalPrice - item.sellingPrice) * item.quantity;
      }
    });

    const deliveryPrice = totalPrice > 0 ? 3000 : 0; // 배송비 정책에 따라 달라질 예정
    const finalPrice = totalPrice - discountPrice + deliveryPrice;

    return {
      totalPrice,
      discountPrice,
      deliveryPrice,
      finalPrice,
    };
  },

  getCheckedItemsCount: () => {
    const state = get();
    return Object.values(state.checkedItems).filter(Boolean).length;
  },

  getTotalItemsCount: () => {
    return get().items.length;
  },

  isAllChecked: () => {
    const state = get();
    return (
      Object.values(state.checkedItems).filter(Boolean).length ===
        state.items.length && state.items.length > 0
    );
  },
}));

export { useCartStore };
