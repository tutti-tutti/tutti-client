import { Suspense } from 'react';

import ProductListSkeleton from './skeleton/ProductListSkeleton';
import { fetchProducts } from '@/services';
import ClientProductList from './ClientProductList';

const ProductList = async () => {
  const initialProducts = await fetchProducts();

  return (
    <Suspense fallback={<ProductListSkeleton />}>
      <ClientProductList initialProducts={initialProducts} />
    </Suspense>
  );
};

export default ProductList;
