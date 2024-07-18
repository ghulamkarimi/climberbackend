"use client";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


interface IColorsSection{
    isColorActive:boolean;
    setIsColorActive:(isColorActive:boolean)=>void
}

const ColorsSection = ({isColorActive,setIsColorActive}:IColorsSection) => {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FFFF33",
    "#FF33A1",
    "#33FFF7",
  ];

  return (
    <div>
       < div className="flex items-center justify-between font-light p-4 text-sm uppercase">
        <h1>Color</h1>
        <div className="cursor-pointer" onClick={() => setIsColorActive(!isColorActive)}>
          {isColorActive ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
      </div>
      <div className={`${isColorActive === true ? "flex flex-wrap justify-around px-4 mt-4 cursor-pointer gap-3" : "hidden"}`}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: color }}
            className="w-10 h-10 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default ColorsSection;
