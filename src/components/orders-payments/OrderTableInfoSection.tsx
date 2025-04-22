import { formatPrice, cn, formatDateWithKorean } from '@/utils';
import { OrderDetailResponseAPISchema } from '@/types';

type OrderTableInfoProps = OrderDetailResponseAPISchema & { className: string };

const OrderTableInfoSection = async ({
  className,
  paidAt,
  paymentType,
  totalProductAmount,
  totalDiscountAmount,
  deliveryFee,
  totalAmount,
  recipientName,
  recipientPhone,
  recipientAddress,
  recipientAddressDetail,
  zipCode,
  note,
}: OrderTableInfoProps) => {
  const tableItems = [
    {
      caption: '받는 사람 정보',
      fields: [
        {
          fieldName: '받는 사람',
          fieldValue: recipientName,
        },
        {
          fieldName: '연락처',
          fieldValue: recipientPhone,
        },
        {
          fieldName: '받는 주소',
          fieldValue: `(${zipCode}) ${recipientAddress} ${recipientAddressDetail}`,
        },
        {
          fieldName: '배송 요청 사항',
          fieldValue: note,
        },
      ],
    },
    {
      caption: '결제 정보',
      fields: [
        {
          fieldName: '결제 완료일',
          fieldValue: formatDateWithKorean(paidAt),
        },
        {
          fieldName: '결제 수단',
          fieldValue: paymentType,
        },
        {
          fieldName: '총 상품가격',
          fieldValue: formatPrice(totalProductAmount),
        },
        {
          fieldName: '할인 금액',
          fieldValue: formatPrice(totalDiscountAmount),
        },
        {
          fieldName: '배송비',
          fieldValue: formatPrice(deliveryFee),
        },
        {
          fieldName: '총 결제가격',
          fieldValue: formatPrice(totalAmount),
          className: 'font-style-subHeading',
        },
      ],
    },
  ];

  return tableItems.map(({ caption, fields }, index) => (
    <section key={`${caption}-${index}`} className={cn('py-lg', className)}>
      <h3 className="text-text-primary py-md font-style-subHeading text-left">
        {caption}
      </h3>
      <table className="border-border-primary w-full border-t-1 border-b-1 text-left">
        <tbody className="py-lg">
          {fields.map(({ fieldName, fieldValue, className }, index) => (
            <tr key={`${fieldName}-${index}`} className="first:py-lg">
              <th
                className={cn(
                  'py-sm h-[32px] w-[200px] font-normal',
                  className,
                )}
              >
                {fieldName}
              </th>
              <td className={cn('py-sm h-[32px]', className)}>{fieldValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  ));
};

export default OrderTableInfoSection;
