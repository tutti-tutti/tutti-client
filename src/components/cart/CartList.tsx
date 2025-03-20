import { useCartStore } from '@/stores';
import CartItem from './CartItem';
import { MoreViewButton } from '../common';

const CartList = () => {
  const { items } = useCartStore();

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
          <CartItem key={item.productId} {...item} />
        ))}
      </ul>
      {items.length > 3 && <MoreViewButton />}
    </section>
  );
};

export default CartList;
