"use client"; 



import { RootState } from "@/feature/store/store";
import { ReactNode } from "react";
import { useSelector } from "react-redux";

interface IMaxWithWrapperProps {
  children: ReactNode;
  className?: string;
}

const MaxWithWrapper = ({ children, className }: IMaxWithWrapperProps) => {
  const { isMenuActive, isFilterToggleMenuActive } = useSelector(
    (state: RootState) => state.app
  );

  return (
    <div
      className={`mx-auto w-full max-w-screen-3xl px-2.5 ${
        isMenuActive  /* || isFilterToggleMenuActive */  ? "opacity-50" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default MaxWithWrapper;
