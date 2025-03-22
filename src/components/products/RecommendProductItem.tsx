import Link from 'next/link';

import { calculateDiscountRate } from '@/utils';
import type { Product } from '@/types';
import ProductThumbnail from './ProductThumbnail';

const RecommendProductItem = ({
  name,
  productId,
  titleUrl,
  originalPrice,
  sellingPrice,
}: Product) => {
  const discountRate = calculateDiscountRate(originalPrice, sellingPrice);

  return (
    <li className="px-xs">
      <Link href={`/products/${productId}`}>
        <ProductThumbnail
          imageUrl={titleUrl || 'null'}
          name={name}
          height="sm:h-[200px] h-auto"
          width="w-full"
          isDim
          className="aspect-square"
        />

        <h2 className="mt-xs mb-sm font-style-info line-clamp-2 w-full text-ellipsis">
          {name}
        </h2>

        {originalPrice !== sellingPrice ? (
          <>
            <span className="text-text-tertiaryInfo mr-xs font-style-info line-through">
              {originalPrice.toLocaleString()}
            </span>
            <div className="gap-2xs flex items-center">
              <p className="text-text-danger font-style-subHeading">
                {discountRate}
              </p>
              <p className="text-text-primary font-style-subHeading">
                {sellingPrice.toLocaleString()}원
              </p>
            </div>
          </>
        ) : (
          <p className="text-text-primary font-style-subHeading">
            {originalPrice.toLocaleString()}원
          </p>
        )}
      </Link>
    </li>
  );
};

export default RecommendProductItem;
