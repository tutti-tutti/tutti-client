'use client';

import { useState, useMemo, useCallback } from 'react';

import { calculateDiscountRate } from '@/utils';
import type { Product, ProductOption, SelectedOptionItem } from '@/types';
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
  const [selectedOptionItems, setSelectedOptionItems] = useState<
    SelectedOptionItem[]
  >([]);

  const finalPrice = useMemo(() => {
    if (selectedOptionItems.length === 0) return originalPrice;

    return selectedOptionItems.reduce((total, item) => {
      return total + item.option.sellingPrice * item.quantity;
    }, 0);
  }, [selectedOptionItems, originalPrice]);

  const totalOriginalPrice = useMemo(() => {
    if (selectedOptionItems.length === 0) return originalPrice;

    return selectedOptionItems.reduce((total, item) => {
      return (
        total +
        (originalPrice + (item.option.additionalPrice || 0)) * item.quantity
      );
    }, 0);
  }, [selectedOptionItems, originalPrice]);

  const discountRate = useMemo(() => {
    if (selectedOptionItems.length === 0) return '0%';
    return calculateDiscountRate(totalOriginalPrice, finalPrice);
  }, [totalOriginalPrice, finalPrice, selectedOptionItems.length]);

  const handleOptionsChange = useCallback(
    (options: ProductOption[], quantities: number[]) => {
      const newSelectedOptionItems = options.map((option, index) => ({
        option,
        quantity: quantities[index] || 1,
      }));

      setSelectedOptionItems(newSelectedOptionItems);
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
            selectedOptionItems.length > 0
              ? selectedOptionItems[0].option.productItemId
              : 0
          }
          quantity={1}
          disabled={selectedOptionItems.length === 0}
          productId={productId}
          selectedOptionItems={selectedOptionItems}
        />
      </div>
    </section>
  );
};

export default ProductDetailItem;
