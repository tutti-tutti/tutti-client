import { Fragment } from 'react';

import { fetchCategoryFaqs, fetchTopCategoryFaqs } from '@/services';
import FaqAccordionItemQuestion from '@/components/faq/FaqAccordionItemQuestion';
import FaqAccordionAnswer from '@/components/faq/FaqAccordionAnswer';

interface FaqAccordionProps {
  categorySearchParams?: string;
  subSearchParams?: string;
  faqSearchParams?: string;
}

interface FaqType {
  id: number;
  categoryName: string;
  question: string;
  answer: string;
  viewCnt: number;
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
        topFaqs.map((faq: FaqType) => {
          const { id, question, answer, viewCnt } = faq;

          return (
            <Fragment key={id}>
              <FaqAccordionItemQuestion
                href={isSelected(id) ? `/faq` : `?faq=${id}`}
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
        categoryFaqs.map((faq: FaqType) => {
          console.log('faq: ', faq);
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
