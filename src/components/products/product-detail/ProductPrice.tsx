import { PRODUCTS_CONSTANTS } from '@/constants';

interface ProductPriceProps {
  originalPrice: number;
  finalPrice: number;
  quantity: number;
  discountRate: string | null;
}

const ProductPrice = ({
  originalPrice,
  finalPrice,
  quantity,
  discountRate,
}: ProductPriceProps) => {
  return (
    <article className="pb-md md:pb-lg">
      {originalPrice !== finalPrice ? (
        <>
          <p className="text-text-tertiaryInfo font-style-heading line-through">
            {(originalPrice * quantity).toLocaleString()}
          </p>
          <div className="mt-2xs flex items-center gap-2">
            <p className="text-text-danger font-style-title">{discountRate}</p>
            <p className="text-text-primary font-style-title">
              {PRODUCTS_CONSTANTS.KOREAN_CURRENCY(finalPrice * quantity)}
            </p>
          </div>
        </>
      ) : (
        <p className="text-text-primary font-style-title">
          {PRODUCTS_CONSTANTS.KOREAN_CURRENCY(finalPrice * quantity)}
        </p>
      )}
    </article>
  );
};

export default ProductPrice;
