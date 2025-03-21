import { CategoryFilter, FaqAccordion } from '@/components';

type SearchParamsProps = {
  searchParams: {
    category?: string;
  };
};

const FaqPage = async ({ searchParams }: SearchParamsProps) => {
  const queryParams = await searchParams;
  const categoryQueryParams = queryParams.category;

  return (
    <div>
      <CategoryFilter categoryQueryParams={categoryQueryParams} />
      <FaqAccordion categoryQueryParams={categoryQueryParams} />
    </div>
  );
};

export default FaqPage;
