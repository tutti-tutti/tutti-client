import {
  CategoryFilter,
  FaqAccordion,
  Input,
  SearchedFaq,
  SubCategoryFilter,
} from '@/components';
import { faqSearchAction } from '@/server-actions';

type SearchParamsProps = {
  searchParams: Promise<{
    category?: string;
    sub?: string;
    faq?: string;
    query?: string;
  }>;
};

const FaqPage = async ({ searchParams }: SearchParamsProps) => {
  const {
    category: categorySearchParams,
    sub: subSearchParams,
    faq: faqSearchParams,
    query: querySearchParams,
  } = await searchParams;

  return (
    <div className="gap-lg mb-7xl flex flex-col items-center">
      <h1 className="font-style-title md:mb-3xl mb-0">자주 묻는 질문</h1>
      <form className="w-3/5 max-md:w-5/6 md:min-w-lg" action={faqSearchAction}>
        <Input
          name="faqQuery"
          icon="search"
          className="!py-md !px-2xl border-border-info rounded-lg border-2"
          placeholder="질문을 입력해주세요."
          defaultValue={querySearchParams}
        />
      </form>
      {querySearchParams ? (
        <SearchedFaq
          querySearchParams={querySearchParams}
          faqSearchParams={faqSearchParams}
        />
      ) : (
        <CategoryFilter categorySearchParams={categorySearchParams} />
      )}
      {categorySearchParams && (
        <SubCategoryFilter
          categorySearchParams={categorySearchParams}
          subSearchParams={subSearchParams}
        />
      )}
      {!querySearchParams && (
        <FaqAccordion
          categorySearchParams={categorySearchParams}
          subSearchParams={subSearchParams}
          faqSearchParams={faqSearchParams}
        />
      )}
    </div>
  );
};

export default FaqPage;
