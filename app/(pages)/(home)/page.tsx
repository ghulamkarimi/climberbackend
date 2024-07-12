import TopHeader from "@/app/components/topHeader/TopHeader";
import MaxWithWrapper from "@/app/components/MaxWithWrapper";
import Footer from "@/app/components/Footer";

const page = () => {
  return (
    <MaxWithWrapper>
      <TopHeader />
      <main></main>
      <footer className="mt-10">
        <Footer />
      </footer>
    </MaxWithWrapper>
  );
};

export default page;
