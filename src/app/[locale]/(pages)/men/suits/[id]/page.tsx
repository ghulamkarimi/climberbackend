"use client";

import { useState, useEffect } from "react";
import { getSuitsById } from "@/src/app/[locale]/components/suitsSections/SuitsSections";
import { ISuits } from "@/interface";
import { useParams } from "next/navigation";
import { SwiperSlide, Swiper } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import ReactStars from "react-stars";

const Page = () => {
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [suit, setSuit] = useState<ISuits | null>(null);

  useEffect(() => {
    const fetchSuit = async () => {
      try {
        if (id) {
          const suitData = await getSuitsById(id);
          if (suitData) {
            setSuit(suitData);
          } else {
            console.error("Suit not found");
          }
        }
      } catch (error) {
        console.error("Error fetching suit data:", error);
      }
    };

    fetchSuit();
  }, [id]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12">
      <div className="md:col-span-6 p-3">
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-96 w-full rounded-lg"
        >
          {suit ? (
            <>
              {[
                suit.bildDetailsOne,
                suit.bildDetailsTwo,
                suit.bildDetailsThree,
                suit.bildDetailsFour,
              ].map((image, index) => (
                <SwiperSlide  key={index}>
                  <Image
                    alt={suit.title || ""}
                    src={image || ""}
                    width={1000}
                    height={500}
                    className="object-cover"
                  />
                </SwiperSlide>
              ))}
            </>
          ) : (
            "Loading..."
          )}
        </Swiper>
        {/* Thumbnail Swiper */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbs mt-3 h-32 w-full rounded-lg"
        >
          {suit
            ? [
                suit.bildDetailsOne,
                suit.bildDetailsTwo,
                suit.bildDetailsThree,
                suit.bildDetailsFour,
              ].map((image, index) => (
                <SwiperSlide key={index}>
                  <button className="flex h-full w-full items-center justify-center">
                    <Image
                      src={image || ""}
                      alt={suit.title || ""}
                      width={200}
                      height={200}
                      className="block h-full w-full object-cover"
                    />
                  </button>
                </SwiperSlide>
              ))
            : "Loading..."}
        </Swiper>
      </div>
      <div className="md:col-span-6 flex items-center justify-center w-full">
        <div className="w-full max-w-xl p-3 bg-white shadow-lg rounded-lg">
          <h1 className="md:text-4xl text-sm sm:text-xl font-bold text-gray-900 mb-3">
            {suit?.title}
          </h1>
          <p className="flex items-center mb-4">
            <ReactStars className=" cursor-pointer"
              count={5}
              size={24}
              value={suit?.evaluation || 0}
              color2={"#ffd700"}
              edit={false}
            />{" "}
          </p>
          <p className="text-lg text-gray-700 mb-4">{suit?.descriptions}</p>
          <p className="text-3xl font-semibold text-gray-900 mb-6">
            {suit?.price}
          </p>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
