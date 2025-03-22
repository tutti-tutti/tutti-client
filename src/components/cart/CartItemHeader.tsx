'use client';

import Link from 'next/link';

import { Icon } from '../common';

interface CartItemHeaderProps {
  storeName: string;
  productItemName: string;
  handleDelete: () => void;
}

const CartItemHeader = ({
  storeName,
  productItemName,
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

        <h2 className="mb-xs md:mb-sm font-style-subHeading text-text-primary line-clamp-2 text-ellipsis">
          {productItemName}
        </h2>
      </div>
    </>
  );
};

export default CartItemHeader;
