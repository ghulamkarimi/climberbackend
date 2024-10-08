import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import TopHeader from "@/src/app/[locale]/components/topHeader/TopHeader";
import Menu from "@/src/app/[locale]/components/menu/Menu";
import AnnouncementText from "@/src/app/[locale]/components/announcementText/announcementText";
import Footer from "@/src/app/[locale]/components/Footer";
import MaxWithWrapper from "./components/MaxWithWrapper";

interface IRootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
  messages: any;
  className?: string;
}



export default async function LocaleLayout({
  children,
  params: { locale },
  className,
}: IRootLayoutProps) {
  const messages = await getMessages();

  return (
    <div
      className={`relative mx-auto w-full max-w-screen-3xl px-2.5 md:px-5 lg:px-24 ${className}`}
      lang={locale}
    >
      <NextIntlClientProvider messages={messages}>
     
        <div>
          <TopHeader />
        </div>

        <div>
          <Menu />
        </div>
        <MaxWithWrapper className="">
          <div className="">
            <AnnouncementText />
          </div>
          {children}
          <footer className="mt-10">
            <Footer />
          </footer>
        </MaxWithWrapper>
      </NextIntlClientProvider>
    </div>
  );
}
