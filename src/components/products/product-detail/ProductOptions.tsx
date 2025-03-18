'use client';

import { Dropdown } from '@/components/common';
import type { OptionValue, ProductOption } from '@/types';

interface ProductOptionsProps {
  options: ProductOption[];
  handleOptionChange: (optionName: string, selectedValue: OptionValue) => void;
}

const ProductOptions = ({
  options,
  handleOptionChange,
}: ProductOptionsProps) => {
  const formatDropdownOptions = (option: ProductOption) => {
    return option.values.map(value => ({
      value: value.name,
      label: value.additionalPrice
        ? `${value.name} (+${value.additionalPrice.toLocaleString()}원)`
        : value.name,
      additionalPrice: value.additionalPrice || 0,
    }));
  };

  return (
    <article className="gap-lg pb-lg md:py-xl flex flex-col">
      {options &&
        options.map((option, index) => (
          <div key={index} className="gap-md flex items-center">
            <label className="font-style-subHeading text-text-secondary min-w-[100px]">
              {option.name}
            </label>
            <Dropdown
              options={formatDropdownOptions(option)}
              placeholder={`${option.name} 선택`}
              onChange={selectedOption => {
                const selectedValue = option.values.find(
                  v => v.name === selectedOption.value,
                );
                if (selectedValue) {
                  handleOptionChange(option.name, selectedValue);
                }
              }}
            />
          </div>
        ))}
    </article>
  );
};

export default ProductOptions;
