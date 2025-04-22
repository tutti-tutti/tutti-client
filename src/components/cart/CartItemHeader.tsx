'use client';

import Link from 'next/link';

import { ROUTER_PATH } from '@/constants';
import { Icon } from '../common';

interface CartItemHeaderProps {
  productId: number;
  storeName: string;
  productName: string;
  handleDelete: () => void;
}

const CartItemHeader = ({
  productId,
  storeName,
  productName,
  handleDelete,
}: CartItemHeaderProps) => {
  return (
    <>
      <div className="flex justify-end">
        <button className="cursor-pointer" onClick={handleDelete}>
          <Icon iconName="x" color="var(--color-icon-tertiary)" />
        </button>
      </div>

      <div className="gap-xs flex flex-col">
        <p className="mb-2xs font-style-info text-text-secondary">
          <Link href="#">{storeName}</Link>
        </p>

        <Link href={ROUTER_PATH.PRODUCT_DETAIL(productId)}>
          <h2 className="mb-xs md:mb-sm font-style-subHeading text-text-primary line-clamp-2 text-ellipsis">
            {productName}
          </h2>
        </Link>
      </div>
    </>
  );
};

export default CartItemHeader;
