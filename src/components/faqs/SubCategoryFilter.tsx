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
    <div className="flex w-full justify-center">
      <div className="scrollbar-hide border-border-secondary w-full overflow-x-auto border-b">
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
