"use client";

import { setIsFilterToggleMenuActive } from "@/feature/reducers/appSlice";
import { RootState } from "@/feature/store/store";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const FilterToggleMenu = () => {
  const { isFilterToggleMenuActive } = useSelector(
    (state: RootState) => state.app
  );
  const dispatch = useDispatch();
  const [isAvailabilityActive, setIsAvailabilityActive] = useState(false);
  
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
      <div>
        <div className="uppercase font-light mt-4 flex items-center justify-between mx-4">
          <p>Availability</p>
          <div className=" cursor-pointer" onClick={() => setIsAvailabilityActive(!isAvailabilityActive)}>
            {isAvailabilityActive ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
        </div>
        <div className={`${isAvailabilityActive ? "flex flex-col items-start mx-4 mt-3" : "hidden"}`}>
          <div className="flex items-center gap-3">
            <input type="checkbox" id="in-stock" />
            <label htmlFor="in-stock">In stock (???)</label>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <input type="checkbox" id="out-of-stock" />
            <label htmlFor="out-of-stock">Out of stock (???)</label>
          </div>
        </div>
      </div>
      <div className="border-b-2 border-black mx-4 mt-4" />
    </div>
  );
};

export default FilterToggleMenu;
