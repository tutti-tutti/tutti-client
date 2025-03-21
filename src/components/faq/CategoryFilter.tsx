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
    <div className="gap-3xl flex justify-center">
      <CategoryFilterItems isSelected={!categoryQueryParams} href={'/faq'}>
        전체
      </CategoryFilterItems>
      {categories.map(category => (
        <div key={category.id}>
          <CategoryFilterItems
            isSelected={categoryQueryParams === category.id}
            href={`/faq?category=${category.id}`}
          >
            {category.name}
          </CategoryFilterItems>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
