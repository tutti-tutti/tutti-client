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
    <div className="flex w-full justify-center">
      <div className="scrollbar-hide overflow-x-auto">
        <div className="gap-2xl border-border-secondary flex min-w-fit border-b whitespace-nowrap">
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
      </div>
    </div>
  );
};

export default CategoryFilter;
