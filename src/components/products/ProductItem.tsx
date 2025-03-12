import Link from 'next/link';

import { calculateDiscountRate } from '@/utils';
import type { Product } from '@/types';
import ProductThumbnail from './ProductThumbnail';

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
  const discountRate = calculateDiscountRate(originalPrice, sellingPrice);

  return (
    <li>
      <Link href={`/products/${productId}`}>
        <ProductThumbnail
          imageUrl={titleUrl}
          name={name}
          height="h-[360px]"
          width="w-full"
          isDim
        />
      </Link>

      <p className="text-text-secondary mt-xs mb-2xs font-style-info">
        <Link href="#">{storeName}</Link>
      </p>

      <Link href={`/products/${productId}`}>
        <h2 className="mb-xs font-style-subHeading line-clamp-2 w-full text-ellipsis">
          {name}
        </h2>

        <div className="gap-xs mb-xs flex items-center">
          {freeDelivery && (
            <div className="bg-bg-successSubtle px-xs rounded-sm">
              <p className="text-text-success font-style-info">무료배송</p>
            </div>
          )}

          {almostOutOfStock && (
            <div className="bg-bg-infoSubtle px-xs rounded-sm">
              <p className="text-text-info font-style-info">품절임박</p>
            </div>
          )}
        </div>

        {originalPrice !== sellingPrice ? (
          <>
            <span className="text-text-tertiaryInfo mr-xs text-xs line-through">
              {originalPrice.toLocaleString()}
            </span>
            <div className="gap-2xs flex items-center">
              <p className="text-text-danger font-style-heading">
                {discountRate}
              </p>
              <p className="text-text-primary font-style-heading">
                {sellingPrice.toLocaleString()}원
              </p>
            </div>
          </>
        ) : (
          <p className="text-text-primary font-style-heading">
            {originalPrice.toLocaleString()}원
          </p>
        )}
      </Link>
    </li>
  );
};

export default ProductItem;
