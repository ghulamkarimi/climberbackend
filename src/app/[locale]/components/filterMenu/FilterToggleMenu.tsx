"use client";

import { setIsFilterToggleMenuActive } from "@/feature/reducers/appSlice";
import { RootState } from "@/feature/store/store";
import { useState } from "react";

import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import SizeSection from "./SizeSection";
import AvailabilitySection from "./AvailabilitySection";
import ColorsSection from "./ColorsSection";




const FilterToggleMenu = () => {
  const { isFilterToggleMenuActive } = useSelector(
    (state: RootState) => state.app
  );
  const dispatch = useDispatch();
  const [isAvailabilityActive, setIsAvailabilityActive] = useState(false);
  const [isSizeActive, setIsSizeActive] = useState(false);
  const [isColorActive, setIsColorActive] = useState(false);

  return (
    <div
      className={`bg-white min-h-screen h-full absolute top-0 left-0 z-50 w-2/4 opacity-100`}
    >
      <div className="flex items-center justify-between font-light p-4 text-xl uppercase">
        <h1>FILTER</h1>
        <IoClose
          onClick={() => {
            dispatch(setIsFilterToggleMenuActive(false));
          }}
          className="font-bold text-2xl cursor-pointer"
        />
      </div>
      <div className="border-b-2 border-black mx-4" />
      
      {/* Availability Section */}
       <AvailabilitySection isAvailabilityActive={isAvailabilityActive} setIsAvailabilityActive={setIsAvailabilityActive}/>
      <div className="border-b-2 border-black mx-4 mt-4" />
      
      {/* Size Section */}
    <SizeSection isSizeActive={isSizeActive} setIsSizeActive ={setIsSizeActive}/>
      <div className="border-b-2 border-black mx-4 mt-4" />
      {/* Colors Section */}
      <ColorsSection isColorActive={isColorActive} setIsColorActive={setIsColorActive}/>
    </div>
  );
};

export default FilterToggleMenu;
