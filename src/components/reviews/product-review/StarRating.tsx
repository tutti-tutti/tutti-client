import { Icon } from '@/components';

interface StarRatingProps {
  score: number;
  size: number;
}

const StarRating = ({ score, size }: StarRatingProps) => {
  const normalizedScore = Math.max(0, Math.min(5, Math.round(score * 2) / 2));

  const starPositions = [1, 2, 3, 4, 5];

  return (
    <div className="flex">
      {starPositions.map(position => {
        if (normalizedScore >= position) {
          return (
            <Icon
              key={position}
              iconName="starFill"
              width={size}
              height={size}
            />
          );
        } else if (normalizedScore === position - 0.5) {
          return (
            <Icon
              key={position}
              iconName="starHalf"
              width={size}
              height={size}
            />
          );
        } else {
          return (
            <Icon
              key={position}
              iconName="starGray"
              width={size}
              height={size}
            />
          );
        }
      })}
    </div>
  );
};

export default StarRating;
