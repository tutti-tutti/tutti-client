import Link from 'next/link';

import { cn } from '@/utils';
import { reviewServerStore } from '@/stores';

const REVIEW_SORT = [
  { text: '최신순', queryParameter: 'latest' },
  { text: '도움돼요순', queryParameter: 'like' },
  { text: '평점순', queryParameter: 'rating' },
];

const ReviewSort = () => {
  const { getParams } = reviewServerStore();
  const { reviewSortSearchParams } = getParams();

  const isSelected = (filterQueryParameter: string) => {
    return reviewSortSearchParams === filterQueryParameter;
  };

  const isSelectedClass = (queryParameter: string) =>
    `${isSelected(queryParameter) ? 'text-text-primaryInteraction' : 'text-text-tertiary'}`;

  return (
    <>
      <div className="border-border-secondary pb-md gap-lg flex justify-end border-b">
        {REVIEW_SORT.map(sort => {
          return (
            <Link
              key={sort.queryParameter}
              href={`?review-sort=${sort.queryParameter}`}
              scroll={false}
              replace={true}
            >
              <div
                className={cn(
                  'font-style-paragraph',
                  isSelectedClass(sort.queryParameter),
                )}
              >
                {sort.text}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ReviewSort;
