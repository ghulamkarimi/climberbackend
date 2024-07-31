"use client";

import { useState, useEffect } from "react";
import { getSuitsById } from "@/src/app/[locale]/components/suitsSections/SuitsSections";
import { IProducts } from "@/interface";
import { useParams } from "next/navigation";
import { SwiperSlide, Swiper } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { Formik } from "formik";
import * as Yup from "yup";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import ReactStars from "react-stars";
import CartMenu from "@/src/app/[locale]/components/addCartMenu/CartMenu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/feature/store/store";
import { setIsAddCartMenuActive } from "@/feature/reducers/appSlice";

const Page = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isAddCartMenuActive } = useSelector((state: RootState) => state.app);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [suit, setSuit] = useState<IProducts | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const formikSchema = Yup.object({});

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

  console.log("size", selectedSize);
  console.log("colors", selectedColor);

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div>
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
                  <SwiperSlide key={index}>
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
        <form className="md:col-span-6 p-3 flex items-center justify-center w-full">
          <div className="w-full max-w-xl p-3 bg-white shadow-lg rounded-lg">
            <h1 className="md:text-4xl text-sm sm:text-xl font-bold text-gray-900 mb-3">
              {suit?.title}
            </h1>

            <ReactStars
              className="cursor-pointer"
              count={5}
              size={24}
              value={suit?.evaluation || 0}
              color2={"#ffd700"}
              edit={false}
            />
            <div className="text-center mt-3 mb-3">
              <p className="font-FONT_VIGA font-bold text-sm md:text-xl">
                Colors:
              </p>
            </div>

            <div className="flex justify-center">
              {suit?.colors.map((color, index) => (
                <label
                  key={index}
                  className={`md:w-8 md:h-8 w-6 h-6 rounded-full mr-2 mb-2 inline-block cursor-pointer ${
                    selectedColor === color ? "border-2 border-black" : ""
                  }`}
                  style={{ backgroundColor: color }}
                >
                  <input
                    type="radio"
                    name="color"
                    value={color}
                    className="sr-only"
                    onClick={() => handleColorClick(color)}
                  />
                </label>
              ))}
            </div>
            <div className="text-center mt-3">
              <p className="font-FONT_VIGA font-bold text-sm md:text-xl">
                Size:
              </p>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {suit?.sizes.map((size, index) => (
                <label
                  key={index}
                  className={`w-14 h-14 rounded-lg p-2 flex items-center justify-center border-2 cursor-pointer ${
                    selectedSize === size ? "border-black" : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    className="sr-only"
                    onClick={() => handleSizeClick(size)}
                  />
                  <span className="text-center">{size}</span>
                </label>
              ))}
            </div>
            <div className="mt-4 text-center flex flex-col gap-2">
              <p className="font-semibold text-gray-900 md:text-3xl text-sm sm:text-xl">
                <span>Price:</span>{" "}
                <span className="font-semibold">{suit?.price}</span>
              </p>
              <p className="text-sm md:text-xl">
                Tax included. Shipping calculated at checkout.
              </p>
            </div>
            <div className="text-center">
              <button
              type="button"
                onClick={() => {
                  if(selectedColor && selectedSize !== null){
                    dispatch(setIsAddCartMenuActive(true));
                    localStorage.setItem("title",suit?.title || "")
                    localStorage.setItem("price",suit?.price || "")
                    localStorage.setItem("bild",suit?.bild || "")
                    localStorage.setItem("colors",selectedColor!)
                    localStorage.setItem("size",selectedSize!)
                  }else{
                    console.log("you must completed the fids")
                  }
                }}
                className="bg-blue-600 text-white py-3 px-6 mt-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 w-1/2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <h2 className="text-sm md:text-xl uppercase font-FONT_INTO font-bold mt-3">
          Description
        </h2>
        <p className="text-lg text-gray-700 mb-4">{suit?.descriptions}</p>
      </div>
      <div className={`${isAddCartMenuActive === true ? "flex absolute z-50 top-0 right-0 bg-blue-500 w-1/3 h-screen" : "hidden"}`}>
        <CartMenu />
      </div>
    </div>
  );
};

export default Page;
