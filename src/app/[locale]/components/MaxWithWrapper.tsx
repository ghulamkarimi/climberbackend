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
  const { isMenuActive, isFeaturedActive, isSearchMenuActive } = useSelector(
    (state: RootState) => state.app
  );
  const { isCreateCategorieOpen } = useSelector(
    (state: RootState) => state.categories
  );
  const dispatch = useDispatch();

  return (
    <div className="">
      {/* Background overlay for menu opacity effect */}

      {/* Background overlay for category creation blur effect */}
      {isCreateCategorieOpen && (
        <div className="fixed inset-0 backdrop-blur-lg z-50 pointer-events-none" />
      )}
      
      {/* Content wrapper */}
      <div
        onClick={() => {
          isFeaturedActive && dispatch(setIsFeaturedActive(false));
          isSearchMenuActive && dispatch(setIsSearchMenuActive(false));
        }}
        className={`${
          isMenuActive  /* || isFilterToggleMenuActive */  ? "opacity-50" : ""
        }`}
       
      >
        {children}
      </div>
    </div>
  );
};

export default MaxWithWrapper;
