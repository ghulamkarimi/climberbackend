import Footer from "@/src/components/Footer";
import MaxWithWrapper from "@/src/components/MaxWithWrapper";
import AnnouncementText from "@/src/components/announcementText/announcementText";
import Slider from "@/src/components/carousel/Carousel";
import Menu from "@/src/components/menu/Menu";
import TopHeader from "@/src/components/topHeader/TopHeader";

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
        <TopHeader />
      </div>
      <div>
        <Menu />
      </div>
      <div className="" >
        <AnnouncementText />
      </div>
      <div>
        <Slider items={carouselItems} />
      </div>
      <main></main>
      <footer className="mt-10">
        <Footer />
      </footer>
    </MaxWithWrapper>
  );
};

export default page;