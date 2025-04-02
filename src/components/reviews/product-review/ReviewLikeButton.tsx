'use client';

import { useOptimistic, startTransition } from 'react';

import { Button } from '@/components';
import { reviewLikeAction } from '@/server-actions';
import { toast } from '@/utils';
import Link from 'next/link';

interface ReviewLikeButtonProps {
  id: number;
  liked?: boolean;
  isLogin: boolean;
}

const ReviewLikeButton = ({
  id,
  liked: initialLiked,
  isLogin,
}: ReviewLikeButtonProps) => {
  const [optimisticIsLiked, setOptimisticIsLiked] = useOptimistic(
    initialLiked || false,
    (newIsLiked: boolean) => newIsLiked,
  );

  const getToastMessage = () => {
    return (
      <>
        <p>로그인해주세요</p>
        <Link className="hover:text-text-selected underline" href={'/signin'}>
          로그인하러 가기
        </Link>
      </>
    );
  };

  const handleLikeClick = () => {
    if (!isLogin) {
      toast.linkInfo(getToastMessage());
      return;
    }

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
