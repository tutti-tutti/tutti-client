'use client';

import { useQuery } from '@tanstack/react-query';

import { productByIdQueryOptions } from '@/queries';
import type { Product, ProductReviewInfo } from '@/types';
import ProductDetailItem from './ProductDetailItem';

interface ClientProductDetailProps {
  initialProduct: Product;
  productId: string;
  productReviewInfo: ProductReviewInfo;
}

const ClientProductDetail = ({
  initialProduct,
  productId,
  productReviewInfo,
}: ClientProductDetailProps) => {
  const { data: product } = useQuery({
    ...productByIdQueryOptions(productId),
    initialData: initialProduct,
  });

  if (!product) return null;

  return (
    <ProductDetailItem {...product} productReviewInfo={productReviewInfo} />
  );
};

export default ClientProductDetail;
