'use client';

import { useCart } from '@/hooks';
import { CART_CONSTANTS } from '@/constants';
import CartItem from './CartItem';
import { MoreViewButton } from '../common';

const CartList = () => {
  const { items, isPending } = useCart();

  if (isPending) {
    return (
      <div className="py-xl text-center">
        <p className="text-text-secondary font-style-heading">
          {/* 추후 스켈레톤으로 구현 */}
          {CART_CONSTANTS.LOADING_CART_MESSAGE}
        </p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="py-xl text-center">
        <p className="text-text-secondary font-style-heading">
          {CART_CONSTANTS.EMPTY_CART_MESSAGE}
        </p>
      </div>
    );
  }

  return (
    <section>
      <ul className="flex flex-col">
        {items.map(item => (
          <CartItem key={item.productItemId} {...item} />
        ))}
      </ul>
      {items.length > 3 && <MoreViewButton />}
    </section>
  );
};

export default CartList;
