'use client';

import { useEffect, useState } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import type { Product } from '@/types';
import RecommendProductItem from './RecommendProductItem';
import { CustomNextArrow, CustomPrevArrow } from './CarouselArrowButton';

const RecommendCarousel = ({ products }: { products: Product[] }) => {
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

  return (
    <ul className="pb-10">
      <Slider {...settings}>
        {products.map(product => (
          <RecommendProductItem key={product.productId} {...product} />
        ))}
      </Slider>
    </ul>
  );
};

export default RecommendCarousel;
