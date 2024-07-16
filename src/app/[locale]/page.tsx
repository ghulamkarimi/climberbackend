"use client";
import { RootState } from "@/feature/store/store";
import MaxWithWrapper from "@/src/app/[locale]/components/MaxWithWrapper";
import Slider from "@/src/app/[locale]/components/carousel/Carousel";
import { useSelector } from "react-redux";

const page = () => {
  const carouselItems = [
    { index: "1", image: "/carousel/bild1.jpg" },
    { index: "2", image: "/carousel/bild2.jpg" },
    { index: "3", image: "/carousel/bild3.jpg" },
    { index: "4", image: "/carousel/bild4.jpg" },
    { index: "5", image: "/carousel/bild5.jpg" },
  ];
  const { isMenuActive } = useSelector((state: RootState) => state.app);
  return (
    <MaxWithWrapper
      className={`  ${
        isMenuActive ? " blur-2xl absolute top-0 w-full min-h-screen" : ""
      }`}
    >
      <div>
        <Slider items={carouselItems} />
      </div>
      <main></main>
    </MaxWithWrapper>
  );
};

export default page;
