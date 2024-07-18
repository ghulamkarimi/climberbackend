import { setIsFilterToggleMenuActive } from "@/feature/reducers/appSlice";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";

const FilterToggleMenu = () => {
  const dispatch = useDispatch();
  return (
    <div className=" bg-white min-h-screen h-full  w-full">
      <div className=" flex items-center justify-between p-4 text-xl ">
        <h1>FILTER</h1>
        <IoClose
          onClick={() => {
            dispatch(setIsFilterToggleMenuActive(false));
          }}
          className=" font-bold text-2xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default FilterToggleMenu;
