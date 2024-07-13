"use client"

import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
interface ICarouselItem {
  index: string;
  image: string;
}

interface CarouselProps {
  items: ICarouselItem[];
  numberItemsDesktop?: number;
  numberItemsTablet?: number;
  numberItemsMobile?: number;
}

const Slider = ({ items, numberItemsDesktop = 1, numberItemsTablet = 1, numberItemsMobile = 1 }: CarouselProps) => {
  const [_, setActiveIndex] = useState(0);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: numberItemsDesktop,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: numberItemsTablet,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: numberItemsMobile,
    },
  };

  return (
    <div className="w-full">
      <Carousel
        responsive={responsive}
        renderButtonGroupOutside
        className="relative z-10 mt-6"
        arrows={false}
        draggable={true}
        showDots
        additionalTransfrom={0}
        beforeChange={(nextSlide) => setActiveIndex(nextSlide)}
        infinite={true}
        autoPlay
      >
         {items &&
          items.map((img, index) => (
            <div key={index}>
              <Image width={2000} height={1000} src={img.image} alt={`Carousel item ${index}`} />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default Slider;
