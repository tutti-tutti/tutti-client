import { useRouter } from 'next/navigation';

import { addCart } from '@/services';
import { ROUTER_PATH } from '@/constants';
import { Button } from '@/components';
import { toast } from '@/utils';

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

  const orderProductItems = [{ productItemId, quantity }];
  const encodedOrderProductItems = encodeURIComponent(
    JSON.stringify(orderProductItems),
  );

  const noticeSelectOption = () => toast.warning('옵션을 선택해주세요!');

  const handleCheckoutClick = () =>
    disabled
      ? noticeSelectOption()
      : router.push(ROUTER_PATH.CHECKOUT(encodedOrderProductItems));

  const handleCartClick = async () =>
    disabled ? noticeSelectOption() : await handleAddCart();

  const handleAddCart = async () => {
    try {
      const result = await addCart(productId, productItemId, quantity);

      if (result.success) {
        toast.success(result.message || '장바구니에 추가되었습니다.');
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
