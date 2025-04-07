'use client';

import React, { useState, useEffect } from 'react';

import { calculateDiscountRate } from '@/utils';
import { useCartStore } from '@/stores';
import { removeFromCart } from '@/services';
import { CART_CONSTANTS } from '@/constants';
import { toast } from '@/utils';
import type { CartProductItem } from '@/types';
import CartItemImage from './CartItemImage';
import CartItemHeader from './CartItemHeader';
import CartItemOptions from './CartItemOptions';
import CartItemPrice from './CartItemPrice';
import CartItemQuantity from './CartItemQuantity';

const { CONFIRM_DELETE_MESSAGE, CART_TOAST_MESSAGE } = CART_CONSTANTS;

const CartItem = ({
  productItemId,
  productItemName,
  storeName,
  productImgUrl,
  originalPrice,
  sellingPrice,
  quantity,
  firstOptionName,
  firstOptionValue,
  secondOptionName,
  secondOptionValue,
  maxQuantity,
}: CartProductItem) => {
  const [productQuantity, setProductQuantity] = useState<number>(quantity);
  const {
    items,
    toggleItemCheckbox,
    updateQuantity,
    removeItem,
    checkedItems,
  } = useCartStore();

  const isChecked = checkedItems[productItemId] || false;

  useEffect(() => {
    updateQuantity(productItemId, productQuantity);
  }, [productItemId, productQuantity, updateQuantity]);

  const discountRate = calculateDiscountRate(originalPrice, sellingPrice);
  const hasOptions = !!firstOptionName || !!secondOptionName;

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

  const handleDelete = async () => {
    if (window.confirm(CONFIRM_DELETE_MESSAGE)) {
      try {
        const result = await removeFromCart(items, [productItemId]);

        removeItem(productItemId);
        toast.success(result.message);
      } catch (error) {
        console.error(CART_TOAST_MESSAGE.DELETE_ERROR, error);
        toast.error(CART_TOAST_MESSAGE.DELETE_ERROR);
      }
    }
  };

  return (
    <li className="py-lg md:py-2xl border-border-secondary gap-sm flex w-full border-t">
      <CartItemImage
        productId={productItemId}
        productImgUrl={productImgUrl}
        productItemName={productItemName}
        isChecked={isChecked}
        toggleItemCheckbox={toggleItemCheckbox}
      />

      <div className="flex w-1/2 flex-col md:w-3/5">
        <CartItemHeader
          storeName={storeName}
          productItemName={productItemName}
          handleDelete={handleDelete}
        />

        {hasOptions && (
          <CartItemOptions
            firstOptionValue={firstOptionValue}
            secondOptionValue={secondOptionValue}
          />
        )}

        <CartItemPrice
          originalPrice={originalPrice}
          sellingPrice={sellingPrice}
          productQuantity={productQuantity}
          discountRate={discountRate}
        />

        <CartItemQuantity
          productQuantity={productQuantity}
          maxQuantity={maxQuantity}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
        />
      </div>
    </li>
  );
};

export default CartItem;
