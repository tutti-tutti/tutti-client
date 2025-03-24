import type { ReactNode } from 'react';

import { Icon } from '@/components';
import { cn } from '@/utils';

interface ReviewBadgeProps {
  type: 'positive' | 'negative';
  children: ReactNode;
  textSize: 'subHeading' | 'paragraph';
}

const ReviewBadge = ({ type, children, textSize }: ReviewBadgeProps) => {
  const defaultClass = {
    bg: 'gap-xs px-sm py-xs flex items-center rounded-xl',
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

  return (
    <div className={cn(defaultClass.bg, typeClass.bg)}>
      <Icon iconName={type} className={typeClass.icon} />
      <div className={cn(defaultClass.text, typeClass.text)}>{children}</div>
    </div>
  );
};

export default ReviewBadge;
