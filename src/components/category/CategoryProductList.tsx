import { Suspense } from 'react';

import { fetchCategoriesById } from '@/services';
import { ProductListSkeleton } from '../products';
import ClientCategoryProductList from './ClientCategoryProductList';

const CategoryProductList = async ({ categoryId }: { categoryId?: string }) => {
  const id = categoryId || '1';

  const initialProducts = await fetchCategoriesById(id);

  return (
    <Suspense fallback={<ProductListSkeleton />}>
      <ClientCategoryProductList
        initialProducts={initialProducts}
        categoryId={id}
      />
    </Suspense>
  );
};

export default CategoryProductList;
