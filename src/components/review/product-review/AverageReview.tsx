import { getProductIdParams } from '@/utils';
import StarRating from '@/components/review/product-review/StarRating';
import ReviewRatingBar from '@/components/review/product-review/ReviewRatingBar';
import ReviewBadge from '@/components/review/product-review/ReviewBadge';
import {
  fetchReviewAverage,
  fetchReviewCountStar,
  fetchReviewPositiveAverage,
} from '@/services';

const AverageReview = async () => {
  const productIdParams = getProductIdParams();
  const reviewAverage = await fetchReviewAverage(productIdParams);
  const reviewCountStar = await fetchReviewCountStar(productIdParams);
  const reviewPositiveAverage =
    await fetchReviewPositiveAverage(productIdParams);

  return (
    <div className="gap-md my-5xl flex">
      <div className="px-xl py-2xl border-border-primary gap-xs flex w-full flex-col rounded-2xl border">
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
      </div>
      <div className="px-lg py-xl border-border-primary flex w-full flex-col justify-between rounded-2xl border">
        <div className="gap-xs flex items-center">
          <StarRating score={1} size={24} />
          <ReviewRatingBar
            reviewCnt={reviewCountStar.reviewRatings['1']}
            totalReviewCnt={reviewCountStar.totalCount}
          />
        </div>
        <div className="gap-xs flex items-center">
          <StarRating score={2} size={24} />
          <ReviewRatingBar
            reviewCnt={reviewCountStar.reviewRatings['2']}
            totalReviewCnt={reviewCountStar.totalCount}
          />
        </div>
        <div className="gap-xs flex items-center">
          <StarRating score={3} size={24} />
          <ReviewRatingBar
            reviewCnt={reviewCountStar.reviewRatings['3']}
            totalReviewCnt={reviewCountStar.totalCount}
          />
        </div>
        <div className="gap-xs flex items-center">
          <StarRating score={4} size={24} />
          <ReviewRatingBar
            reviewCnt={reviewCountStar.reviewRatings['4']}
            totalReviewCnt={reviewCountStar.totalCount}
          />
        </div>
        <div className="gap-xs flex items-center">
          <StarRating score={5} size={24} />
          <ReviewRatingBar
            reviewCnt={reviewCountStar.reviewRatings['5']}
            totalReviewCnt={reviewCountStar.totalCount}
          />
        </div>
      </div>
    </div>
  );
};

export default AverageReview;
