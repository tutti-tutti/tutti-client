import { CHECKOUT_CONSTANT } from '@/constants';
import { formatPrice, cn } from '@/utils';

interface PaymentSummaryProps {
  totalProductAmount: number;
  totalDiscountAmount: number;
  deliveryFee: number;
  totalAmount: number;
}

const {
  TOTAL_PRODUCT_AMOUNT,
  DISCOUNT_AMOUNT,
  DELIVERY_FEE,
  TOTAL_PAYMENT_AMOUNT,
} = CHECKOUT_CONSTANT.PAYMENT_SUMMARY;

const FIELD_STYLES = 'h-[24px] md:h-[32px] font-normal text-left';
const FIELD_NAME_STYLES = `${FIELD_STYLES} w-[200px]`;
const FIELD_VALUE_STYLES = `${FIELD_STYLES}`;

const PaymentSummary = ({
  totalProductAmount,
  totalDiscountAmount,
  deliveryFee,
  totalAmount,
}: PaymentSummaryProps) => {
  return (
    <div className="py-lg border-border-primary border-y">
      <table className="w-full">
        <tbody>
          <tr>
            <th className={FIELD_NAME_STYLES}>{TOTAL_PRODUCT_AMOUNT}</th>
            <td className={FIELD_VALUE_STYLES}>
              {formatPrice(totalProductAmount)}
            </td>
          </tr>
          <tr>
            <th className={FIELD_NAME_STYLES}>{DISCOUNT_AMOUNT}</th>
            <td className={cn(FIELD_VALUE_STYLES, 'text-text-danger')}>
              -{formatPrice(totalDiscountAmount)}
            </td>
          </tr>
          <tr>
            <th className={FIELD_NAME_STYLES}>{DELIVERY_FEE}</th>
            <td className={FIELD_VALUE_STYLES}>{formatPrice(deliveryFee)}</td>
          </tr>
          <tr className="font-semibold md:text-[24px]">
            <th className={cn(FIELD_NAME_STYLES, 'pt-lg')}>
              {TOTAL_PAYMENT_AMOUNT}
            </th>
            <td className={cn(FIELD_VALUE_STYLES, 'pt-lg')}>
              {formatPrice(totalAmount)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentSummary;
