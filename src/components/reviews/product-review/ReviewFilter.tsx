import Link from 'next/link';

import { getReviewSortSearchParams } from '@/utils';

const REVIEW_FILTERS = [
  { id: 'LATEST', text: '최신순', queryParameter: 'latest' },
  { id: 'LIKE', text: '도움돼요순', queryParameter: 'like' },
  { id: 'RATING', text: '평점순', queryParameter: 'rating' },
];

const ReviewFilter = () => {
  const reviewSortSearchParams = getReviewSortSearchParams();

  const isSelected = (filterQueryParameter: string) => {
    return reviewSortSearchParams === filterQueryParameter;
  };

  return (
    <>
      <div className="border-border-secondary pb-md gap-lg flex justify-end border-b">
        {REVIEW_FILTERS.map(filter => {
          return (
            <Link
              key={filter.id}
              href={`?review-sort=${filter.queryParameter}`}
              className={`font-style-paragraph ${isSelected(filter.queryParameter) ? 'text-text-primaryInteraction' : 'text-text-tertiary'} `}
              scroll={false}
              replace={true}
            >
              <div>{filter.text}</div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ReviewFilter;
