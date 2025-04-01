interface ReviewRatingBarProps {
  reviewCnt: number;
  totalReviewCnt: number;
}

const ReviewRatingBar = ({
  reviewCnt,
  totalReviewCnt,
}: ReviewRatingBarProps) => {
  const getPercentage =
    reviewCnt === 0 && totalReviewCnt === 0
      ? 0
      : (reviewCnt / totalReviewCnt) * 100;

  return (
    <>
      <div className="bg-bg-disabled h-1.5 w-full rounded-full">
        <div
          className="bg-bg-inverseBold h-full rounded-full"
          style={{ width: `${getPercentage}%` }}
        />
      </div>
      <div className="font-style-info text-text-tertiaryInfo w-24">
        ({reviewCnt})
      </div>
    </>
  );
};

export default ReviewRatingBar;
