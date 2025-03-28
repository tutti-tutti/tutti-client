'use client';

import { useOptimistic } from 'react';

import { Button } from '@/components';
import { reviewLikeAction } from '@/server-actions';

interface ReviewLikeButtonProps {
  id: number;
  isLiked: boolean;
}

const ReviewLikeButton = ({
  id,
  isLiked: initialIsLiked,
}: ReviewLikeButtonProps) => {
  const [optimisticIsLiked, setOptimisticIsLiked] = useOptimistic(
    initialIsLiked,
    (newIsLiked: boolean) => newIsLiked,
  );

  const handleLikeClick = async () => {
    try {
      setOptimisticIsLiked(!optimisticIsLiked);
      const newIsLiked = await reviewLikeAction(id);
      setOptimisticIsLiked(newIsLiked);
    } catch (error) {
      console.error('좋아요 업데이트 실패:', error);
      setOptimisticIsLiked(optimisticIsLiked);
    }
  };

  return (
    <Button
      icon={optimisticIsLiked ? 'check' : 'smile'}
      variant={optimisticIsLiked ? 'primaryOutline' : 'tertiaryOutline'}
      onClick={handleLikeClick}
    >
      도움이 되는 리뷰에요
    </Button>
  );
};

export default ReviewLikeButton;
