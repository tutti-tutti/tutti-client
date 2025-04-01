'use client';

import {
  startTransition,
  useOptimistic,
  useState,
  type ReactNode,
} from 'react';

import { cn } from '@/utils';
import { sentimentFeedbackAction } from '@/server-actions';
import { Icon } from '@/components';

interface ReviewBadgeProps {
  type: 'positive' | 'negative';
  textSize: 'subHeading' | 'paragraph';
  reviewText?: string;
  children: ReactNode;
}

const ReviewBadge = ({
  type,
  textSize,
  reviewText,
  children,
}: ReviewBadgeProps) => {
  const [hover, setHover] = useState(false);
  const [optimisticFeedback, setOptimisticFeedback] = useOptimistic(
    false,
    (_, newState: boolean) => newState,
  );

  const defaultClass = {
    bg: 'gap-xs px-sm py-xs items-center rounded-xl inline-flex border border-transparent max-md:px-sm max-md:py-xs',
    text: `font-style-${textSize}`,
  };

  const typeClass =
    type === 'positive'
      ? {
          bg: 'bg-bg-successSubtle',
          icon: 'text-icon-success',
          text: 'text-text-successBold',
        }
      : {
          bg: 'bg-bg-dangerSubtle',
          icon: 'text-icon-danger',
          text: 'text-text-dangerBold',
        };
  const hoverClass = {
    bg: `cursor-pointer border ${type === 'positive' ? 'border-border-success' : 'border-border-danger'}`,
    icon: `fill-current ${type === 'positive' ? 'text-icon-success' : 'text-icon-danger'}`,
  };
  const badgeClass = hover ? hoverClass : typeClass;

  const hoverText =
    type === 'positive'
      ? '긍정적인 반응의 리뷰가 아니에요'
      : '부정적인 반응의 리뷰가 아니에요';
  const badgeText = !hover
    ? children
    : optimisticFeedback
      ? '소중한 피드백을 전송 완료했어요'
      : hoverText;

  const iconName = !hover
    ? type
    : optimisticFeedback
      ? 'check'
      : 'thinkingFace';

  const handleHover = () => {
    if (textSize === 'subHeading') return;

    setHover(prev => !prev);
  };

  const handleClick = () => {
    if (textSize === 'paragraph' && !optimisticFeedback) {
      startTransition(() => {
        setOptimisticFeedback(!optimisticFeedback);

        sentimentFeedbackAction(reviewText || '', type).catch(error => {
          console.error('피드백 제출 실패:', error);
          setOptimisticFeedback(optimisticFeedback);
        });
      });
    }
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleClick}
      className={cn(defaultClass.bg, badgeClass.bg)}
    >
      <Icon iconName={iconName} className={cn(badgeClass.icon)} />
      <div className={cn(defaultClass.text, typeClass.text)}>{badgeText}</div>
    </div>
  );
};

export default ReviewBadge;
