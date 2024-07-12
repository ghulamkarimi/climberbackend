import TopHeader from "@/app/components/topHeader/TopHeader";
import Footer from "@/app/components/Footer";

const page = () => {
  return (
    <div>
      <TopHeader />
      <main></main>
      <footer className="mt-10">
        <Footer />
      </footer>
    </div>
  );
};

export default page;
