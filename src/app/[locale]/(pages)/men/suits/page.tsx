"use client";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import FilterToggleMenu from "../../../components/filterMenu/FilterToggleMenu";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/feature/store/store";
import { setIsFilterToggleMenuActive } from "@/feature/reducers/appSlice";

const page = () => {
  const dispatch = useDispatch();
  const { isFilterToggleMenuActive } = useSelector(
    (state: RootState) => state.app
  );
  return (
    <div className={`md:grid md:grid-cols-12 p-2 `}>
      <div className=" hidden md:col-span-3"></div>
      <div className="md:hidden w-full flex justify-around items-center gap-4 mt-4">
        <button
          onClick={() => {
            dispatch(setIsFilterToggleMenuActive(!isFilterToggleMenuActive));
          }}
          className="   flex items-center justify-between gap-2 w-1/2 px-3  py-1 bg-slate-300 rounded-lg"
        >
          <div className=" flex items-center gap-2">
            <p>
              <IoFilterSharp />
            </p>
            <p>Filter</p>
          </div>
          
          <div>
            {isFilterToggleMenuActive ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
          
        </button>
        <button className="flex items-center gap-2 w-1/2 px-3 py-1 bg-slate-300 justify-between rounded-lg">
          <div className=" flex items-center gap-2">
            <p>
              <IoFilterSharp />
            </p>
            <p>Filter</p>
          </div>
          <div>
            <IoIosArrowDown />
          </div>
        </button>
      </div>
      <div className="  md:col-span-9"></div>
      <div
        className={` md:hidden w-2/4 ${isFilterToggleMenuActive === true ? "flex absolute top-0 left-0 z-50" : "hidden"}`}
      >
        <FilterToggleMenu />
      </div>
    </div>
  );
};

export default page;
