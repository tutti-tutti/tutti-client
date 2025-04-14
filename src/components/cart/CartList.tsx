'use client';

import { useCart } from '@/hooks';
import { CART_CONSTANTS } from '@/constants';
import CartItem from './CartItem';
import CartItemSkeleton from './CartItemSkeleton';
import { MoreViewButton, NoData } from '../common';

const CartList = () => {
  const { items, isPending } = useCart();

  if (isPending) {
    return <CartItemSkeleton />;
  }

  if (items.length === 0) {
    return <NoData>{CART_CONSTANTS.EMPTY_CART_MESSAGE}</NoData>;
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
