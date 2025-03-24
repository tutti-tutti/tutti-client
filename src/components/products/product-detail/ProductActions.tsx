import { Button } from '@/components';
import { addCart } from '@/services';

const ProductActions = ({ productId }: { productId: number }) => {
  const handleCartClick = async () => {
    await addCart({ productItemId: productId, quantity: 1 });
  };

  return (
    <div className="gap-sm grid grid-cols-2">
      <Button
        variant="secondaryOutline"
        className="font-style-subHeading flex-auto"
        onClick={handleCartClick}
      >
        장바구니 담기
      </Button>
      <Button className="font-style-subHeading flex-auto">구매하기</Button>
    </div>
  );
};

export default ProductActions;
