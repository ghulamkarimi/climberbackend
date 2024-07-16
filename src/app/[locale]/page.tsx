import Footer from "@/src/app/components/Footer";
import MaxWithWrapper from "@/src/app/[locale]/components/MaxWithWrapper";
import AnnouncementText from "@/src/app/[locale]/components/announcementText/announcementText";
import Slider from "@/src/app/[locale]/components/carousel/Carousel";
import Menu from "@/src/app/[locale]/components/menu/Menu";
import TopHeader from "@/src/app/[locale]/components/topHeader/TopHeader";

const page = () => {
  const carouselItems = [
    { index: "1", image: "/carousel/bild1.jpg" },
    { index: "2", image: "/carousel/bild2.jpg" },
    { index: "3", image: "/carousel/bild3.jpg" },
    { index: "4", image: "/carousel/bild4.jpg" },
    { index: "5", image: "/carousel/bild5.jpg" },
  ];

  return (
    <MaxWithWrapper>
      <div>
        <Slider items={carouselItems} />
      </div>
      <main></main>
    </MaxWithWrapper>
  );
};

export default page;
