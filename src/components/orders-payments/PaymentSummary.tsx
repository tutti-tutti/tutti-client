import { formatPrice, cn } from '@/utils';

interface PaymentSummaryProps {
  totalProductAmount: number;
  totalDiscountAmount: number;
  deliveryFee: number;
  totalAmount: number;
}

const PaymentSummary = ({
  totalProductAmount,
  totalDiscountAmount,
  deliveryFee,
  totalAmount,
}: PaymentSummaryProps) => {
  const fieldStyles = 'h-[24px] md:h-[32px] font-normal text-left';
  const fieldNameStyles = `${fieldStyles} w-[200px]`;
  const fieldValueStyles = `${fieldStyles}`;

  return (
    <div className="py-lg border-border-primary border-y">
      <table className="w-full">
        <tbody>
          <tr>
            <th className={fieldNameStyles}>총 상품가격</th>
            <td className={fieldValueStyles}>
              {formatPrice(totalProductAmount)}
            </td>
          </tr>
          <tr>
            <th className={fieldNameStyles}>할인 금액</th>
            <td className={cn(fieldValueStyles, 'text-text-danger')}>
              -{formatPrice(totalDiscountAmount)}
            </td>
          </tr>
          <tr>
            <th className={fieldNameStyles}>배송비</th>
            <td className={fieldValueStyles}>{formatPrice(deliveryFee)}</td>
          </tr>
          <tr className="font-semibold md:text-[24px]">
            <th className={cn(fieldNameStyles, 'pt-lg')}>총 결제 금액</th>
            <td className={cn(fieldValueStyles, 'pt-lg')}>
              {formatPrice(totalAmount)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PaymentSummary;
