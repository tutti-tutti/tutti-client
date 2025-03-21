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
    <div className="gap-xl flex justify-center">
      <SubCategoryFilterItem
        href={`?category=${categorySearchParams}`}
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
