import {
  CategoryFilter,
  FaqAccordion,
  Input,
  SearchedFaq,
  SubCategoryFilter,
} from '@/components';
import { faqSearchAction } from '@/server-actions';
import { fetchMainCategories, fetchSubCategories } from '@/services';

type SearchParamsProps = {
  searchParams: {
    category?: string;
    sub?: string;
    faq?: string;
    query?: string;
  };
};

export const dynamic = 'force-static';
export const revalidate = 3600;

export const generateStaticParams = async () => {
  const categories = await fetchMainCategories();

  const paths = [{}];

  const categoryPaths = await Promise.all(
    categories.map(async (category: string) => {
      const categoryPath = { category };

      const subCategories = await fetchSubCategories(category);

      const subCategoryPaths = subCategories.map((subCategory: string) => ({
        category,
        sub: subCategory,
      }));

      return [categoryPath, ...subCategoryPaths];
    }),
  );

  return [...paths, ...categoryPaths.flat()];
};
const FaqPage = async ({ searchParams }: SearchParamsProps) => {
  const {
    category: categorySearchParams,
    sub: subSearchParams,
    faq: faqSearchParams,
    query: querySearchParams,
  } = searchParams;

  return (
    <div className="md:px-7xl gap-lg mb-7xl flex flex-col items-center">
      <h1 className="font-style-title mb-3xl">자주 묻는 질문</h1>
      <form action={faqSearchAction}>
        <Input
          name="faqQuery"
          icon="search"
          className="!py-md !px-2xl border-border-info w-[670px] rounded-lg border-2"
          placeholder="자주 묻는 질문을 입력해주세요"
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
