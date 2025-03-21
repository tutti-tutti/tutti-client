import { cn } from '@/utils';
import '@/styles/carousel.css';
import { LeftArrowIcon, RightArrowIcon } from '../icons';

type CustomArrowProps = {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  currentSlide?: number;
  slideCount?: number;
  slidesToShow?: number;
};

const CustomNextArrow = ({
  className,
  style,
  onClick,
  currentSlide,
  slideCount,
  slidesToShow,
}: CustomArrowProps) => {
  const isLastSlide = currentSlide === slideCount! - slidesToShow!;

  return (
    <div
      className={cn(
        'custom-arrow custom-next-arrow',
        isLastSlide ? 'arrow-disabled' : '',
        className,
      )}
      style={style}
      onClick={isLastSlide ? undefined : onClick}
    >
      <RightArrowIcon color="#171717" />
    </div>
  );
};

const CustomPrevArrow = ({
  className,
  style,
  onClick,
  currentSlide,
}: CustomArrowProps) => {
  const isFirstSlide = currentSlide === 0;

  return (
    <div
      className={cn(
        'custom-arrow custom-prev-arrow',
        isFirstSlide ? 'arrow-disabled' : '',
        className,
      )}
      style={style}
      onClick={isFirstSlide ? undefined : onClick}
    >
      <LeftArrowIcon color="#171717" />
    </div>
  );
};

export { CustomNextArrow, CustomPrevArrow };
