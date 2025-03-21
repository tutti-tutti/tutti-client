import { fetchCart } from '@/services';
import { CartInfo, RecommendProductList } from '@/components';

const CartPage = async () => {
  const data = await fetchCart();
  const cartItems = data[0]?.items || [];

  return (
    <div className="gap-3xl flex flex-col">
      <CartInfo initialCartItems={cartItems} />
      <div className="mb-7xl">
        <RecommendProductList categoryName="식료품" />
      </div>
    </div>
  );
};

export default CartPage;
