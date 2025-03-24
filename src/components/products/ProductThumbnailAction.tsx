'use client';

import { addCart } from '@/services';
import { IconButton } from '../common';

const ProductThumbnailAction = ({ productId }: { productId: number }) => {
  const handleCartClick = async () => {
    await addCart({ productItemId: productId, quantity: 1 });
  };

  const handleHeartClick = () => {
    console.log('이 상품을 좋아해요'); // 추후 구현
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div
      className="gap-sm absolute right-4 bottom-4 flex items-center"
      onClick={handleContainerClick}
    >
      <IconButton
        icon="cart"
        variant="primaryShadow"
        iconProps={{ width: '24', height: '24' }}
        onClick={handleCartClick}
      />
      <IconButton
        icon="heart"
        variant="primaryShadow"
        onClick={handleHeartClick}
      />
    </div>
  );
};

export default ProductThumbnailAction;
