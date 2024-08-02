"use client";
import { useRouter } from "next/navigation";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { IoAddOutline, IoBagOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/feature/store/store";
import { setIsAddCartMenuActive, setIsMenuActive, setIsSearchMenuActive } from "@/feature/reducers/appSlice";
import ToggleMenu from "./ToggleMenu";
import SearchMenu from "./searchMenu/SearchMenu";

const Menu = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isMenuActive, isSearchMenuActive,isAddCartMenuActive } = useSelector(
    (state: RootState) => state.app
  );
  const { userInfo } = useSelector(
    (state: RootState) => state.users
  );


  return (
    <div>
      <div className={`w-full ${isSearchMenuActive === true ? "hidden" : "flex"}`}>
        <div
          className={`w-full flex items-center justify-between p-2 ${
            isMenuActive && "opacity-50"
          }`}
        >
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
            <CiSearch
            onClick={()=>{
              dispatch(setIsSearchMenuActive(!isMenuActive))
            }}
            className="cursor-pointer" />
            <MdOutlineManageAccounts
              className="cursor-pointer"
              onClick={() => {
                router.push("/auth");
              }}
            />
            <IoBagOutline
            onClick={()=>{
              dispatch(setIsAddCartMenuActive(!isAddCartMenuActive))
            }}
            className="cursor-pointer" />
           {
            userInfo.isAdmin&& <IoAddOutline />
           }
          </div>
        </div>
        {isMenuActive && (
          <div className="absolute z-50 top-0 left-0 w-full h-full">
            <ToggleMenu />
          </div>
        )}
      </div>
      <div className={` mb-2 ${isSearchMenuActive === true ? "flex" : "hidden"}`}>
        <SearchMenu />
      </div>
    </div>
  );
};

export default Menu;
