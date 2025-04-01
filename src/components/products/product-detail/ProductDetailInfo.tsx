import Image from 'next/image';

import { formatDateWithKorean } from '@/utils';
import type { Product } from '@/types';

interface ProductInfoTableProps {
  initialProduct: Product;
}

const ProductDetailInfo = ({ initialProduct }: ProductInfoTableProps) => {
  const {
    storeName,
    name,
    adultOnly,
    createdAt,
    productOptionItems,
    titleUrl,
  } = initialProduct;

  const tableRows = [
    {
      firstLabel: '스토어명',
      firstValue: storeName,
      secondLabel: '상품상태',
      secondValue: '신상품',
    },
    {
      firstLabel: '성인인증',
      firstValue: adultOnly ? '필요' : '불필요',
      secondLabel: '모델명',
      secondValue: name,
    },
    {
      firstLabel: '이벤트',
      firstValue: '정상배송',
      secondLabel: '사은품',
      secondValue: '상세페이지참조',
    },
    {
      firstLabel: '옵션종류',
      firstValue: `${productOptionItems.length}종류`,
      secondLabel: '출시년일',
      secondValue: formatDateWithKorean(createdAt),
    },
  ];

  const flattenedRows = tableRows.flatMap(row => [
    { label: row.firstLabel, value: row.firstValue },
    { label: row.secondLabel, value: row.secondValue },
  ]);

  return (
    <div className="gap-md md:gap-4xl flex w-full flex-col">
      <table className="border-border-secondary w-full border-collapse border-y">
        <tbody>
          {tableRows.map((row, index) => (
            <tr key={index} className="hidden md:table-row">
              <td className="border-border-secondary text-text-primary bg-bg-secondary px-md py-sm w-1/6 border-y">
                {row.firstLabel}
              </td>
              <td className="border-border-secondary text-text-secondary px-md py-sm w-1/3 border-y">
                {row.firstValue}
              </td>
              <td className="border-border-secondary text-text-primary bg-bg-secondary px-md py-sm w-1/6 border-y">
                {row.secondLabel}
              </td>
              <td className="border-border-secondary text-text-secondary px-md py-sm w-1/3 border-y">
                {row.secondValue}
              </td>
            </tr>
          ))}

          {flattenedRows.map((item, index) => (
            <tr key={`mobile-${index}`} className="md:hidden">
              <td className="border-border-secondary text-text-primary bg-bg-secondary px-md py-sm w-1/3 border-y">
                {item.label}
              </td>
              <td className="border-border-secondary text-text-secondary px-md py-sm w-2/3 border-y">
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <figure className="flex justify-center">
        <Image
          src={titleUrl}
          alt={name}
          width={630}
          height={630}
          className="aspect-square object-cover"
        />
      </figure>
    </div>
  );
};

export default ProductDetailInfo;
