import { Button } from '@/components';
import { addCart } from '@/services';

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
  const handleCartClick = async () => {
    await addCart(productId, productItemId, quantity);
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
