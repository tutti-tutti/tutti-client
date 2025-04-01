import { Fragment } from 'react';

import { fetchCategoryFaqs, fetchTopCategoryFaqs } from '@/services';
import type { FaqItemType } from '@/types';
import FaqAccordionItemQuestion from './FaqAccordionItemQuestion';
import FaqAccordionAnswer from './FaqAccordionAnswer';

interface FaqAccordionProps {
  categorySearchParams?: string;
  subSearchParams?: string;
  faqSearchParams?: string;
}

const FaqAccordion = async ({
  categorySearchParams,
  subSearchParams,
  faqSearchParams,
}: FaqAccordionProps) => {
  const topFaqs = await fetchTopCategoryFaqs();
  const categoryFaqs = await fetchCategoryFaqs({
    category: encodeURIComponent(categorySearchParams || ''),
    subCategory: encodeURIComponent(subSearchParams ? subSearchParams : ''),
    page: 1,
    size: 100,
  });

  const isSelected = (faqId: number): boolean => {
    return faqSearchParams === faqId.toString();
  };

  return (
    <div className="w-full">
      {!categorySearchParams &&
        topFaqs.map((faq: FaqItemType) => {
          const { id, question, answer, viewCnt } = faq;

          return (
            <Fragment key={id}>
              <FaqAccordionItemQuestion
                href={isSelected(id) ? `/faqs` : `?faq=${id}`}
                isSelected={isSelected(id)}
                question={question}
              />
              {isSelected(id) && (
                <FaqAccordionAnswer answer={answer} viewCnt={viewCnt} />
              )}
            </Fragment>
          );
        })}

      {categorySearchParams &&
        categoryFaqs.map((faq: FaqItemType) => {
          const { id, question, answer, viewCnt } = faq;

          return (
            <Fragment key={id}>
              <FaqAccordionItemQuestion
                href={
                  isSelected(id)
                    ? `?category=${categorySearchParams}${subSearchParams ? `&sub=${subSearchParams}` : ''}`
                    : `?category=${categorySearchParams}${subSearchParams ? `&sub=${subSearchParams}` : ''}&faq=${faq.id}`
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

export default FaqAccordion;
