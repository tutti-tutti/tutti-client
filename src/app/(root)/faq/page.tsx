import { CategoryFilter, FaqAccordion, SubCategoryFilter } from '@/components';

type SearchParamsProps = {
  searchParams: {
    category?: string;
    sub?: string;
    faq?: string;
  };
};

const FaqPage = async ({ searchParams }: SearchParamsProps) => {
  const {
    category: categorySearchParams,
    sub: subSearchParams,
    faq: faqSearchParams,
  } = await searchParams;

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
        faqSearchParams={faqSearchParams}
      />
    </div>
  );
};

export default FaqPage;
