"use client";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useTranslations } from "next-intl";
import { useState } from "react";

const WomenToggleMenu = () => {
  const [isWomenMenuOpen, setIsWomenMenuOpen] = useState(false);
  const [isCategoriesWomenOpen, setIsCategoriesWomenOpen] = useState(false);
  const t = useTranslations("header");
  

  return (
    <div className="">
      <div className=" w-full">
        <div className="border-b-2 border-t-2 border-black">
          <div className="p-2 flex items-center justify-between">
            <p className="text-sm uppercase font-bold ">
              {t("toggleMenu.women")}
            </p>
            <div
              className="text-xl border-l-2 border-black px-3 cursor-pointer"
              onClick={() => setIsWomenMenuOpen(!isWomenMenuOpen)}
            >
              {isWomenMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 flex flex-col justify-center items-center ${
              isWomenMenuOpen
                ? "max-h-96 opacity-100 py-2   "
                : "max-h-0 opacity-0 "
            }`}
          >
            <div className="border-2 text-xs font-bold border-black sm:w-1/2 mt-3 sm:px-4 px-2  flex items-center justify-between">
              <p className="p-1  text-left">{t("toggleMenu.womenCategories.categories")}</p>
              <p
                onClick={() => {
                  setIsCategoriesWomenOpen(!isCategoriesWomenOpen);
                }}
                className="text-xl border-l-2 border-black px-3 cursor-pointer"
              >
                {isCategoriesWomenOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </p>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isCategoriesWomenOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col items-center justify-center gap-2 mt-3 py-2 text-xs sm:text-sm">
                <div className="categories">
                  {t("toggleMenu.womenCategories.Suit")}
                </div>
                <div className="categories">
                  {t("toggleMenu.womenCategories.Shirt")}
                </div>
                <div className="categories">
                  {t("toggleMenu.womenCategories.Underdress")}
                </div>
                <div className="categories">
                  {t("toggleMenu.womenCategories.pants")}
                </div>
                <div className="categories">
                  {t("toggleMenu.womenCategories.socks")}
                </div>
                <div className="categories">
                  {t("toggleMenu.womenCategories.Shoes")}
                </div>
                <div className="categories">
                  {t("toggleMenu.womenCategories.Ties")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenToggleMenu;
