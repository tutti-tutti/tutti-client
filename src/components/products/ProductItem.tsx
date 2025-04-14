'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { calculateDiscountRate, formatPrice } from '@/utils';
import { PRODUCTS_CONSTANTS, PRODUCTS_ENDPOINTS } from '@/constants';
import type { Product, ProductReviewInfo } from '@/types';
import ProductThumbnail from './ProductThumbnail';
import { Icon } from '../common';

const { FREE_DELIVERY, ALMOST_OUT_OF_STOCK } = PRODUCTS_CONSTANTS;

const ProductItem = ({
  name,
  productId,
  storeName,
  titleUrl,
  originalPrice,
  sellingPrice,
  freeDelivery,
  almostOutOfStock,
  reviewInfo,
}: Product & { reviewInfo: ProductReviewInfo }) => {
  const router = useRouter();

  const discountRate =
    originalPrice && sellingPrice
      ? calculateDiscountRate(originalPrice, sellingPrice)
      : 0;

  const handleReviewClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(PRODUCTS_ENDPOINTS.DETAIL_REVIEWS(String(productId)));
  };

  return (
    <li className="gap-sm flex w-full flex-row md:flex-col md:gap-0">
      <section className="w-5/12 md:w-full">
        <Link href={`/products/${productId}`}>
          <ProductThumbnail
            imageUrl={titleUrl}
            name={name}
            height="h-auto"
            width="w-full"
            isDim
            className="aspect-square"
          />
        </Link>
      </section>

      <section className="w-7/12 md:w-full">
        <div className="md:mt-xs mt-0 flex items-center justify-between">
          <p className="text-text-secondary font-style-info">
            <Link href="#">{storeName}</Link>
          </p>

          <div
            className="font-style-paragraph group hover:text-text-selected flex cursor-pointer items-center"
            onClick={handleReviewClick}
          >
            <Icon iconName="starFill" />
            <div className="text-text-primary group-hover:text-text-selected">
              {reviewInfo.avg}
            </div>
            <div className="text-text-secondary group-hover:text-text-selected ml-1">
              ({reviewInfo.totalCount})
            </div>
          </div>
        </div>

        <Link href={`/products/${productId}`}>
          <h2 className="font-style-subHeading line-clamp-2 w-full text-ellipsis">
            {name}
          </h2>

          <div className="gap-xs flex items-center">
            {freeDelivery && (
              <div className="bg-bg-successSubtle px-xs rounded-sm">
                <p className="text-text-success font-style-info">
                  {FREE_DELIVERY}
                </p>
              </div>
            )}

            {almostOutOfStock && (
              <div className="bg-bg-infoSubtle px-xs rounded-sm">
                <p className="text-text-info font-style-info">
                  {ALMOST_OUT_OF_STOCK}
                </p>
              </div>
            )}
          </div>

          {sellingPrice && originalPrice > sellingPrice ? (
            <>
              <span className="text-text-tertiaryInfo font-style-info line-through">
                {originalPrice.toLocaleString()}
              </span>
              <div className="gap-2xs flex items-center">
                <p className="text-text-danger font-style-heading">
                  {discountRate}
                </p>
                <p className="text-text-primary font-style-heading">
                  {formatPrice(sellingPrice)}
                </p>
              </div>
            </>
          ) : (
            <p className="text-text-primary font-style-heading">
              {formatPrice(sellingPrice ?? 0)}
            </p>
          )}
        </Link>
      </section>
    </li>
  );
};

export default ProductItem;
