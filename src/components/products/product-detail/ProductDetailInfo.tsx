import Image from 'next/image';

import { formatDateWithKorean } from '@/utils';
import type { Product } from '@/types';
import { PRODUCTS_CONSTANTS } from '@/constants';

interface ProductInfoTableProps {
  initialProduct: Product;
}

const {
  STORE_NAME,
  PRODUCT_STATUS,
  PRODUCT_STATUS_NEW,
  ADULT_ONLY,
  ADULT_ONLY_NOT_NEED,
  ADULT_ONLY_NEED,
  MODEL_NAME,
  EVENT,
  ORIGINAL_DELIVERY,
  FREE_GIFT,
  DETAIL_PAGE_REFERENCE,
  OPTION_TYPE,
  OPTION_TYPE_COUNT,
  RELEASE_DATE,
} = PRODUCTS_CONSTANTS;

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
      firstLabel: `${STORE_NAME}`,
      firstValue: storeName,
      secondLabel: `${PRODUCT_STATUS}`,
      secondValue: `${PRODUCT_STATUS_NEW}`,
    },
    {
      firstLabel: `${ADULT_ONLY}`,
      firstValue: adultOnly ? `${ADULT_ONLY_NEED}` : `${ADULT_ONLY_NOT_NEED}`,
      secondLabel: `${MODEL_NAME}`,
      secondValue: name,
    },
    {
      firstLabel: `${EVENT}`,
      firstValue: `${ORIGINAL_DELIVERY}`,
      secondLabel: `${FREE_GIFT}`,
      secondValue: `${DETAIL_PAGE_REFERENCE}`,
    },
    {
      firstLabel: `${OPTION_TYPE}`,
      firstValue: `${OPTION_TYPE_COUNT(productOptionItems.length)}`,
      secondLabel: `${RELEASE_DATE}`,
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
