import { CART_CONSTANTS } from '@/constants';
import { formatPrice } from '@/utils';

interface CartPaymentInfoProps {
  totalPrice: number;
  discountPrice: number;
  additionalPrice?: number;
  deliveryPrice: number;
  finalPrice?: number;
}

const {
  FINAL_PAYMENT,
  TOTAL_PAYMENT,
  DISCOUNT_PRICE,
  ADDITIONAL_PRICE,
  DELIVERY_PRICE,
  TOTAL_PRICE,
} = CART_CONSTANTS;

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
        {FINAL_PAYMENT}
      </h2>

      <div className="p-xs flex items-center justify-between">
        <span className="text-text-secondary font-style-paragraph">
          {TOTAL_PRICE}
        </span>
        <span className="text-text-primary font-style-paragraph">
          {formatPrice(totalPrice)}
        </span>
      </div>

      {discountPrice > 0 && (
        <div className="p-xs flex items-center justify-between">
          <span className="text-text-secondary font-style-paragraph">
            {DISCOUNT_PRICE}
          </span>
          <span className="text-text-danger font-style-paragraph">
            {formatPrice(discountPrice)}
          </span>
        </div>
      )}

      {additionalPrice > 0 && (
        <div className="p-xs flex items-center justify-between">
          <span className="text-text-secondary font-style-paragraph">
            {ADDITIONAL_PRICE}
          </span>
          <span className="text-text-info font-style-paragraph">
            {formatPrice(additionalPrice)}
          </span>
        </div>
      )}

      <div className="p-xs pb-md flex items-center justify-between">
        <span className="text-text-secondary font-style-paragraph">
          {DELIVERY_PRICE}
        </span>
        <span className="text-text-primary font-style-paragraph">
          {formatPrice(deliveryPrice)}
        </span>
      </div>

      <div className="border-border-secondary px-xs py-lg flex items-center justify-between border-t">
        <span className="text-text-info font-style-subHeading">
          {TOTAL_PAYMENT}
        </span>
        <span className="text-text-primaryInteraction font-style-subHeading">
          {formatPrice(calculatedFinalPrice)}
        </span>
      </div>
    </div>
  );
};

export default CartPaymentInfo;
