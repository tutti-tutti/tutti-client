'use client';

import { useEffect, useState } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { recommededProductsQueryOptions } from '@/queries';
import { RecommendProductItemSkeleton } from '@/components';
import { PRODUCTS_CONSTANTS } from '@/constants';
import type { Product } from '@/types';
import RecommendProductItem from './RecommendProductItem';
import { CustomNextArrow, CustomPrevArrow } from './CarouselArrowButton';

const RecommendCarousel = ({
  recommendedProducts,
}: {
  recommendedProducts: Product;
}) => {
  const {
    data: products,
    isPending,
    isError,
  } = useSuspenseQuery({
    ...recommededProductsQueryOptions,
    initialData: recommendedProducts,
  });

  const [slidesToShow, setSlidesToShow] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const renderItems = () => {
    if (isError) {
      return (
        <div className="text-text-danger py-4 text-center">
          {PRODUCTS_CONSTANTS.FETCH_RECOMMEND_FAIL_MESSAGE}
        </div>
      );
    }

    if (isPending) {
      return Array(12)
        .fill(0)
        .map((_, index) => (
          <RecommendProductItemSkeleton key={`recommend-skeleton-${index}`} />
        ));
    }

    return products.map((product: Product) => (
      <RecommendProductItem key={`product-${product.productId}`} {...product} />
    ));
  };

  return (
    <ul className="pb-lg">
      <Slider {...settings}>{renderItems()}</Slider>
    </ul>
  );
};

export default RecommendCarousel;
