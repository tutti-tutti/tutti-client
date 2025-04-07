'use client';

import { useEffect } from 'react';

import { Dropdown } from '@/components';
import type { ProductOption } from '@/types';
import { PRODUCTS_CONSTANTS } from '@/constants';

interface ProductOptionsProps {
  productItems: ProductOption[];
  handleOptionChange: (selectedOption: ProductOption) => void;
}

const ProductOptions = ({
  productItems,
  handleOptionChange,
}: ProductOptionsProps) => {
  const hasOptions = productItems.some(
    item => item.firstOptionName !== null || item.secondOptionName !== null,
  );

  useEffect(() => {
    if (!hasOptions && productItems.length > 0) {
      handleOptionChange(productItems[0]);
    }
  }, [productItems, hasOptions, handleOptionChange]);

  const formatDropdownOptions = (options: ProductOption[]) => {
    return options.map(option => ({
      value: option.productItemId.toString(),
      label: `${option.firstOptionValue || ''}${
        option.secondOptionValue
          ? (option.firstOptionValue ? ', ' : '') + option.secondOptionValue
          : ''
      }${
        option.additionalPrice && option.additionalPrice > 0
          ? `(+${PRODUCTS_CONSTANTS.KOREAN_CURRENCY(option.additionalPrice)})`
          : option.additionalPrice && option.additionalPrice < 0
            ? `(${PRODUCTS_CONSTANTS.KOREAN_CURRENCY(option.additionalPrice)})`
            : ''
      }`,
      additionalPrice: option.additionalPrice || 0,
    }));
  };

  if (!hasOptions) {
    return null;
  }

  return (
    <article className="gap-lg pt-lg md:pt-xl flex flex-col">
      <div className="gap-md flex items-center">
        <label className="font-style-subHeading text-text-secondary min-w-[60px]">
          {PRODUCTS_CONSTANTS.OPTION}
        </label>
        <Dropdown
          options={formatDropdownOptions(productItems)}
          placeholder={PRODUCTS_CONSTANTS.OPTION_SELECT}
          onChange={selectedOption => {
            const selectedValue = productItems.find(
              option =>
                option.productItemId.toString() === selectedOption.value,
            );
            if (selectedValue) {
              handleOptionChange(selectedValue);
            }
          }}
        />
      </div>
    </article>
  );
};

export default ProductOptions;
