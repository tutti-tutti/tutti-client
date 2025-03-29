import {
  fetchReviewAverage,
  fetchReviewCountStar,
  fetchReviewPositiveAverage,
} from '@/services';
import { getProductIdParams } from '@/utils';
import StarRating from './StarRating';
import ReviewRatingBar from './ReviewRatingBar';
import ReviewBadge from './ReviewBadge';

const AverageReview = async () => {
  const productIdParams = getProductIdParams();
  const reviewAverage = await fetchReviewAverage(productIdParams);
  const reviewCountStar = await fetchReviewCountStar(productIdParams);
  const reviewPositiveAverage =
    await fetchReviewPositiveAverage(productIdParams);

  return (
    <div className="gap-md my-5xl flex">
      <article className="px-xl py-2xl border-border-primary gap-xs flex w-full flex-col rounded-2xl border">
        <div className="ml-xs flex">
          <div className="font-style-title text-text-primary">
            {reviewAverage.avg}
          </div>
          <div className="font-style-heading text-text-tertiaryInfo">
            ({reviewCountStar.totalCount})
          </div>
        </div>
        <StarRating score={reviewAverage.avg} size={48} />
        <div className="ml-xs">
          <ReviewBadge textSize="subHeading" type="positive">
            {reviewPositiveAverage.positivePer}%의 고객이 긍정적인 반응을 보여요
          </ReviewBadge>
        </div>
      </article>
      <div className="px-lg py-xl border-border-primary flex w-full flex-col justify-between rounded-2xl border">
        {[1, 2, 3, 4, 5].map(rating => (
          <div key={rating} className="gap-xs flex items-center">
            <StarRating score={rating} size={24} />
            <ReviewRatingBar
              reviewCnt={reviewCountStar.reviewRatings[rating]}
              totalReviewCnt={reviewCountStar.totalCount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AverageReview;
