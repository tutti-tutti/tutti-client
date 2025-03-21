import { fetchSubCategories } from '@/services';
import SubCategoryFilterItem from '@/components/faq/SubCategoryFilterItem';

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
    <div className="gap-xl border-border-secondary -mt-lg flex w-full justify-center border-b">
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
  );
};

export default SubCategoryFilter;
