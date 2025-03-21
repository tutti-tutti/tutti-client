import { CategoryFilter, FaqAccordion } from '@/components';
import SubCategoryFilter from '@/components/faq/SubCategoryFilter';

type SearchParamsProps = {
  searchParams: {
    category?: string;
    sub?: string;
    faq?: string;
  };
};

const FaqPage = async ({ searchParams }: SearchParamsProps) => {
  const { category: categorySearchParams, sub: subSearchParams } =
    await searchParams;

  return (
    <div>
      <CategoryFilter categorySearchParams={categorySearchParams} />
      {categorySearchParams && (
        <SubCategoryFilter
          categorySearchParams={categorySearchParams}
          subSearchParams={subSearchParams}
        />
      )}
      <FaqAccordion
        categorySearchParams={categorySearchParams}
        subSearchParams={subSearchParams}
      />
    </div>
  );
};

export default FaqPage;
