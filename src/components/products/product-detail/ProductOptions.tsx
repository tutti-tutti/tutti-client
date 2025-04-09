'use client';

import { Dropdown } from '@/components';
import { PRODUCTS_CONSTANTS } from '@/constants';
import { useProductOptions } from '@/hooks';
import type { ProductOption } from '@/types';
import ProductSelectInfo from './ProductSelectInfo';

interface ProductOptionsProps {
  productItems: ProductOption[];
  handleOptionChange: (
    selectedOptions: ProductOption[],
    quantities: number[],
  ) => void;
  maxPurchaseQuantity: number;
}

const ProductOptions = ({
  productItems,
  handleOptionChange,
  maxPurchaseQuantity,
}: ProductOptionsProps) => {
  const {
    selectedOptions,
    hasOptions,
    addOption,
    handleIncrease,
    handleDecrease,
    handleRemove,
    formatDropdownOptions,
  } = useProductOptions(productItems, handleOptionChange, maxPurchaseQuantity);

  return (
    <article className="gap-lg pt-lg md:pt-xl flex flex-col">
      {hasOptions ? (
        <>
          <div className="gap-md flex items-center">
            <label className="font-style-subHeading text-text-secondary min-w-[60px]">
              {PRODUCTS_CONSTANTS.OPTION}
            </label>
            <Dropdown
              options={formatDropdownOptions(productItems)}
              placeholder={PRODUCTS_CONSTANTS.OPTION_SELECT}
              onChange={addOption}
            />
          </div>

          <ProductSelectInfo
            selectedOptions={selectedOptions.map((item, index) => ({
              option: item.option,
              quantity: item.quantity,
              index,
            }))}
            maxPurchaseQuantity={maxPurchaseQuantity}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
            handleRemove={handleRemove}
          />
        </>
      ) : (
        selectedOptions.length > 0 && (
          <ProductSelectInfo
            selectedOptions={selectedOptions.map((item, index) => ({
              option: item.option,
              quantity: item.quantity,
              index,
            }))}
            maxPurchaseQuantity={maxPurchaseQuantity}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
            handleRemove={handleRemove}
            showRemoveButton={false}
          />
        )
      )}
    </article>
  );
};

export default ProductOptions;
