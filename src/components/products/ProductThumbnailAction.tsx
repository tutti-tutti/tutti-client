'use client';

import { IconButton } from '../common';

const ProductThumbnailAction = () => {
  const handleCartClick = () => {
    console.log('장바구니에 담기'); // 추후 구현
  };

  const handleHeartClick = () => {
    console.log('이 상품을 좋아해요'); // 추후 구현
  };

  return (
    <div className="gap-sm absolute right-4 bottom-4 flex items-center">
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
