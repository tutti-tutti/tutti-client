import CategoryFilterItems from '@/components/faq/CategoryFilterItem';

const CategoryFilter = async ({
  categoryQueryParams,
}: {
  categoryQueryParams?: string;
}) => {
  const categories = [
    { id: '1', name: '카테고리1' },
    { id: '2', name: '카테고리2' },
    { id: '3', name: '카테고리3' },
    { id: '4', name: '카테고리4' },
    { id: '5', name: '카테고리5' },
    { id: '6', name: '카테고리6' },
  ];

  return (
    <div className="gap-3xl border-border-secondary -bott relative box-border flex justify-center border-b">
      <CategoryFilterItems
        isTop
        isSelected={!categoryQueryParams}
        href={'/faq'}
      >
        인기
      </CategoryFilterItems>
      {categories.map(category => (
        <CategoryFilterItems
          key={category.id}
          isSelected={categoryQueryParams === category.id}
          href={`/faq?category=${category.id}`}
        >
          {category.name}
        </CategoryFilterItems>
      ))}
    </div>
  );
};

export default CategoryFilter;
