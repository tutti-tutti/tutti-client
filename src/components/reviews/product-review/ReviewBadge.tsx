'use client';

import { useState, type ReactNode } from 'react';

import { Icon } from '@/components';
import { cn } from '@/utils';

interface ReviewBadgeProps {
  type: 'positive' | 'negative';
  children: ReactNode;
  textSize: 'subHeading' | 'paragraph';
}

const ReviewBadge = ({ type, children, textSize }: ReviewBadgeProps) => {
  const [hover, setHover] = useState(false);

  const defaultClass = {
    bg: 'gap-xs px-sm py-xs items-center rounded-xl inline-flex border border-transparent',
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
    bg: 'box-border border hover:border-border-primaryHover hover:text-text-primaryHover active:border-border-primaryPressed active:text-text-primaryPressed cursor-pointer',
    icon: 'hover:border-border-primaryHover hover:text-text-primaryHover active:border-border-primaryPressed active:text-text-primaryPressed',
    text: 'hover:border-border-primaryHover hover:text-text-primaryHover active:border-border-primaryPressed active:text-text-primaryPressed',
  };
  const badgeClass = hover && textSize === 'paragraph' ? hoverClass : typeClass;
  const hoverText =
    type === 'positive'
      ? '긍정적인 반응의 리뷰가 아니에요'
      : '부정적인 반응의 리뷰가 아니에요';
  const badgeText = hover && textSize === 'paragraph' ? hoverText : children;

  const handleHover = () => {
    setHover(prev => !prev);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={cn(defaultClass.bg, badgeClass.bg)}
    >
      <Icon iconName={type} className={badgeClass.icon} />
      <div className={cn(defaultClass.text, badgeClass.text)}>{badgeText}</div>
    </div>
  );
};

export default ReviewBadge;
