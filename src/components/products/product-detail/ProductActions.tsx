import { useQueryClient } from '@tanstack/react-query';

import { Button } from '@/components';
import { addCart } from '@/services';
import { toast } from '@/utils';
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
  const queryClient = useQueryClient();

  const handleCartClick = async () => {
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

  return (
    <div className="gap-sm grid grid-cols-2">
      {disabled ? (
        <Button variant="disabled" className="font-style-subHeading flex-auto">
          장바구니 담기
        </Button>
      ) : (
        <Button
          variant="secondaryOutline"
          className="font-style-subHeading flex-auto"
          onClick={handleCartClick}
        >
          장바구니 담기
        </Button>
      )}

      <Button className="font-style-subHeading flex-auto">구매하기</Button>
    </div>
  );
};

export default ProductActions;
