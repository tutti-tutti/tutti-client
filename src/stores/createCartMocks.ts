import { cart } from '@/mocks';
import type { CartProductItem } from '@/types';
import { useCartStore } from './cartStore';

export interface CartStoreMockOptions {
  items?: CartProductItem[];
  checkedItems?: Record<string, boolean>;
  totalPrice?: number;
  discountPrice?: number;
  deliveryPrice?: number;
  finalPrice?: number;
  checkedCount?: number;
  isAllSelected?: boolean;
}

const originalUseCartStore = useCartStore;

export const mockCartStore = (options: CartStoreMockOptions = {}) => {
  const {
    items = [],
    checkedItems = {},
    totalPrice = 0,
    discountPrice = 0,
    deliveryPrice = 0,
    finalPrice = 0,
    checkedCount = 0,
    isAllSelected = false,
  } = options;

  const mockStore = {
    items,
    checkedItems,
    setCartItems: () => {},
    toggleItemCheckbox: () => {},
    toggleAllCheckbox: () => {},
    updateQuantity: () => {},
    removeItem: () => {},
    removeSelectedItems: () => {},
    getPaymentInfo: () => ({
      totalPrice,
      discountPrice,
      deliveryPrice,
      finalPrice,
    }),
    getCheckedItemsCount: () => checkedCount,
    getTotalItemsCount: () => items.length,
    isAllChecked: () => isAllSelected,
  };

  Object.defineProperty(useCartStore, 'useCartStore', {
    value: () => mockStore,
    writable: true,
  });

  return mockStore;
};

export const restoreCartStore = () => {
  Object.defineProperty(useCartStore, 'useCartStore', {
    value: originalUseCartStore,
    writable: true,
  });
};

export const createMockCartItems = (): CartProductItem[] => {
  const templates: CartProductItem[] = cart[0].items;

  return templates;
};
