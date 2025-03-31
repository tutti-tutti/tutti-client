'use client';

import { create } from 'zustand';

export interface ShippingAddressFormData {
  [key: string]: string;
}

// 스토어 상태 타입 정의
interface ShippingAddressState {
  formData: ShippingAddressFormData;
  updateField: (name: string, value: string) => void;
  resetForm: () => void;
}

export const useShippingAddressStore = create<ShippingAddressState>(set => ({
  formData: {},
  updateField: (name, value) =>
    set(state => ({
      formData: {
        ...state.formData,
        [name]: value,
      },
    })),
  resetForm: () => set({ formData: {} }),
}));
