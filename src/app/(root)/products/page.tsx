import {
  ProductCategory,
  CategoryProductList,
  RecommendProductList,
} from '@/components';
import { fetchCategories } from '@/services';
import type { CategoryResponseAPISchema } from '@/types';

type SearchParamsProps = {
  searchParams: Promise<{
    category?: string;
  }>;
};

const ProductPage = async ({ searchParams }: SearchParamsProps) => {
  const categoryId = (await searchParams).category || '1';

  const categories = await fetchCategories();
  const selectedCategory = categories
    .filter(
      (category: CategoryResponseAPISchema) => category.parentCategory === null,
    )
    .find(
      (category: CategoryResponseAPISchema) =>
        String(category.id) === categoryId,
    );

  const categoryName = selectedCategory.name;

  return (
    <>
      <div className="gap-md md:gap-4xl flex flex-col">
        <ProductCategory
          initialCategories={categories}
          currentCategoryId={categoryId}
        />
        <RecommendProductList categoryName={categoryName} />
        <CategoryProductList categoryId={categoryId} />
      </div>
    </>
  );
};

export default ProductPage;
