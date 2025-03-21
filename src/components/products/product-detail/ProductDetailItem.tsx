'use client';

import { useState } from 'react';

import { calculateDiscountRate } from '@/utils';
import type { Product, OptionValue } from '@/types';
import ProductHeader from './ProductHeader';
import ProductOptions from './ProductOptions';
import ProductPrice from './ProductPrice';
import ProductQuantity from './ProductQuantity';
import ProductActions from './ProductActions';
import ProductThumbnail from '../ProductThumbnail';

const ProductDetailItem = ({
  titleUrl,
  name,
  storeName,
  freeDelivery,
  almostOutOfStock,
  likes,
  originalPrice,
  sellingPrice,
  options,
  maxPurchaseQuantity,
}: Product) => {
  const discountRate = calculateDiscountRate(originalPrice, sellingPrice);

  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, OptionValue>
  >({});
  const [finalPrice, setFinalPrice] = useState<number>(sellingPrice);
  const [quantity, setQuantity] = useState<number>(1);

  const handleOptionChange = (
    optionName: string,
    selectedValue: OptionValue,
  ) => {
    const newSelectedOptions = {
      ...selectedOptions,
      [optionName]: selectedValue,
    };

    setSelectedOptions(newSelectedOptions);

    let newPrice = sellingPrice;
    Object.values(newSelectedOptions).forEach(value => {
      if (value && value.additionalPrice) {
        newPrice += value.additionalPrice;
      }
    });

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
          options={options}
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
        />
        <ProductActions />
      </section>
    </div>
  );
};

export default ProductDetailItem;
