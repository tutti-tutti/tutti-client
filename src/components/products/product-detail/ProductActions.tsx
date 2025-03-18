import { Button } from '@/components';

const ProductActions = () => {
  return (
    <div className="gap-sm grid grid-cols-2">
      <Button
        variant="secondaryOutline"
        className="font-style-subHeading flex-auto"
      >
        장바구니 담기
      </Button>
      <Button className="font-style-subHeading flex-auto">구매하기</Button>
    </div>
  );
};

export default ProductActions;
