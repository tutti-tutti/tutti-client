'use client';

import { useOptimistic, startTransition } from 'react';

import { Button } from '@/components';
import { reviewLikeAction } from '@/server-actions';

interface ReviewLikeButtonProps {
  id: number;
  liked?: boolean;
}

const ReviewLikeButton = ({
  id,
  liked: initialLiked,
}: ReviewLikeButtonProps) => {
  const [optimisticIsLiked, setOptimisticIsLiked] = useOptimistic(
    initialLiked || false,
    (newIsLiked: boolean) => newIsLiked,
  );

  const handleLikeClick = () => {
    startTransition(() => {
      setOptimisticIsLiked(!optimisticIsLiked);

      reviewLikeAction(id).catch(error => {
        console.error('좋아요 업데이트 실패:', error);
        setOptimisticIsLiked(optimisticIsLiked);
      });
    });
  };

  return (
    <Button
      icon={optimisticIsLiked ? 'check' : 'smile'}
      variant={
        optimisticIsLiked ? 'primaryOutline' : 'tertiaryOutlineInteraction'
      }
      onClick={handleLikeClick}
      className="max-md:px-sm! max-md:py-xs!"
    >
      도움이 되는 리뷰에요
    </Button>
  );
};

export default ReviewLikeButton;
