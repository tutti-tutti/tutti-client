'use client';

import { useState } from 'react';

import { calculateDiscountRate } from '@/utils';
import type { Product, ProductOption } from '@/types';
import ProductHeader from './ProductHeader';
import ProductOptions from './ProductOptions';
import ProductPrice from './ProductPrice';
import ProductQuantity from './ProductQuantity';
import ProductActions from './ProductActions';
import ProductThumbnail from '../ProductThumbnail';

const ProductDetailItem = ({
  productId,
  titleUrl,
  name,
  storeName,
  freeDelivery,
  almostOutOfStock,
  likes,
  originalPrice,
  sellingPrice,
  productItems,
  maxPurchaseQuantity,
}: Product) => {
  const discountRate = calculateDiscountRate(originalPrice, sellingPrice);

  const [finalPrice, setFinalPrice] = useState<number>(sellingPrice);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedProductItemId, setSelectedProductItemId] = useState<
    number | null
  >(null);

  const handleOptionChange = (selectedOption: ProductOption) => {
    setSelectedProductItemId(selectedOption.productItemId);

    let newPrice = sellingPrice;
    if (selectedOption && selectedOption.additionalPrice) {
      newPrice += selectedOption.additionalPrice;
    }

    setFinalPrice(newPrice);
  };

  const handleIncrease = () => {
    if (quantity < maxPurchaseQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="gap-md flex flex-col md:flex-row">
      {/* 상품 이미지 */}
      <figure className="md:w-1/2">
        <ProductThumbnail
          width="w-full"
          height="h-[350px] sm:h-[630px]"
          imageUrl={titleUrl}
          name={name}
        />
      </figure>

      {/* 상품 정보  */}
      <section className="md:w-1/2">
        <ProductHeader
          storeName={storeName}
          name={name}
          freeDelivery={freeDelivery}
          almostOutOfStock={almostOutOfStock}
          likes={likes}
        />
        <ProductOptions
          productItems={productItems}
          handleOptionChange={handleOptionChange}
        />
        <ProductPrice
          originalPrice={originalPrice}
          finalPrice={finalPrice}
          quantity={quantity}
          discountRate={discountRate}
        />
        <ProductQuantity
          quantity={quantity}
          maxPurchaseQuantity={maxPurchaseQuantity}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          disabled={selectedProductItemId === null}
        />
        <ProductActions
          productItemId={selectedProductItemId ?? 0}
          quantity={quantity}
          disabled={selectedProductItemId === null}
          productId={productId}
        />
      </section>
    </div>
  );
};

export default ProductDetailItem;
