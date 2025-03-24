import Link from 'next/link';

const REVIEW_FILTERS = [
  { id: 'LATEST', text: '최신순', queryParameter: 'latest' },
  { id: 'BEST', text: '베스트순', queryParameter: 'best' },
  { id: 'EARLIEST', text: '오래된순', queryParameter: 'earliest' },
  { id: 'HIGHEST', text: '평점높은순', queryParameter: 'highest' },
  { id: 'LOWEST', text: '평점낮은순', queryParameter: 'lowest' },
];

const ReviewFilter = () => {
  return (
    <>
      <div className="border-border-secondary pb-md gap-lg flex justify-end border-b">
        {REVIEW_FILTERS.map(filter => {
          return (
            <Link
              key={filter.id}
              href={`?review-sort=${filter.queryParameter}`}
              className="font-style-paragraph text-text-tertiary"
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
