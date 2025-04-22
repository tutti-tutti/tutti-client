import { useRouter } from 'next/navigation';

import { CART_CONSTANTS, PRODUCTS_CONSTANTS, ROUTER_PATH } from '@/constants';
import { toast } from '@/utils';
import { useAddCart } from '@/hooks';
import { getAccessToken } from '@/services';
import type { SelectedOptionItem } from '@/types';
import { Button } from '@/components';

interface ProductActionsProps {
  productId: number;
  productItemId: number;
  quantity: number;
  disabled?: boolean;
  selectedOptionItems?: SelectedOptionItem[];
}

const { CART_TOAST_MESSAGE, ADD_CART, CHECKOUT } = CART_CONSTANTS;

const BUTTON_DEFAULT_STYLE = 'font-style-subHeading flex-auto';

const ProductActions = ({
  productId,
  productItemId,
  quantity,
  disabled,
  selectedOptionItems = [],
}: ProductActionsProps) => {
  const router = useRouter();

  const mapToItems = () =>
    selectedOptionItems.length > 0
      ? selectedOptionItems.map(item => ({
          productItemId: item.option.productItemId,
          quantity: item.quantity,
        }))
      : [{ productItemId, quantity }];

  const checkoutRequestItems = mapToItems();

  const encodedCheckoutRequestItems = encodeURIComponent(
    JSON.stringify(checkoutRequestItems),
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

    router.push(ROUTER_PATH.CHECKOUT(encodedCheckoutRequestItems));
  };

  const handleCartClick = async () =>
    disabled ? noticeSelectOption() : await handleAddCart();

  const cartItems = mapToItems();
  const { handleAddCart } = useAddCart(productId, cartItems);

  return (
    <div className="gap-sm grid grid-cols-2">
      <Button
        className={BUTTON_DEFAULT_STYLE}
        variant="secondaryOutline"
        onClick={handleCartClick}
      >
        {ADD_CART}
      </Button>

      <Button className={BUTTON_DEFAULT_STYLE} onClick={handleCheckoutClick}>
        {CHECKOUT}
      </Button>
    </div>
  );
};

export default ProductActions;
