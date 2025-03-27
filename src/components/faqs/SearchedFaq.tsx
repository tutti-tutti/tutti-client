import { Fragment } from 'react';

import { fetchSearchedFaqs } from '@/services';
import type { FaqItemType } from '@/types';
import FaqAccordionItemQuestion from './FaqAccordionItemQuestion';
import FaqAccordionAnswer from './FaqAccordionAnswer';

interface SearchedFaqProps {
  querySearchParams: string;
  faqSearchParams?: string;
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
      {searchedFaqs.faqSearchResults.faqs.map((faq: FaqItemType) => {
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
