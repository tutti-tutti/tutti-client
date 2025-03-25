'use client';

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
          수량
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
        고객 당 최대 {maxQuantity}개 구매가능
      </span>
    </div>
  );
};

export default CartItemQuantity;
