'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { CustomNextArrow, CustomPrevArrow } from '../CarouselArrowButton';

const RecommendProductItemSkeleton = () => {
  return (
    <li className="px-xs animate-pulse">
      <div className="h-[170px] w-full rounded bg-gray-200 sm:h-[240px]" />
      <div className="mt-xs mb-sm h-4 w-full rounded bg-gray-200" />
      <div className="mb-2 h-4 w-3/4 rounded bg-gray-200" />
      <div className="h-5 w-1/2 rounded bg-gray-200" />
    </li>
  );
};

const RecommendCarouselSkeleton = () => {
  const slidesToShow = 6;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 3,
    nextArrow: <CustomNextArrow slidesToShow={slidesToShow} />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const skeletonItems = Array(12)
    .fill(0)
    .map((_, index) => <RecommendProductItemSkeleton key={index} />);

  return (
    <ul className="pb-10">
      <Slider {...settings}>{skeletonItems}</Slider>
    </ul>
  );
};

const RecommendProductListSkeleton = () => {
  return (
    <div className="gap-3xl py-xl pb-xs border-border-secondary flex flex-col border-b">
      <div className="mx-auto h-8 w-2/5 animate-pulse rounded bg-gray-200" />
      <RecommendCarouselSkeleton />
    </div>
  );
};

export default RecommendProductListSkeleton;
