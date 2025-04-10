'use client';

import { IconButton, Switch } from '@/components';
import { CART_CONSTANTS, PRODUCTS_CONSTANTS } from '@/constants';

interface ProductQuantityProps {
  quantity: number;
  maxPurchaseQuantity: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
  disabled?: boolean;
}

const ProductQuantity = ({
  quantity,
  maxPurchaseQuantity,
  handleIncrease,
  handleDecrease,
  disabled,
}: ProductQuantityProps) => {
  return (
    <article className="pb-lg">
      <div className="gap-md flex flex-col md:flex-row md:items-center md:justify-between md:gap-0">
        <div className="gap-md flex items-center md:flex-col md:items-start md:gap-0">
          <div className="gap-lg flex items-center">
            <p className="font-style-heading text-text-secondary">
              {PRODUCTS_CONSTANTS.QUANTITY}
            </p>

            <div className="gap-sm md:gap-lg flex items-center">
              <IconButton
                icon="minus"
                iconProps={{ width: 18, height: 18 }}
                variant={disabled || quantity <= 1 ? 'disabled' : undefined}
                onClick={handleDecrease}
              />
              <span className="font-style-heading text-text-primary">
                {quantity}
              </span>
              <IconButton
                icon="plus"
                iconProps={{ width: 18, height: 18 }}
                variant={
                  disabled || quantity >= maxPurchaseQuantity
                    ? 'disabled'
                    : undefined
                }
                onClick={handleIncrease}
              />
            </div>
          </div>

          <p className="font-style-paragraph text-text-tertiary">
            {CART_CONSTANTS.CUSTOMER_PER_PURCHASE(maxPurchaseQuantity)}
          </p>
        </div>

        <div className="gap-sm flex items-center">
          <p className="font-style-subHeading text-text-secondary">
            {PRODUCTS_CONSTANTS.RESTOCK_NOTIFICATION}
          </p>
          <Switch />
        </div>
      </div>
    </article>
  );
};

export default ProductQuantity;
