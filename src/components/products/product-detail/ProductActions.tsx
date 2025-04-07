import { useRouter } from 'next/navigation';

import { useQueryClient } from '@tanstack/react-query';

import { Button } from '@/components';
import { addCart, getAccessToken } from '@/services';
import { toast } from '@/utils';
import { CART_CONSTANTS, PRODUCTS_CONSTANTS, ROUTER_PATH } from '@/constants';
import { cartQueryOptions } from '@/queries';

interface ProductActionsProps {
  productId: number;
  productItemId: number;
  quantity: number;
  disabled?: boolean;
}

const {
  CART_TOAST_MESSAGE,
  ADD_SUCCESS_MESSAGE,
  ADD_FAIL_MESSAGE,
  ADD_CART,
  CHECKOUT,
} = CART_CONSTANTS;

const ProductActions = ({
  productId,
  productItemId,
  quantity,
  disabled,
}: ProductActionsProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const orderProductItems = [{ productItemId, quantity }];
  const encodedOrderProductItems = encodeURIComponent(
    JSON.stringify(orderProductItems),
  );

  const noticeSelectOption = () =>
    toast.warning(PRODUCTS_CONSTANTS.SELECT_OPTION_MESSAGE);

  const handleCheckoutClick = async () => {
    if (disabled) {
      noticeSelectOption();
      return;
    }

    const user = await getAccessToken();

    if (!user) {
      toast.warning(CART_TOAST_MESSAGE.LOGIN);
      router.push(ROUTER_PATH.LOGIN);
      return;
    }

    router.push(ROUTER_PATH.CHECKOUT(encodedOrderProductItems));
  };

  const handleCartClick = async () =>
    disabled ? noticeSelectOption() : await handleAddCart();

  const handleAddCart = async () => {
    try {
      const result = await addCart(productId, productItemId, quantity);

      if (result.success) {
        toast.success(result.message || ADD_SUCCESS_MESSAGE);

        await queryClient.invalidateQueries({
          queryKey: cartQueryOptions.queryKey,
        });
        await queryClient.prefetchQuery(cartQueryOptions);
      } else {
        toast.error(result.message || ADD_FAIL_MESSAGE);
      }
    } catch (error) {
      console.error(ADD_FAIL_MESSAGE, error);
      toast.error(ADD_FAIL_MESSAGE);
    }
  };

  const buttonDefaultStyle = 'font-style-subHeading flex-auto';

  return (
    <div className="gap-sm grid grid-cols-2">
      <Button
        className={buttonDefaultStyle}
        variant="secondaryOutline"
        onClick={handleCartClick}
      >
        {ADD_CART}
      </Button>
      <Button className={buttonDefaultStyle} onClick={handleCheckoutClick}>
        {CHECKOUT}
      </Button>
    </div>
  );
};

export default ProductActions;
