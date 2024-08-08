import "./[locale]/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import ReduxProvider from "@/feature/ReduxProvider";
import { ToastContainer } from "react-toastify";
import { Metadata } from "next";
import { Inter } from "next/font/google";

interface RootLayoutProps {
  children: React.ReactNode;
}
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Climber Fashion",
  description: "Generated by Orosia Team",
};


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          {children}
          <ToastContainer />
        </ReduxProvider>
      </body>
    </html>
  );
}
