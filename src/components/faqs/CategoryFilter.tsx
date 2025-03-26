import { fetchMainCategories } from '@/services';
import CategoryFilterItems from './CategoryFilterItem';
import { FAQS_ENDPOINTS } from '@/constants';

const CategoryFilter = async ({
  categorySearchParams,
}: {
  categorySearchParams?: string;
}) => {
  const categories = await fetchMainCategories();

  return (
    <div className="gap-3xl border-border-secondary -bott relative box-border flex justify-center border-b">
      <CategoryFilterItems
        isTop
        isSelected={!categorySearchParams}
        href={FAQS_ENDPOINTS.BASE}
      >
        인기
      </CategoryFilterItems>
      {categories.map((category: string, index: number) => {
        const encodedCategory = encodeURIComponent(category);

        return (
          <CategoryFilterItems
            key={index}
            isSelected={categorySearchParams === category}
            href={`?category=${encodedCategory}`}
          >
            {category}
          </CategoryFilterItems>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
