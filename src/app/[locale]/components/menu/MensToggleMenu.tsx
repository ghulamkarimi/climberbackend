"use client";

import { IoMdClose, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { setIsMenuActive } from "@/feature/reducers/appSlice";
import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import { useState } from "react";

const MensToggleMenu = () => {
  const [isHerrMenuOpen, setIsHerrMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const t = useTranslations("header");
  const dispatch = useDispatch();

  return (
    <div className=" w-full">
      <div className="my-6 mx-4 w-full">
        <div className="flex justify-end text-2xl mb-3">
          <IoMdClose
            onClick={() => {
              dispatch(setIsMenuActive(false));
            }}
            className="cursor-pointer text-black"
          />
        </div>
        <div className="border-b-2 border-t-2 border-black">
          <div className="p-2 flex items-center justify-between">
            <p className="text-sm uppercase font-bold ">
              {t("toggleMenu.Mens")}
            </p>
            <div
              className="text-xl border-l-2 border-black px-3 cursor-pointer"
              onClick={() => setIsHerrMenuOpen(!isHerrMenuOpen)}
            >
              {isHerrMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-500 flex flex-col justify-center items-center ${
              isHerrMenuOpen
                ? "max-h-96 opacity-100 py-2   "
                : "max-h-0 opacity-0 "
            }`}
          >
            <div className="border-2 text-xs font-bold border-black sm:w-1/2 mt-3 sm:px-4 px-2  flex items-center justify-between">
              <p className="p-1  text-left">{t("toggleMenu.mensCategories.categories")}</p>
              <p
                onClick={() => {
                  setIsCategoriesOpen(!isCategoriesOpen);
                }}
                className="text-xl border-l-2 border-black px-3 cursor-pointer"
              >
                {isCategoriesOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </p>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isCategoriesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col items-center justify-center gap-2 mt-3 py-2 text-xs sm:text-sm">
                <div className="cursor-pointer uppercase hover:border-b-2 border-black">
                  {t("toggleMenu.mensCategories.Suit")}
                </div>
                <div className="cursor-pointer uppercase hover:border-b-2 border-black">
                  {t("toggleMenu.mensCategories.Shirt")}
                </div>
                <div className="cursor-pointer uppercase hover:border-b-2 border-black">
                  {t("toggleMenu.mensCategories.Underdress")}
                </div>
                <div className="cursor-pointer uppercase hover:border-b-2 border-black">
                  {t("toggleMenu.mensCategories.pants")}
                </div>
                <div className="cursor-pointer uppercase hover:border-b-2 border-black">
                  {t("toggleMenu.mensCategories.socks")}
                </div>
                <div className="cursor-pointer uppercase hover:border-b-2 border-black">
                  {t("toggleMenu.mensCategories.Shoes")}
                </div>
                <div className="cursor-pointer uppercase hover:border-b-2 border-black">
                  {t("toggleMenu.mensCategories.Ties")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MensToggleMenu;
