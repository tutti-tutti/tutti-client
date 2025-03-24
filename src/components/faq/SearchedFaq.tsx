import { Fragment } from 'react';

import { fetchSearchedFaqs } from '@/services';
import FaqAccordionItemQuestion from '@/components/faq/FaqAccordionItemQuestion';
import FaqAccordionAnswer from '@/components/faq/FaqAccordionAnswer';

interface SearchedFaqProps {
  querySearchParams: string;
  faqSearchParams?: string;
}

interface FaqType {
  id: number;
  categoryName: string;
  question: string;
  answer: string;
  viewCnt: number;
}

const SearchedFaq = async ({
  querySearchParams,
  faqSearchParams,
}: SearchedFaqProps) => {
  const searchedFaqs = await fetchSearchedFaqs({
    query: querySearchParams,
    page: 1,
    size: 10,
  });

  const isSelected = (faqId: number): boolean => {
    return faqSearchParams === faqId.toString();
  };

  return (
    <div className="w-full">
      {searchedFaqs.faqSearchResults.faqs.map((faq: FaqType) => {
        const { id, question, answer, viewCnt } = faq;

        return (
          <Fragment key={id}>
            <FaqAccordionItemQuestion
              href={
                isSelected(id)
                  ? `?query=${querySearchParams}`
                  : `?query=${querySearchParams}&faq=${faq.id}`
              }
              isSelected={isSelected(id)}
              question={question}
            />
            {isSelected(id) && (
              <FaqAccordionAnswer answer={answer} viewCnt={viewCnt} />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default SearchedFaq;
