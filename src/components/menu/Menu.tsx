"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import ToggleMenu from "./ToggleMenu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/feature/store/store";
import { setIsMenuActive } from "@/feature/reducers/appSlice";

const Menu = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isMenuActive } = useSelector((state: RootState) => state.app);
  return (
    <div className=" ">
      <div className=" flex items-center justify-between p-2">
        <div className=" text-2xl">
          <CiMenuBurger
            onClick={() => {
              dispatch(setIsMenuActive(!isMenuActive));
            }}
            className=" cursor-pointer"
          />
        </div>
        <div>
          <Image
            alt="ClimberLogo"
            src="/logo/ClimberLogo.png"
            width={50}
            height={50}
          />
        </div>
        <div className=" flex items-center justify-center gap-3 text-2xl">
          <CiSearch className=" cursor-pointer" />
          <MdOutlineManageAccounts
            className=" cursor-pointer"
            onClick={() => {
              router.push("/auth");
            }}
          />
          <IoBagOutline className=" cursor-pointer" />
        </div>
      </div>
      <div className={` w-4/5 absolute z-50 top-0 left-0 transition-all duration-500 ${isMenuActive === false ? "hidden " : "flex"}`}>
        <ToggleMenu />
      </div>
    </div>
  );
};

export default Menu;
