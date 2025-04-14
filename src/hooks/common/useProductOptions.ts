'use client';

import { useState, useEffect, useRef } from 'react';

import { formatPrice } from '@/utils';
import type { ProductOption, SelectedOptionItem } from '@/types';

interface UseProductOptionsReturn {
  selectedOptions: SelectedOptionItem[];
  hasOptions: boolean;
  addOption: (selectedOptionValue: { value: string; label: string }) => void;
  handleIncrease: (index: number) => void;
  handleDecrease: (index: number) => void;
  handleRemove: (index: number) => void;
  formatDropdownOptions: (
    options: ProductOption[],
  ) => { value: string; label: string; additionalPrice: number }[];
}

const useProductOptions = (
  productItems: ProductOption[],
  handleOptionChange: (
    selectedOptions: ProductOption[],
    quantities: number[],
  ) => void,
  maxPurchaseQuantity: number,
): UseProductOptionsReturn => {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionItem[]>(
    [],
  );
  const initializedRef = useRef(false);

  const hasOptions = productItems.some(
    item => item.firstOptionName !== null || item.secondOptionName !== null,
  );

  useEffect(() => {
    if (initializedRef.current || productItems.length === 0) {
      return;
    }

    initializedRef.current = true;

    if (!hasOptions) {
      const initialOption = {
        option: productItems[0],
        quantity: 1,
      };
      setSelectedOptions([initialOption]);

      handleOptionChange([productItems[0]], [1]);
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
          ? `(+${formatPrice(option.additionalPrice)})`
          : option.additionalPrice && option.additionalPrice < 0
            ? `(${formatPrice(option.additionalPrice)})`
            : ''
      }`,
      additionalPrice: option.additionalPrice || 0,
    }));
  };

  const addOption = (selectedOptionValue: { value: string; label: string }) => {
    const selectedValue = productItems.find(
      option => option.productItemId.toString() === selectedOptionValue.value,
    );

    if (selectedValue) {
      const existingOptionIndex = selectedOptions.findIndex(
        item => item.option.productItemId === selectedValue.productItemId,
      );

      if (existingOptionIndex >= 0) {
        const updatedOptions = [...selectedOptions];
        const currentQuantity = updatedOptions[existingOptionIndex].quantity;

        if (currentQuantity < maxPurchaseQuantity) {
          updatedOptions[existingOptionIndex].quantity += 1;
          setSelectedOptions(updatedOptions);

          handleOptionChange(
            updatedOptions.map(item => item.option),
            updatedOptions.map(item => item.quantity),
          );
        }
      } else {
        const newSelectedOptions = [
          ...selectedOptions,
          { option: selectedValue, quantity: 1 },
        ];
        setSelectedOptions(newSelectedOptions);

        handleOptionChange(
          newSelectedOptions.map(item => item.option),
          newSelectedOptions.map(item => item.quantity),
        );
      }
    }
  };

  const handleIncrease = (index: number) => {
    const updatedOptions = [...selectedOptions];
    if (updatedOptions[index].quantity < maxPurchaseQuantity) {
      updatedOptions[index].quantity += 1;
      setSelectedOptions(updatedOptions);

      handleOptionChange(
        updatedOptions.map(item => item.option),
        updatedOptions.map(item => item.quantity),
      );
    }
  };

  const handleDecrease = (index: number) => {
    const updatedOptions = [...selectedOptions];
    if (updatedOptions[index].quantity > 1) {
      updatedOptions[index].quantity -= 1;
      setSelectedOptions(updatedOptions);
    } else {
      updatedOptions.splice(index, 1);
      setSelectedOptions(updatedOptions);
    }

    handleOptionChange(
      updatedOptions.map(item => item.option),
      updatedOptions.map(item => item.quantity),
    );
  };

  const handleRemove = (index: number) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions.splice(index, 1);
    setSelectedOptions(updatedOptions);

    handleOptionChange(
      updatedOptions.map(item => item.option),
      updatedOptions.map(item => item.quantity),
    );
  };

  return {
    selectedOptions,
    hasOptions,
    addOption,
    handleIncrease,
    handleDecrease,
    handleRemove,
    formatDropdownOptions,
  };
};

export { useProductOptions };
