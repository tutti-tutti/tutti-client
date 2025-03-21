import {
  CategoryFilter,
  FaqAccordion,
  Input,
  SubCategoryFilter,
} from '@/components';

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
    <div className="md:px-7xl gap-lg flex flex-col items-center">
      <h1 className="font-style-title mb-3xl">자주 묻는 질문</h1>
      <Input
        name="faqSearch"
        icon="search"
        className="!py-md !px-2xl border-border-info w-[670px] rounded-lg border-2"
        placeholder="자주 묻는 질문을 입력해주세요"
      />
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
