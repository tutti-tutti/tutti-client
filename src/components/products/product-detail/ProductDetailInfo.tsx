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
      label1: '스토어명',
      value1: storeName,
      label2: '상품상태',
      value2: '신상품',
    },
    {
      label1: '성인인증',
      value1: adultOnly ? '필요' : '불필요',
      label2: '모델명',
      value2: name,
    },
    {
      label1: '이벤트',
      value1: '정상배송',
      label2: '사은품',
      value2: '상세페이지참조',
    },
    {
      label1: '옵션종류',
      value1: `${productOptionItems.length}종류`,
      label2: '출시년일',
      value2: formatDateWithKorean(createdAt),
    },
  ];

  const flattenedRows = tableRows.flatMap(row => [
    { label: row.label1, value: row.value1 },
    { label: row.label2, value: row.value2 },
  ]);

  return (
    <div className="gap-md md:gap-4xl flex w-full flex-col">
      <table className="border-border-secondary w-full border-collapse border-y">
        <tbody>
          {tableRows.map((row, index) => (
            <tr key={index} className="hidden md:table-row">
              <td className="border-border-secondary text-text-primary bg-bg-secondary px-md py-sm w-1/6 border-y">
                {row.label1}
              </td>
              <td className="border-border-secondary text-text-secondary px-md py-sm w-1/3 border-y">
                {row.value1}
              </td>
              <td className="border-border-secondary text-text-primary bg-bg-secondary px-md py-sm w-1/6 border-y">
                {row.label2}
              </td>
              <td className="border-border-secondary text-text-secondary px-md py-sm w-1/3 border-y">
                {row.value2 instanceof Date
                  ? row.value2.toLocaleDateString('ko-KR')
                  : row.value2}
              </td>
            </tr>
          ))}

          {flattenedRows.map((item, index) => (
            <tr key={`mobile-${index}`} className="md:hidden">
              <td className="border-border-secondary text-text-primary bg-bg-secondary px-md py-sm w-1/3 border-y">
                {item.label}
              </td>
              <td className="border-border-secondary text-text-secondary px-md py-sm w-2/3 border-y">
                {item.value instanceof Date
                  ? item.value.toLocaleDateString('ko-KR')
                  : item.value}
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
