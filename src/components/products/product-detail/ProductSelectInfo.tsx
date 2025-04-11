'use client';

import { IconButton, Switch, Icon } from '@/components';
import { CART_CONSTANTS, PRODUCTS_CONSTANTS } from '@/constants';
import { formatPrice } from '@/utils';
import type { ProductOption } from '@/types';

interface ProductSelectInfoProps {
  selectedOptions: {
    option: ProductOption;
    quantity: number;
    index: number;
  }[];
  maxPurchaseQuantity: number;
  handleIncrease: (index: number) => void;
  handleDecrease: (index: number) => void;
  handleRemove: (index: number) => void;
  showRemoveButton?: boolean;
}

const ProductSelectInfo = ({
  selectedOptions,
  maxPurchaseQuantity,
  handleIncrease,
  handleDecrease,
  handleRemove,
  showRemoveButton = true,
}: ProductSelectInfoProps) => {
  if (selectedOptions.length === 0) {
    return null;
  }

  return (
    <article>
      <div className="divide-border-secondary border-border-secondary divide-y-2 border-y-2">
        {selectedOptions.map(({ option, quantity, index }) => (
          <div key={`${option.productItemId}-${index}`} className="py-lg">
            <div className="flex items-center justify-between">
              <p className="font-style-subHeading text-text-tertiary">
                {option.firstOptionValue || ''}
                {option.secondOptionValue
                  ? (option.firstOptionValue ? ', ' : '') +
                    option.secondOptionValue
                  : ''}
              </p>

              <div className="gap-sm flex items-center">
                <p className="font-style-subHeading text-text-secondary">
                  {PRODUCTS_CONSTANTS.RESTOCK_NOTIFICATION}
                </p>
                <Switch />
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <div className="flex flex-col">
                <div className="gap-md flex items-center">
                  <p className="font-style-heading text-text-secondary">
                    {PRODUCTS_CONSTANTS.QUANTITY}
                  </p>

                  <div className="gap-sm md:gap-lg flex items-center">
                    <IconButton
                      icon="minus"
                      iconProps={{ width: 18, height: 18 }}
                      variant={quantity <= 1 ? 'disabled' : undefined}
                      onClick={() => handleDecrease(index)}
                    />
                    <span className="font-style-heading text-text-primary">
                      {quantity}
                    </span>
                    <IconButton
                      icon="plus"
                      iconProps={{ width: 18, height: 18 }}
                      variant={
                        quantity >= maxPurchaseQuantity ? 'disabled' : undefined
                      }
                      onClick={() => handleIncrease(index)}
                    />
                  </div>
                </div>
                <p className="font-style-paragraph text-text-primary mt-2xs">
                  {CART_CONSTANTS.CUSTOMER_PER_PURCHASE(maxPurchaseQuantity)}
                </p>
              </div>

              <div className="gap-xs flex items-center">
                <div className="font-style-heading text-text-primary">
                  {formatPrice(option.sellingPrice * quantity)}
                </div>
                {showRemoveButton && (
                  <div className="text-icon-tertiary cursor-pointer">
                    <Icon iconName="x" onClick={() => handleRemove(index)} />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default ProductSelectInfo;
