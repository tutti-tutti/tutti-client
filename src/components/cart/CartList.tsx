'use client';

import CartItem from './CartItem';
import { MoreViewButton } from '../common';
import { useCart } from '@/hooks';

const CartList = () => {
  const { items, isPending } = useCart();

  if (isPending) {
    return (
      <div className="py-xl text-center">
        <p className="text-text-secondary font-style-heading">
          {/* 추후 스켈레톤으로 구현 */}
          장바구니를 불러오는 중...
        </p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="py-xl text-center">
        <p className="text-text-secondary font-style-heading">
          장바구니가 비어있습니다.
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
