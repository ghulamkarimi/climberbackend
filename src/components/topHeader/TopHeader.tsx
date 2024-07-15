"use client";

import { SE, GB } from "country-flag-icons/react/1x1";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const TopHeader = () => {
  const router = useRouter();
  const t = useTranslations("header");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    flag: <GB className="w-4 rounded-full" />,
    code: "en",
    name: "English",
  });

  const languageList = [
    { flag: <SE className="w-4 rounded-full" />, code: "se", name: "Sweden" },
    { flag: <GB className="w-4 rounded-full" />, code: "en", name: "England" },
  ];

  const dropdownRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleLanguageChange = (language: any) => {
    setSelected(language);
    setOpen(false);
    router.push(`/${language.code}`);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    console.log("Selected language changed:", selected);
  }, [selected]);

  return (
    <div className="flex justify-between items-center p-2 text-white bg-BACKGROUND">
      <div className="flex gap-2.5 text-l">
        <FaInstagram />
        <CiFacebook />
        <FaXTwitter />
      </div>
      <div className="text-xs font-bold">
        <p>{t("topHeader")}</p>
      </div>
      <div>
        <div className="relative w-32">
          <button
            ref={btnRef}
            onClick={() => setOpen((prev) => !prev)} // Toggle Dropdown
            className={`flex items-center justify-center gap-3 focus:outline-none relative py-1 px-4 cursor-pointer text-black bg-white rounded-md border border-blueGray-200 text-xs ${
              open ? "rounded-b-none" : ""
            }`}
          >
            {selected.flag}
            {selected.name}
            {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>

          {open && (
            <div
              ref={dropdownRef}
              className="-mt-px border border-blueGray-200 z-20 w-full bg-PRIMARY_WHITE absolute max-h-300-px overflow-x-auto rounded-b-md shadow-lg"
            >
              {languageList.map((language, index) => (
                <button
                  key={index}
                  className={`flex items-center justify-center gap-3 focus:outline-none w-full text-gray-600 cursor-pointer py-1 px-4 hover:font-semibold hover:text-gray-900 hover:bg-gray-100 ${
                    selected.code === language.code
                      ? "font-semibold text-gray-900 bg-gray-100"
                      : ""
                  }`}
                  onClick={() => handleLanguageChange(language)}
                >
                  {language.flag}
                  {language.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
