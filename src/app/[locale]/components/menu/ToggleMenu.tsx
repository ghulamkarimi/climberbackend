import { setIsMenuActive } from "@/feature/reducers/appSlice";
import { useTranslations } from "next-intl";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ToggleMenu = () => {
  const t = useTranslations("header");
  const dispatch = useDispatch();
  return (
    <div className=" w-2/4 min-h-screen h-screen bg-slate-200 drop-shadow-md shadow-md s ">
      <div className=" my-6 mx-4">
        <div className=" flex justify-end text-2xl mb-3">
          <IoMdClose
            onClick={() => {
              dispatch(setIsMenuActive(false));
            }}
            className=" cursor-pointer text-black"
          />
        </div>
        <div className=" border-b-2 border-t-2 border-black">
          <div className=" p-2 flex items-center justify-between">
            <p className=" text-sm uppercase font-bold ">
              {t("toggleMenu.Mens")}
            </p>
            <p className=" text-xl border-l-2 border-black px-3">
                <IoIosArrowUp className=" cursor-pointer  " />
                </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleMenu;