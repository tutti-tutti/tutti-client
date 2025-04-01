'use client';

import { create } from 'zustand';

import { ShippingAddress } from '@/types';

export interface ShippingAddressFormData extends ShippingAddress {
  [key: string]: string;
}

// 스토어 상태 타입 정의
interface ShippingAddressState {
  formData: ShippingAddressFormData;
  updateField: (name: string, value: string) => void;
  resetForm: () => void;
}

const initialState: ShippingAddressFormData = {
  recipientName: '',
  recipientPhone: '',
  recipientAddress: '',
  zipCode: '',
  note: '',
  recipientEmail: '',
  recipientAddressDetail: '',
};

export const useShippingAddressStore = create<ShippingAddressState>(set => ({
  formData: initialState,
  updateField: (name, value) =>
    set(state => ({
      formData: {
        ...state.formData,
        [name]: value,
      },
    })),
  resetForm: () => set({ formData: initialState }),
}));
