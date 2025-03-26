'use client';

import { useQuery } from '@tanstack/react-query';

import { productByIdQueryOptions } from '@/queries';
import { Product } from '@/types';
import ProductDetailItem from './ProductDetailItem';

interface ClientProductDetailProps {
  initialProduct: Product;
  productId: string;
}

const ClientProductDetail = ({
  initialProduct,
  productId,
}: ClientProductDetailProps) => {
  const { data: product } = useQuery({
    ...productByIdQueryOptions(productId),
    initialData: initialProduct,
  });

  if (!product) return null;

  return <ProductDetailItem {...product} />;
};

export default ClientProductDetail;
