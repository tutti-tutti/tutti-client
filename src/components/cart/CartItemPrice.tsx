interface CartItemPriceProps {
  originalPrice: number;
  sellingPrice: number;
  productQuantity: number;
  discountRate: string;
}

const CartItemPrice = ({
  originalPrice,
  sellingPrice,
  productQuantity,
  discountRate,
}: CartItemPriceProps) => {
  const totalPrice = sellingPrice * productQuantity;

  if (originalPrice !== sellingPrice) {
    return (
      <>
        <span className="font-style-info text-text-tertiaryInfo line-through">
          {(originalPrice * productQuantity).toLocaleString()}
        </span>
        <div className="gap-2xs flex items-center">
          <span className="font-style-heading text-text-danger">
            {discountRate}
          </span>
          <span className="font-style-heading text-text-primary">
            {totalPrice.toLocaleString()}원
          </span>
        </div>
      </>
    );
  }

  return (
    <p className="font-style-heading text-text-primary">
      {totalPrice.toLocaleString()}원
    </p>
  );
};

export default CartItemPrice;
