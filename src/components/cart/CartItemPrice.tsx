import { cn } from '@/utils';

interface CartItemPriceProps {
  originalPrice: number;
  sellingPrice: number;
  productQuantity: number;
  discountRate: string | null;
}

const CartItemPrice = ({
  originalPrice,
  sellingPrice,
  productQuantity,
  discountRate,
}: CartItemPriceProps) => {
  const totalPrice = sellingPrice * productQuantity;
  {
    return (
      <>
        <span className="font-style-info text-text-tertiaryInfo line-through">
          {(originalPrice * productQuantity).toLocaleString()}
        </span>
        <div className={cn('flex items-center', discountRate && 'gap-2xs')}>
          {discountRate && (
            <span className="font-style-heading text-text-danger">
              {discountRate}
            </span>
          )}
          <span className="font-style-heading text-text-primary">
            {totalPrice.toLocaleString()}원
          </span>
        </div>
      </>
    );
  }
};

export default CartItemPrice;
