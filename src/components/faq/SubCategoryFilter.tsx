import SubCategoryFilterItem from '@/components/faq/SubCategoryFilterItem';

interface SubCategoryFilterProps {
  categorySearchParams?: string;
  subSearchParams?: string;
}

const subCategories = [
  { id: '1', name: '서브카테고리1' },
  { id: '2', name: '서브카테고리2' },
  { id: '3', name: '서브카테고리3' },
  { id: '4', name: '서브카테고리4' },
  { id: '5', name: '서브카테고리5' },
  { id: '6', name: '서브카테고리6' },
];

const SubCategoryFilter = ({
  categorySearchParams,
  subSearchParams,
}: SubCategoryFilterProps) => {
  return (
    <div className="gap-xl flex justify-center">
      <SubCategoryFilterItem
        href={`?category=${categorySearchParams}`}
        isSelected={!subSearchParams}
      >
        전체
      </SubCategoryFilterItem>

      {subCategories.map(subCategory => (
        <div key={subCategory.id}>
          <SubCategoryFilterItem
            href={`?category=${categorySearchParams}&sub=${subCategory.id}`}
            isSelected={subSearchParams === subCategory.id}
          >
            {subCategory.name}
          </SubCategoryFilterItem>
        </div>
      ))}
    </div>
  );
};

export default SubCategoryFilter;
