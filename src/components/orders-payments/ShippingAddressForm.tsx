'use client';

import { ChangeEvent, useEffect, useRef } from 'react';
import { SHIPPING_ADDRESS_INPUT_ITEMS } from '@/constants';
import { useShippingAddressStore } from '@/stores';
import { cn } from '@/utils';
import type { AddressInputItem } from '@/types';
import { Input, Button } from '@/components';

interface ShippingAddressFormProps {
  gapStyles: string;
}

const ShippingAddressForm = ({ gapStyles }: ShippingAddressFormProps) => {
  const { formData, updateField } = useShippingAddressStore();
  const scriptLoaded = useRef(false);

  // 카카오 주소 검색 스크립트 로드
  useEffect(() => {
    if (scriptLoaded.current) return;

    const script = document.createElement('script');
    script.src =
      '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    script.onload = () => {
      scriptLoaded.current = true;
    };
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    vaildType: AddressInputItem['vaildType'],
  ) => {
    const { name, value } = e.target;

    if (vaildType === 'phone') {
      const cleanedValue = value.replace(/[^\d]/g, '');
      updateField(name, cleanedValue);
    } else {
      updateField(name, value);
    }
  };

  const openAddressSearch = () => {
    if (!window.daum || !scriptLoaded.current) {
      alert('주소 검색 서비스를 불러오는 중입니다. 잠시 후 다시 시도해주세요.');
      return;
    }

    new window.daum.Postcode({
      oncomplete: data => {
        let fullAddress = data.address;

        // 건물명이 있으면 추가
        if (data.buildingName) {
          fullAddress += ` (${data.buildingName})`;
        }

        updateField('zipCode', data.zonecode);
        updateField('recipientAddress', fullAddress);
      },
    }).open();
  };

  const legendStyles = 'absolute opacity-0';

  return (
    <form className={gapStyles}>
      {SHIPPING_ADDRESS_INPUT_ITEMS.map((item, index) => {
        if (item.name === 'zipCode') {
          return (
            <fieldset key={`${item.name}-${index}`}>
              <legend className={legendStyles}>{item.label}</legend>
              <div className={cn(gapStyles, 'flex-row justify-between')}>
                <Input
                  className="bg-bg-tertiary"
                  name={item.name}
                  type={item.type}
                  placeholder={item.placeholder}
                  value={formData[item.name] || ''}
                  onChange={e => handleInputChange(e, item.vaildType)}
                />

                <Button
                  type="button"
                  onClick={openAddressSearch}
                  className="h-[54px]"
                >
                  주소 검색
                </Button>
              </div>
            </fieldset>
          );
        }

        return (
          <fieldset key={`${item.name}-${index}`}>
            <legend className={legendStyles}>{item.label}</legend>
            <Input
              className="bg-bg-tertiary"
              name={item.name}
              type={item.type}
              placeholder={item.placeholder}
              value={formData[item.name] || ''}
              onChange={e => handleInputChange(e, item.vaildType)}
            />
          </fieldset>
        );
      })}
    </form>
  );
};

export default ShippingAddressForm;
