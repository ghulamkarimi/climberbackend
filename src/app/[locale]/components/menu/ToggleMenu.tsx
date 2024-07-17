"use client";

import { IoMdClose } from "react-icons/io";
import MensToggleMenu from "./MensToggleMenu";
import WomenToggleMenu from "./WomenToggleMenu";
import { useDispatch, useSelector } from "react-redux";
import { setIsMenuActive } from "@/feature/reducers/appSlice";
import { RootState } from "@/feature/store/store";

const ToggleMenu = () => {
  const {isMenuActive}=useSelector((state:RootState)=>state.app)
  const dispatch = useDispatch()
  
  return (
    <div className={`w-2/4 px-3 py-4 min-h-screen h-full bg-slate-200 ${isMenuActive ? "":""}  `}>
      <div>
      <div className="flex justify-end text-2xl mb-3">
          <IoMdClose
            onClick={() => {
              dispatch(setIsMenuActive(false));
            }}
            className="cursor-pointer text-black"
          />
        </div>
      </div>
       <div>
        <MensToggleMenu />
      </div> 
       <div>
        <WomenToggleMenu />

      </div> 
    </div>
  );
};

export default ToggleMenu;
