'use client';

import { ChangeEvent } from 'react';

import { SHIPPING_ADRESS_INPUT_ITEMS } from '@/constants';
import type { AddressInputItem } from '@/types';
import { Input } from '@/components';
import { useShippingAddressStore } from '@/stores';

interface ShippingAddressFormProps {
  className: string;
}

const ShippingAddressForm = ({ className }: ShippingAddressFormProps) => {
  const { formData, updateField } = useShippingAddressStore();

  // 입력 필드 변경 핸들러
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    vaildType: AddressInputItem['vaildType'],
  ) => {
    const { name, value } = e.target;

    if (vaildType === 'phone') {
      const cleanedValue = value.replace(/[^\w가-힣ㄱ-ㅎㅏ-ㅣ]/g, '');
      updateField(name, cleanedValue);
    } else {
      updateField(name, value);
    }
  };

  return (
    <form className={className}>
      {SHIPPING_ADRESS_INPUT_ITEMS.map((item, index) => (
        <fieldset key={`${item.name}-${index}`}>
          <legend className="absolute opacity-0">{item.label}</legend>
          <Input
            className="bg-bg-tertiary"
            name={item.name}
            type={item.type}
            placeholder={item.placeholder}
            value={formData[item.name] || ''}
            onChange={e => handleInputChange(e, item.vaildType)}
          />
        </fieldset>
      ))}
    </form>
  );
};

export default ShippingAddressForm;
