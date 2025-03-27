import { create } from 'zustand';

import type { CartProductItem, CartItem } from '@/types';

interface CartState {
  items: CartProductItem[];
  checkedItems: Record<number, boolean>;
  wasDeleted: boolean;
  setCartItems: (items: CartProductItem[]) => void;
  toggleItemCheckbox: (productItemId: number, isChecked: boolean) => void;
  toggleAllCheckbox: (isChecked: boolean) => void;
  updateQuantity: (productItemId: number, quantity: number) => void;
  removeItem: (productItemId: number) => void;
  removeSelectedItems: () => void;
  resetDeleteFlag: () => void;
  getPaymentInfo: () => {
    totalPrice: number;
    discountPrice: number;
    deliveryPrice: number;
    finalPrice: number;
  };
  getCheckedItemsCount: () => number;
  getTotalItemsCount: () => number;
  isAllChecked: () => boolean;
  getPayloadCheckedCartItems: () => CartItem[];
}

const useCartStore = create<CartState>((set, get) => ({
  items: [],
  checkedItems: {},
  wasDeleted: false,

  setCartItems: items => {
    set({
      items,
      checkedItems: items.reduce(
        (acc, item) => {
          acc[item.productItemId] = true;
          return acc;
        },
        {} as Record<string, boolean>,
      ),
    });
  },

  toggleItemCheckbox: (productItemId, isChecked) => {
    set(state => ({
      checkedItems: { ...state.checkedItems, [productItemId]: isChecked },
    }));
  },

  toggleAllCheckbox: isChecked => {
    set(state => ({
      checkedItems: state.items.reduce(
        (acc, item) => {
          acc[item.productItemId] = isChecked;
          return acc;
        },
        {} as Record<string, boolean>,
      ),
    }));
  },

  updateQuantity: (productItemId, quantity) => {
    set(state => ({
      items: state.items.map(item =>
        item.productItemId === productItemId ? { ...item, quantity } : item,
      ),
    }));
  },

  removeItem: productItemId => {
    set(state => {
      const newCheckedItems = { ...state.checkedItems };
      delete newCheckedItems[productItemId];

      return {
        items: state.items.filter(item => item.productItemId !== productItemId),
        checkedItems: newCheckedItems,
        wasDeleted: true,
      };
    });
  },

  removeSelectedItems: () => {
    set(state => {
      const remainingItems = state.items.filter(
        item => !state.checkedItems[item.productItemId],
      );

      const newCheckedItems = {} as Record<string, boolean>;
      remainingItems.forEach(item => {
        newCheckedItems[item.productItemId] = false;
      });

      return {
        items: remainingItems,
        checkedItems: newCheckedItems,
        wasDeleted: true,
      };
    });
  },

  resetDeleteFlag: () => {
    set({ wasDeleted: false });
  },

  getPaymentInfo: () => {
    const state = get();
    let totalPrice = 0;
    let discountPrice = 0;

    state.items.forEach(item => {
      if (state.checkedItems[item.productItemId]) {
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

  getPayloadCheckedCartItems: () => {
    const state = get();
    return state.items
      .filter(item => state.checkedItems[item.productItemId])
      .map(item => ({
        productItemId: item.productItemId,
        quantity: item.quantity,
      }));
  },
}));

export { useCartStore };
