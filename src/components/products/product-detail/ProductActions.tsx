import { useRouter } from 'next/navigation';

import { useQueryClient } from '@tanstack/react-query';

import { Button } from '@/components';
import { addCart, getAccessToken } from '@/services';
import { toast } from '@/utils';
import { ROUTER_PATH } from '@/constants';
import { cartQueryOptions } from '@/queries';

interface ProductActionsProps {
  productId: number;
  productItemId: number;
  quantity: number;
  disabled?: boolean;
}

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

  const noticeSelectOption = () => toast.warning('옵션을 선택해주세요!');

  const handleCheckoutClick = async () => {
    if (disabled) {
      noticeSelectOption();
      return;
    }

    const user = await getAccessToken();

    if (!user) {
      toast.warning('로그인 후 이용해주세요!');
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
        toast.success(result.message || '장바구니에 추가되었습니다.');

        await queryClient.invalidateQueries({
          queryKey: cartQueryOptions.queryKey,
        });
        await queryClient.prefetchQuery(cartQueryOptions);
      } else {
        toast.error(result.message || '장바구니에 추가하지 못했습니다.');
      }
    } catch (error) {
      console.error('장바구니 담기 중 오류가 발생했습니다.', error);
      toast.error('장바구니 담기에 실패했습니다.');
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
        장바구니 담기
      </Button>
      <Button className={buttonDefaultStyle} onClick={handleCheckoutClick}>
        구매하기
      </Button>
    </div>
  );
};

export default ProductActions;
