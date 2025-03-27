'use client';

import { useState } from 'react';

import { Icon } from '@/components';

interface StarClickProps {
  onRatingClick: () => void;
}

const StarClick = ({ onRatingClick }: StarClickProps) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRatingClick = (position: number) => {
    setRating(position);
    onRatingClick();
  };

  return (
    <div className="-ml-xs flex">
      <input type="hidden" value={rating} name="rating" />
      {[1, 2, 3, 4, 5].map(position => (
        <Icon
          key={position}
          iconName={(hover || rating) >= position ? 'starFill' : 'starGray'}
          width={72}
          height={72}
          onClick={() => handleRatingClick(position)}
          onMouseEnter={() => setHover(position)}
          onMouseLeave={() => setHover(0)}
          className="cursor-pointer"
        />
      ))}
    </div>
  );
};

export default StarClick;
