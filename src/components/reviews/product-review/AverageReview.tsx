import {
  fetchReviewAverage,
  fetchReviewCountStar,
  fetchReviewPositiveAverage,
} from '@/services';
import { reviewServerStore } from '@/stores';
import StarRating from './StarRating';
import ReviewRatingBar from './ReviewRatingBar';
import ReviewBadge from './ReviewBadge';

const AverageReview = async () => {
  const { getParams } = reviewServerStore();
  const { productIdParams } = getParams();
  const reviewAverage = await fetchReviewAverage(productIdParams);
  const reviewCountStar = await fetchReviewCountStar(productIdParams);
  const reviewPositiveAverage =
    await fetchReviewPositiveAverage(productIdParams);

  return (
    <div className="gap-md my-5xl flex max-sm:flex-col">
      <article className="px-xl py-2xl border-border-primary gap-xs max-md:px-sm max-md:py-md flex w-full flex-col rounded-2xl border">
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
            {reviewPositiveAverage.positivePer}%의 긍정적인 반응
          </ReviewBadge>
        </div>
      </article>
      <article className="px-lg py-xl border-border-primary max-md:px-md max-md:py-lg flex w-full flex-col justify-between rounded-2xl border">
        {[1, 2, 3, 4, 5].map(rating => (
          <div key={rating} className="gap-xs flex items-center">
            <StarRating score={rating} size={24} />
            <ReviewRatingBar
              reviewCnt={reviewCountStar.reviewRatings[rating]}
              totalReviewCnt={reviewCountStar.totalCount}
            />
          </div>
        ))}
      </article>
    </div>
  );
};

export default AverageReview;
