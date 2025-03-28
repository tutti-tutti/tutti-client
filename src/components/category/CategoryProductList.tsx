import { fetchCategoriesById } from '@/services';
import ClientCategoryProductList from './ClientCategoryProductList';

const CategoryProductList = async ({ categoryId }: { categoryId?: string }) => {
  const id = categoryId || '1';

  const initialProducts = await fetchCategoriesById(id);

  return (
    <ClientCategoryProductList
      initialProducts={initialProducts}
      categoryId={id}
    />
  );
};

export default CategoryProductList;
