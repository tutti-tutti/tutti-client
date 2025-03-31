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
  productOptionItems,
  maxPurchaseQuantity,
}: Product) => {
  const [selectedOption, setSelectedOption] = useState<ProductOption | null>(
    null,
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedProductItemId, setSelectedProductItemId] = useState<
    number | null
  >(null);

  const finalPrice = selectedOption
    ? selectedOption.sellingPrice
    : originalPrice;
  const discountRate = selectedOption
    ? calculateDiscountRate(
        originalPrice + selectedOption.additionalPrice,
        selectedOption.sellingPrice,
      )
    : '0%';

  const handleOptionChange = (selectedOption: ProductOption) => {
    setSelectedOption(selectedOption);
    setSelectedProductItemId(selectedOption.productItemId);
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
          height="h-auto"
          imageUrl={titleUrl}
          name={name}
          className="aspect-square"
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
          productItems={productOptionItems}
          handleOptionChange={handleOptionChange}
        />
        <ProductPrice
          originalPrice={
            selectedOption
              ? originalPrice + selectedOption.additionalPrice
              : originalPrice
          }
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
