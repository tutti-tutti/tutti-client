import Link from 'next/link';

import { calculateDiscountRate, formatPrice } from '@/utils';
import { PRODUCTS_CONSTANTS } from '@/constants';
import type { Product } from '@/types';
import ProductThumbnail from './ProductThumbnail';

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
}: Product) => {
  const discountRate =
    originalPrice && sellingPrice
      ? calculateDiscountRate(originalPrice, sellingPrice)
      : 0;

  return (
    <li className="gap-sm flex w-full flex-row md:flex-col md:gap-0">
      <figure className="w-5/12 md:w-full">
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
      </figure>

      <div className="w-7/12 md:w-full">
        <p className="text-text-secondary md:mt-xs mb-2xs font-style-info">
          <Link href="#">{storeName}</Link>
        </p>

        <Link href={`/products/${productId}`}>
          <h2 className="mb-xs font-style-subHeading line-clamp-2 w-full text-ellipsis">
            {name}
          </h2>

          <div className="gap-xs md:mb-xs flex items-center">
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
      </div>
    </li>
  );
};

export default ProductItem;
