import { fetchSubCategories } from '@/services';
import SubCategoryFilterItem from './SubCategoryFilterItem';

interface SubCategoryFilterProps {
  categorySearchParams?: string;
  subSearchParams?: string;
}

const SubCategoryFilter = async ({
  categorySearchParams,
  subSearchParams,
}: SubCategoryFilterProps) => {
  const subCategories = await fetchSubCategories(categorySearchParams || '');

  return (
    <div className="border-border-secondary flex w-full justify-center border-b">
      <div className="scrollbar-hide overflow-x-auto">
        <div className="gap-lg -mt-md flex whitespace-nowrap">
          <SubCategoryFilterItem
            href={`?category=${encodeURIComponent(categorySearchParams || '')}`}
            isSelected={!subSearchParams}
          >
            전체
          </SubCategoryFilterItem>

          {subCategories.map((subCategory: string, index: number) => (
            <div key={index}>
              <SubCategoryFilterItem
                href={`?category=${encodeURIComponent(categorySearchParams || '')}&sub=${subCategory}`}
                isSelected={subSearchParams === subCategory}
              >
                {subCategory}
              </SubCategoryFilterItem>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubCategoryFilter;
