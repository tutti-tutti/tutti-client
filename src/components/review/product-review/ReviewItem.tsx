import { Button } from '@/components';
import ReviewBadge from '@/components/review/product-review/ReviewBadge';
import StarRating from '@/components/review/product-review/StarRating';

interface ReviewItemProps {
  id: number;
  productItemId: number;
  nickname: string;
  content: string;
  rating: number;
  reviewImageUrls: string[];
  likeCount: number;
  sentiment: 'positive' | 'negative';
  sentimentProbability: number;
  createdAt: string;
}

const ReviewItem = ({ ...review }: ReviewItemProps) => {
  const reviewBadgeText =
    review.sentiment === 'positive'
      ? '긍정적인 반응을 보이는 리뷰에요'
      : '부정적인 반응을 보이는 리뷰에요';

  return (
    <div className="py-lg gap-md border-border-secondary flex flex-col border-b">
      <div className="mb-sm flex justify-between">
        <div>
          <div className="font-style-paragraph text-text-secondary ml-2xs">
            {review.nickname}
          </div>
          <StarRating score={review.rating} size={24} />
        </div>
        <div className="font-style-info text-text-tertiaryInfo">
          {review.createdAt}
        </div>
      </div>
      <div className="font-style-paragraph text-text-primary ml-2xs">
        {review.content}
      </div>
      <div className="gap-xl flex justify-end">
        <ReviewBadge textSize="paragraph" type={review.sentiment}>
          {reviewBadgeText}
        </ReviewBadge>
        <Button icon="smile" variant="tertiaryOutline">
          도움이 되는 리뷰에요
        </Button>
        {/* 👆 이미 눌렀는 지 여부 UI 적용 필요! smile => check   |  tertiaryOutline => primaryOutline */}
      </div>
    </div>
  );
};

export default ReviewItem;
