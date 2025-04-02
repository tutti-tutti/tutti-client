import { calculateRelativeTime } from '@/utils';

import ReviewBadge from './ReviewBadge';
import ReviewLikeButton from './ReviewLikeButton';
import StarRating from './StarRating';

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
  liked?: boolean;
  isLogin: boolean;
}

const ReviewItem = ({ isLogin, ...review }: ReviewItemProps) => {
  const reviewBadgeText =
    review.sentiment === 'positive'
      ? '긍정적인 반응을 보이는 리뷰에요'
      : '부정적인 반응을 보이는 리뷰에요';

  return (
    <div className="py-lg gap-md border-border-secondary max-md:py-sm flex flex-col border-b">
      <div className="mb-sm flex justify-between max-md:mb-0">
        <div>
          <div className="font-style-paragraph text-text-secondary ml-2xs">
            {review.nickname}
          </div>
          <StarRating score={review.rating} size={24} />
        </div>
        <div className="font-style-info text-text-tertiaryInfo">
          {calculateRelativeTime(review.createdAt)}
        </div>
      </div>
      <div className="font-style-paragraph text-text-primary ml-2xs">
        {review.content}
      </div>
      <div className="gap-xl max-sm:gap-md flex h-auto justify-end max-sm:flex-col max-sm:items-end">
        <ReviewBadge
          textSize="paragraph"
          type={review.sentiment}
          reviewText={review.content}
        >
          {reviewBadgeText}
        </ReviewBadge>
        {isLogin && <ReviewLikeButton liked={review.liked} id={review.id} />}
      </div>
    </div>
  );
};

export default ReviewItem;
