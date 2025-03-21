'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import { calculateDiscountRate } from '@/utils';
import { useCartStore } from '@/stores';
import type { CartProductItem } from '@/types';
import { Checkbox, Icon, IconButton } from '../common';
import { ProductThumbnail } from '../products';

const CartItem = ({
  productId,
  productName,
  storeName,
  productImgUrl,
  originalPrice,
  sellingPrice,
  quantity,
  optionName1,
  optionValue1,
  optionName2,
  optionValue2,
  maxQuantity,
}: CartProductItem) => {
  const [productQuantity, setProductQuantity] = useState<number>(quantity);
  const { toggleItemCheckbox, updateQuantity, removeItem, checkedItems } =
    useCartStore();

  const isChecked = checkedItems[productId] || false;

  useEffect(() => {
    updateQuantity(productId, productQuantity);
  }, [productId, productQuantity, updateQuantity]);

  const discountRate = calculateDiscountRate(originalPrice, sellingPrice);
  const totalPrice = sellingPrice * productQuantity;
  const hasOptions = !!optionName1 || !!optionName2;

  const handleIncrease = () => {
    if (productQuantity < maxQuantity) {
      setProductQuantity(productQuantity + 1);
    }
  };

  const handleDecrease = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const handleDelete = () => {
    if (window.confirm('해당 상품을 삭제하시겠습니까?')) {
      removeItem(productId);
    }
  };

  return (
    <li className="py-lg md:py-2xl border-border-secondary gap-sm flex w-full border-t">
      <figure className="relative w-1/2 md:w-2/5">
        <div className="absolute top-5 left-5 z-1">
          <Checkbox
            checked={isChecked}
            onChange={checked => toggleItemCheckbox(productId, checked)}
          />
        </div>
        <ProductThumbnail
          height="h-[150px] md:h-[322px]"
          width="w-full"
          imageUrl={productImgUrl}
          name={productName}
        />
      </figure>

      <div className="flex w-1/2 flex-col md:w-3/5">
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
            {productName}
          </h2>
        </div>

        {hasOptions && (
          <div className="gap-sm mb-sm flex items-center">
            {optionValue1 && (
              <span className="text-text-tertiary font-style-paragraph">
                {optionValue1}
              </span>
            )}
            {optionValue1 && optionValue2 && (
              <div className="bg-bg-disabled h-[var(--space-2xs)] w-[var(--space-2xs)] rounded-full" />
            )}
            {optionValue2 && (
              <span className="text-text-tertiary font-style-paragraph">
                {optionValue2}
              </span>
            )}
          </div>
        )}

        {originalPrice !== sellingPrice ? (
          <>
            <span className="font-style-info text-text-tertiaryInfo line-through">
              {(originalPrice * productQuantity).toLocaleString()}
            </span>
            <div className="gap-2xs flex items-center">
              <span className="font-style-heading text-text-danger">
                {discountRate}
              </span>
              <span className="font-style-heading text-text-primary">
                {totalPrice.toLocaleString()}원
              </span>
            </div>
          </>
        ) : (
          <p className="font-style-heading text-text-primary">
            {totalPrice.toLocaleString()}원
          </p>
        )}

        <div className="flex flex-col">
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
                variant={
                  productQuantity >= maxQuantity ? 'disabled' : 'primary'
                }
                onClick={handleIncrease}
              />
            </div>
          </div>
          <span className="text-text-tertiary font-style-info flex justify-start md:justify-end">
            고객 당 최대 {maxQuantity}개 구매가능
          </span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
