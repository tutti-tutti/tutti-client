'use client';

import { useState, useMemo, useCallback } from 'react';

import { calculateDiscountRate } from '@/utils';
import type { Product, ProductOption } from '@/types';
import ProductHeader from './ProductHeader';
import ProductOptions from './ProductOptions';
import ProductPrice from './ProductPrice';
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
  productReviewInfo,
}: Product) => {
  const [selectedOptions, setSelectedOptions] = useState<ProductOption[]>([]);
  const [selectedQuantities, setSelectedQuantities] = useState<number[]>([]);

  const finalPrice = useMemo(() => {
    if (selectedOptions.length === 0) return originalPrice;

    return selectedOptions.reduce((total, option, index) => {
      const quantity = selectedQuantities[index] || 1;
      return total + option.sellingPrice * quantity;
    }, 0);
  }, [selectedOptions, selectedQuantities, originalPrice]);

  const totalOriginalPrice = useMemo(() => {
    if (selectedOptions.length === 0) return originalPrice;

    return selectedOptions.reduce((total, option, index) => {
      const quantity = selectedQuantities[index] || 1;
      return total + (originalPrice + (option.additionalPrice || 0)) * quantity;
    }, 0);
  }, [selectedOptions, selectedQuantities, originalPrice]);

  const discountRate = useMemo(() => {
    if (selectedOptions.length === 0) return '0%';
    return calculateDiscountRate(totalOriginalPrice, finalPrice);
  }, [totalOriginalPrice, finalPrice, selectedOptions.length]);

  const handleOptionsChange = useCallback(
    (options: ProductOption[], quantities: number[]) => {
      setSelectedOptions(options);
      setSelectedQuantities(quantities);
    },
    [],
  );

  return (
    <section className="gap-md flex flex-col md:flex-row">
      {/* 상품 이미지 */}
      <div className="md:w-1/2">
        <ProductThumbnail
          width="w-full"
          height="h-auto"
          imageUrl={titleUrl}
          name={name}
          className="aspect-square"
        />
      </div>

      {/* 상품 정보 */}
      <div className="gap-lg flex flex-col md:w-1/2">
        <ProductHeader
          storeName={storeName}
          name={name}
          freeDelivery={freeDelivery}
          almostOutOfStock={almostOutOfStock}
          likes={likes}
          productReviewInfo={
            productReviewInfo || { productId, avg: '', totalCount: 0 }
          }
        />
        {productOptionItems.length > 0 && (
          <ProductOptions
            productItems={productOptionItems}
            handleOptionChange={handleOptionsChange}
            maxPurchaseQuantity={maxPurchaseQuantity}
          />
        )}

        <ProductPrice
          originalPrice={totalOriginalPrice}
          finalPrice={finalPrice}
          discountRate={discountRate}
        />
        <ProductActions
          productItemId={
            selectedOptions.length > 0 ? selectedOptions[0].productItemId : 0
          }
          quantity={1}
          disabled={selectedOptions.length === 0}
          productId={productId}
          selectedOptions={selectedOptions}
          selectedQuantities={selectedQuantities}
        />
      </div>
    </section>
  );
};

export default ProductDetailItem;
