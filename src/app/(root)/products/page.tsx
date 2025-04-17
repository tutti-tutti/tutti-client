import {
  ProductCategory,
  CategoryProductList,
  RecommendProductList,
  SearchResultList,
} from '@/components';
import { PRODUCTS_CONSTANTS } from '@/constants';
import { fetchCategories } from '@/services';
import type { CategoryResponseAPISchema } from '@/types';

type SearchParamsProps = {
  searchParams: Promise<{
    category?: string;
    'search-word'?: string;
  }>;
};

const CONATINER_CLASSNAME = 'gap-md md:gap-4xl flex flex-col';

const ProductPage = async ({ searchParams }: SearchParamsProps) => {
  const params = await searchParams;
  const categoryId = params.category || '1';
  const searchWord = params['search-word'] || '';

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
      {searchWord ? (
        <div className={CONATINER_CLASSNAME}>
          <h1 className="font-style-title text-center">
            {PRODUCTS_CONSTANTS.SEARCH_RESULT(searchWord)}
          </h1>

          <ProductCategory />
          <RecommendProductList />
          <SearchResultList searchWord={searchWord} />
        </div>
      ) : (
        <div className={CONATINER_CLASSNAME}>
          <ProductCategory
            initialCategories={categories}
            currentCategoryId={categoryId}
          />
          <RecommendProductList categoryName={categoryName} />
          <CategoryProductList categoryId={categoryId} />
        </div>
      )}
    </>
  );
};

export default ProductPage;
