import StarRating from '@/components/review/product-review/StarRating';
import ReviewRatingBar from '@/components/review/product-review/ReviewRatingBar';
import ReviewBadge from '@/components/review/product-review/ReviewBadge';

const AverageReview = async () => {
  return (
    <div className="gap-md my-5xl flex">
      <div className="px-xl py-2xl border-border-primary gap-xs flex w-full flex-col rounded-2xl border">
        <div className="ml-xs flex">
          <div className="font-style-title text-text-primary">4.5</div>
          <div className="font-style-heading text-text-tertiaryInfo">
            (1670)
          </div>
        </div>
        <StarRating score={4.5} size={48} />
        <div className="ml-xs">
          <ReviewBadge textSize="subHeading" type="positive">
            N%의 고객이 긍정적인 반응을 보이는 상품이에요
          </ReviewBadge>
        </div>
      </div>
      <div className="px-lg py-xl border-border-primary gap-xs flex w-full flex-col rounded-2xl border">
        <div className="gap-xs flex items-center">
          <StarRating score={1} size={24} />
          <ReviewRatingBar reviewCnt={10} totalReviewCnt={100} />
        </div>
        <div className="gap-xs flex items-center">
          <StarRating score={2} size={24} />
          <ReviewRatingBar reviewCnt={10} totalReviewCnt={100} />
        </div>
        <div className="gap-xs flex items-center">
          <StarRating score={3} size={24} />
          <ReviewRatingBar reviewCnt={10} totalReviewCnt={100} />
        </div>
        <div className="gap-xs flex items-center">
          <StarRating score={4} size={24} />
          <ReviewRatingBar reviewCnt={10} totalReviewCnt={100} />
        </div>
        <div className="gap-xs flex items-center">
          <StarRating score={5} size={24} />
          <ReviewRatingBar reviewCnt={10} totalReviewCnt={100} />
        </div>
      </div>
    </div>
  );
};

export default AverageReview;
