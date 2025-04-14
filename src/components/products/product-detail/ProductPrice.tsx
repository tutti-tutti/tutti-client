import { formatPrice } from '@/utils';

interface ProductPriceProps {
  originalPrice: number;
  finalPrice: number;
  discountRate: string | null;
}

const ProductPrice = ({
  originalPrice,
  finalPrice,
  discountRate,
}: ProductPriceProps) => {
  return (
    <article className="pb-md md:pb-lg">
      {originalPrice !== finalPrice ? (
        <div className="gap-md flex items-center">
          <div className="mt-2xs flex items-center gap-2">
            <p className="text-text-danger font-style-title">{discountRate}</p>
            <p className="text-text-primary font-style-title">
              {formatPrice(finalPrice)}
            </p>
          </div>

          <p className="text-text-tertiaryInfo font-style-heading line-through">
            {originalPrice.toLocaleString()}
          </p>
        </div>
      ) : (
        <p className="text-text-primary font-style-title">
          {formatPrice(finalPrice)}
        </p>
      )}
    </article>
  );
};

export default ProductPrice;
