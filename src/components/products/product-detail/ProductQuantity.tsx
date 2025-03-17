'use client';

import { IconButton, Switch } from '@/components';

interface ProductQuantityProps {
  quantity: number;
  maxPurchaseQuantity: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
}

const ProductQuantity = ({
  quantity,
  maxPurchaseQuantity,
  handleIncrease,
  handleDecrease,
}: ProductQuantityProps) => {
  return (
    <article className="pb-lg">
      <div className="gap-md flex flex-col md:flex-row md:items-center md:justify-between md:gap-0">
        <div className="gap-md flex items-center md:flex-col md:items-start md:gap-0">
          <div className="gap-lg flex items-center">
            <p className="font-style-heading text-text-secondary">수량</p>

            <div className="gap-sm md:gap-lg flex items-center">
              <IconButton
                icon="minus"
                iconProps={{ width: 18, height: 18 }}
                variant={quantity <= 1 ? 'disabled' : undefined}
                onClick={handleDecrease}
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
                onClick={handleIncrease}
              />
            </div>
          </div>

          <p className="font-style-paragraph text-text-tertiary">
            고객 당 최대 {maxPurchaseQuantity}개 구매가능
          </p>
        </div>

        <div className="gap-sm flex items-center">
          <p className="font-style-subHeading text-text-secondary">
            이 상품 재입고알림
          </p>
          <Switch />
        </div>
      </div>
    </article>
  );
};

export default ProductQuantity;
