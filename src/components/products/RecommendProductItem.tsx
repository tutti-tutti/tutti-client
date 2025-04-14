import Link from 'next/link';

import { ROUTER_PATH } from '@/constants';
import { calculateDiscountRate, formatPrice } from '@/utils';
import type { Product } from '@/types';
import ProductThumbnail from './ProductThumbnail';

const RecommendProductItem = ({
  name,
  productId,
  titleUrl,
  originalPrice,
  sellingPrice,
}: Product) => {
  const discountRate =
    originalPrice && sellingPrice
      ? calculateDiscountRate(originalPrice, sellingPrice)
      : 0;

  return (
    <li className="px-xs">
      <Link href={ROUTER_PATH.PRODUCT_DETAIL(productId)}>
        <ProductThumbnail
          imageUrl={titleUrl || 'null'}
          name={name}
          height="h-auto"
          width="w-full"
          isDim
          className="aspect-square"
        />

        <h2 className="mt-xs mb-sm font-style-info line-clamp-2 w-full text-ellipsis">
          {name}
        </h2>

        {sellingPrice && originalPrice > sellingPrice ? (
          <>
            <span className="text-text-tertiaryInfo mr-xs font-style-info line-through">
              {originalPrice.toLocaleString()}
            </span>
            <div className="gap-2xs flex items-center">
              <p className="text-text-danger font-style-subHeading">
                {discountRate}
              </p>
              <p className="text-text-primary font-style-subHeading">
                {formatPrice(sellingPrice)}
              </p>
            </div>
          </>
        ) : (
          <p className="text-text-primary font-style-subHeading">
            {formatPrice(originalPrice)}
          </p>
        )}
      </Link>
    </li>
  );
};

export default RecommendProductItem;
