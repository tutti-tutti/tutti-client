'use client';

import { Checkbox } from '../common';
import { ProductThumbnail } from '../products';

interface CartItemImageProps {
  productId: number;
  productImgUrl: string;
  productItemName: string;
  isChecked: boolean;
  toggleItemCheckbox: (productId: number, checked: boolean) => void;
}

const CartItemImage = ({
  productId,
  productImgUrl,
  productItemName,
  isChecked,
  toggleItemCheckbox,
}: CartItemImageProps) => {
  return (
    <figure className="relative w-1/2 md:w-2/5">
      <div className="absolute top-5 left-5 z-1">
        <Checkbox
          checked={isChecked}
          onChange={checked => toggleItemCheckbox(productId, checked)}
        />
      </div>
      <ProductThumbnail
        height="h-auto"
        width="w-full"
        imageUrl={productImgUrl}
        name={productItemName}
        className="aspect-square"
      />
    </figure>
  );
};

export default CartItemImage;
