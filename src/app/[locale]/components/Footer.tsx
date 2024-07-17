"use client";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneFlip,
  FaTwitter,
} from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { useMediaQuery } from "@react-hook/media-query";
import { fadeIn } from "./utils/motion";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { RootState } from "@/feature/store/store";

const Footer = () => {
  const t = useTranslations("footer");
  const isMediumScreen = useMediaQuery("(max-width: 640px)");
  const {isMenuActive}=useSelector((state: RootState) => state.app);
  return (
    <div className="bg-BACKGROUND text-white pt-9 pb-2">
      <div className="pt-4 px-10">
        <div className="flex flex-col gap-4 md:flex md:flex-row justify-between ">
          <motion.div
            className="pb-9"
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ margin: "100px" }}
          >
            <div>
              <div className="flex flex-col items-center pb-2">
                <h1 className="text-2xl font-thin font-SALSA">
                  {t("rightFooterOne")}
                </h1>
                <p className="tracking-[9px]">{t("rightFooterTwo")}</p>
              </div>

              <div className="flex items-center gap-4 my-4 cursor-pointer">
                <p className="text-xl">{t("rightFooterThree")} </p>
                <a href="tel:+46 767148636">
                  <FaPhoneFlip className="text-xl text-yellow-500 animate-bounce hover:animate-none " />
                </a>
              </div>
              <address className="flex flex-col">
                <a
                  href="tel:+46 767148636"
                  className=" text-PRIMARY_GRAY cursor-pointer"
                >
                  {" "}
                  +46 767148636
                </a>
                <a
                  href="mailto:Climberfashion.aa@gmail.com"
                  className="mb-2  text-PRIMARY_GRAY cursor-pointer"
                >
                  Climberfashion.aa@gmail.com
                </a>
                <address className="flex flex-col">
                  <span className=" text-PRIMARY_GRAY">Surbrunnsvägen 2b</span>
                  <span className=" text-PRIMARY_GRAY">
                    73432 Hallstahammar
                  </span>
                  <span className="text-PRIMARY_GRAY">Sweden</span>
                </address>
              </address>
            </div>
          </motion.div>

          <div className="md:hidden border-b-2" />

          <motion.div
            variants={
              isMediumScreen ? fadeIn("left", 0.8) : fadeIn("right", 0.8)
            }
            initial="hidden"
            whileInView="show"
            viewport={{ margin: "100px" }}
          >
            <div>
              <p className="text-2xl">{t("leftFooterOne")}</p>
              <div className="py-4">
                <p className=" text-PRIMARY_GRAY">{t("leftFooterTwo")}</p>
                <p className=" text-PRIMARY_GRAY">{t("leftFooterThree")} </p>
              </div>

              <div className="flex justify-between gap-1 rounded-full w-full py-3 px-4 bg-PRIMARY ">
                <input
                  placeholder="Enter Your Email"
                  className="rounded-full outline-none w-full md:w-[300px] placeholder:px-1 placeholder:font-SALSA bg-transparent text-gra00 "
                  type="email"
                />
                <button className="bg-PRIMARY_BLUE py-1  px-3 rounded-full bg-sky-400 font-bold font-FONT_VIGA text-black">
                  {t("footerButton")}
                </button>
              </div>
              {/* Social-Media-Icons */}
              <div className="flex gap-8 text-xl mt-4 ">
                <a href="">
                  <FaFacebookF className="hover:text-PRIMARY_BLUE" />
                </a>
                <a href="">
                  <FaInstagram className="hover:text-PRIMARY_BLUE" />
                </a>
                <a href="">
                  <IoLogoYoutube className="hover:text-PRIMARY_BLUE" />
                </a>
                <a href="">
                  <FaTwitter className="hover:text-PRIMARY_BLUE" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        <h1 className="text-center py-1 font-SALSA">{t("rightFooterOne")}</h1>

        {/* Copyright-Text */}
        <div className="flex flex-col items-center border-t-2">
          <p className="w-full text-center pt-2">{t("leftFooterFour")}</p>
          <p> {t("leftFooterFive")}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
