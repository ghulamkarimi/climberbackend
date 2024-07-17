"use client";

import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { IProductsItems } from "../../(pages)/men/page";

export interface CarouselProps {
  items: IProductsItems[];
  numberItemsDesktop?: number;
  numberItemsTablet?: number;
  numberItemsMobile?: number;
}

const Products = ({
  items,
  numberItemsDesktop = 4,
  numberItemsTablet = 2,
  numberItemsMobile = 1,
}: CarouselProps) => {
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
          items.map((products) => (
            <div key={products.id} className=" w-full flex flex-col items-center p-2 cursor-pointer ">
              <div className="overflow-hidden rounded-lg w-full p-2">
                <img
                  src={products.bild}
                  className=" h-80 w-80 hover:scale-105 duration-300 hover:brightness-50 rounded-lg"
                  alt={products.title}
                />
              </div>
              <div className="flex justify-between p-2 items-center gap-3">
                <p className="text-lg">{products.title}</p>
                <p className="text-xs">{products.bewertung}</p>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default Products;

/*  <div className=" flex items-center justify-around w-full gap-2">
          {items &&
            items.map((product) => (
             <div className=" w-full flex ">
               <div className="overflow-hidden rounded-lg w-full">
              <img
                src={product.bild}
                className="h-72 w-72 hover:scale-105 duration-300 hover:brightness-50 rounded-lg"
                alt={product.title}
              />
            </div>
            <div className="flex justify-between px-2 items-center gap-3">
              <p className="text-lg">{product.title}</p>
              <p className="text-xs">{product.bewertung}</p>
            </div>
             </div>
            ))}
        </div> */
