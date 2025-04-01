interface CartPaymentInfoProps {
  totalPrice: number;
  discountPrice: number;
  additionalPrice?: number;
  deliveryPrice: number;
  finalPrice?: number;
}

const CartPaymentInfo = ({
  totalPrice,
  discountPrice,
  additionalPrice = 0,
  deliveryPrice,
  finalPrice,
}: CartPaymentInfoProps) => {
  const calculatedFinalPrice =
    finalPrice ?? totalPrice - discountPrice + deliveryPrice;

  return (
    <div className="border-border-secondary p-md md:p-xl rounded-2xl border">
      <h2 className="px-xs py-sm font-style-heading border-border-secondary mb-lg border-b">
        최종 결제금액
      </h2>

      <div className="p-xs flex items-center justify-between">
        <span className="text-text-secondary font-style-paragraph">
          총 주문금액
        </span>
        <span className="text-text-primary font-style-paragraph">
          {totalPrice.toLocaleString()}원
        </span>
      </div>

      {discountPrice > 0 && (
        <div className="p-xs flex items-center justify-between">
          <span className="text-text-secondary font-style-paragraph">
            할인금액
          </span>
          <span className="text-text-danger font-style-paragraph">
            {discountPrice.toLocaleString()}원
          </span>
        </div>
      )}

      {additionalPrice > 0 && (
        <div className="p-xs flex items-center justify-between">
          <span className="text-text-secondary font-style-paragraph">
            추가금액
          </span>
          <span className="text-text-info font-style-paragraph">
            {additionalPrice.toLocaleString()}원
          </span>
        </div>
      )}

      <div className="p-xs pb-md flex items-center justify-between">
        <span className="text-text-secondary font-style-paragraph">배송비</span>
        <span className="text-text-primary font-style-paragraph">
          {deliveryPrice.toLocaleString()}원
        </span>
      </div>

      <div className="border-border-secondary px-xs py-lg flex items-center justify-between border-t">
        <span className="text-text-info font-style-subHeading">
          총 결제 예정금액
        </span>
        <span className="text-text-primaryInteraction font-style-subHeading">
          {calculatedFinalPrice.toLocaleString()}원
        </span>
      </div>
    </div>
  );
};

export default CartPaymentInfo;
