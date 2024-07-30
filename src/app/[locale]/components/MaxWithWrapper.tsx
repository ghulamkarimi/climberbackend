"use client"; 



import { setIsFeaturedActive, setIsSearchMenuActive } from "@/feature/reducers/appSlice";
import { RootState } from "@/feature/store/store";
import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";

interface IMaxWithWrapperProps {
  children: ReactNode;
  className?: string;
}

const MaxWithWrapper = ({ children, className }: IMaxWithWrapperProps) => {
  const { isMenuActive, isAddCartMenuActive, isFilterToggleMenuActive,isFeaturedActive,isSearchMenuActive } = useSelector(
    (state: RootState) => state.app
  );
const dispatch = useDispatch()
  return (
    <div
    onClick={()=>{
      isFeaturedActive&&dispatch(setIsFeaturedActive(false))
      isSearchMenuActive&&dispatch(setIsSearchMenuActive(false))
    }}
      className={`mx-auto w-full max-w-screen-3xl px-2.5 ${
        isMenuActive  /* || isFilterToggleMenuActive */  ? "opacity-50" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default MaxWithWrapper;
