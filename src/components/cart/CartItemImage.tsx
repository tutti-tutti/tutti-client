'use client';

import Link from 'next/link';

import { ROUTER_PATH } from '@/constants';
import { Checkbox } from '../common';
import { ProductThumbnail } from '../products';

interface CartItemImageProps {
  productId: number;
  productItemId: number;
  productImgUrl: string;
  productName: string;
  isChecked: boolean;
  toggleItemCheckbox: (productId: number, checked: boolean) => void;
}

const CartItemImage = ({
  productId,
  productItemId,
  productImgUrl,
  productName,
  isChecked,
  toggleItemCheckbox,
}: CartItemImageProps) => {
  return (
    <article className="relative w-1/2 md:w-2/5">
      <div className="absolute top-5 left-5 z-1">
        <Checkbox
          checked={isChecked}
          onChange={checked => toggleItemCheckbox(productItemId, checked)}
        />
      </div>

      <Link href={ROUTER_PATH.PRODUCT_DETAIL(productId)}>
        <ProductThumbnail
          height="h-auto"
          width="w-full"
          imageUrl={productImgUrl}
          name={productName}
          className="aspect-square"
        />
      </Link>
    </article>
  );
};

export default CartItemImage;
