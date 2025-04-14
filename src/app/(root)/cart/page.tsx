import { getAccessToken } from '@/services';
import { CartHeader, CartInfo, RecommendProductList } from '@/components';

const CartPage = async () => {
  const isLoggedIn = !!(await getAccessToken());

  return (
    <div className="gap-3xl flex flex-col">
      <CartHeader />
      <CartInfo isLoggedIn={isLoggedIn} />
      <div className="mb-7xl">
        <RecommendProductList />
      </div>
    </div>
  );
};

export default CartPage;
