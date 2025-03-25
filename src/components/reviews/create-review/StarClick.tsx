'use client';

import { useState } from 'react';

import { Icon } from '@/components';

const StarClick = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="-ml-xs flex">
      <input type="hidden" value={rating} name="rating" />
      <input type="hidden" />
      {[1, 2, 3, 4, 5].map(position => (
        <Icon
          key={position}
          iconName={(hover || rating) >= position ? 'starFill' : 'starGray'}
          width={72}
          height={72}
          onClick={() => setRating(position)}
          onMouseEnter={() => setHover(position)}
          onMouseLeave={() => setHover(0)}
          className="cursor-pointer"
        />
      ))}
    </div>
  );
};

export default StarClick;
