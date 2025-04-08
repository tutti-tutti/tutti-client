'use client';

import { CART_CONSTANTS } from '@/constants';
import { IconButton } from '../common';

interface CartItemQuantityProps {
  productQuantity: number;
  maxQuantity: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
}

const CartItemQuantity = ({
  productQuantity,
  maxQuantity,
  handleIncrease,
  handleDecrease,
}: CartItemQuantityProps) => {
  return (
    <div className="flex h-full flex-col">
      <div className="mt-auto flex items-center justify-start md:justify-end">
        <span className="mr-md font-style-paragraph md:font-style-heading text-text-secondary">
          {CART_CONSTANTS.QUANTITY}
        </span>
        <div className="gap-xs md:gap-lg flex items-center">
          <IconButton
            icon="minus"
            iconProps={{ width: 18, height: 18 }}
            variant={productQuantity <= 1 ? 'disabled' : 'primary'}
            onClick={handleDecrease}
          />
          <span className="text-text-primary font-style-paragraph md:font-style-heading">
            {productQuantity}
          </span>
          <IconButton
            icon="plus"
            iconProps={{ width: 18, height: 18 }}
            variant={productQuantity >= maxQuantity ? 'disabled' : 'primary'}
            onClick={handleIncrease}
          />
        </div>
      </div>
      <span className="text-text-tertiary font-style-info flex justify-start md:justify-end">
        {CART_CONSTANTS.CUSTOMER_PER_PURCHASE(maxQuantity)}
      </span>
    </div>
  );
};

export default CartItemQuantity;
