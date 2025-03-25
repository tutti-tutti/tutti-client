'use client';

import { IconButton } from '../common';

const ProductThumbnailAction = () => {
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
        icon="heart"
        variant="primaryShadow"
        onClick={handleHeartClick}
      />
    </div>
  );
};

export default ProductThumbnailAction;
