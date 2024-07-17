"use client";
import { useRouter } from "next/navigation";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/feature/store/store";
import { setIsMenuActive } from "@/feature/reducers/appSlice";
import ToggleMenu from "./ToggleMenu";

const Menu = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isMenuActive } = useSelector((state: RootState) => state.app);

  return (
    <div >
      <div className={`flex items-center justify-between p-2 ${isMenuActive && "opacity-50"}`}>
        <div className="text-2xl">
          <CiMenuBurger
            onClick={() => {
              dispatch(setIsMenuActive(!isMenuActive));
            }}
            className="cursor-pointer"
          />
        </div>
        <div>
          <img
            alt="ClimberLogo"
            src="/logo/logo.png"
            className="w-10 h-10 sm:w-20 sm:h-20"
          />
        </div>
        <div className="flex items-center justify-center gap-3 text-2xl">
          <CiSearch className="cursor-pointer" />
          <MdOutlineManageAccounts
            className="cursor-pointer"
            onClick={() => {
              router.push("/auth");
            }}
          />
          <IoBagOutline className="cursor-pointer" />
        </div>
      </div>
      {isMenuActive && (
        <div className="absolute z-50 top-0 left-0 w-full h-full">
          <ToggleMenu />
        </div>
      )}
    </div>
  );
};

export default Menu;