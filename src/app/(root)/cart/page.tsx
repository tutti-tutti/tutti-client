import { CartInfo, RecommendProductList } from '@/components';
import { getAccessToken } from '@/services';

const CartPage = async () => {
  const isLoggedIn = !!(await getAccessToken());

  return (
    <div className="gap-3xl flex flex-col">
      <CartInfo isLoggedIn={isLoggedIn} />
      <div className="mb-7xl">
        <RecommendProductList />
      </div>
    </div>
  );
};

export default CartPage;
