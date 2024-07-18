'use client'

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface IAvailabilitySection{
    isAvailabilityActive:boolean;
    setIsAvailabilityActive:(isAvailabilityActive:boolean)=>void
}





const AvailabilitySection = ({isAvailabilityActive,setIsAvailabilityActive}:IAvailabilitySection) => {
    return (
        <div>
        <div className="uppercase font-light mt-4 flex items-center justify-between mx-4">
          <p>Availability</p>
          <div className="cursor-pointer" onClick={() => setIsAvailabilityActive(!isAvailabilityActive)}>
            {isAvailabilityActive ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
        </div>
        <div className={`${isAvailabilityActive ? "flex flex-col items-start mx-4 mt-3" : "hidden"}`}>
          <div className="flex items-center text-xs gap-3">
            <input type="checkbox" id="in-stock" />
            <label htmlFor="in-stock">In stock (???)</label>
          </div>
          <div className="flex items-center text-xs gap-3 mt-3">
            <input type="checkbox" id="out-of-stock" className="text-xl" />
            <label htmlFor="out-of-stock">Out of stock (???)</label>
          </div>
        </div>
      </div>
    );
}

export default AvailabilitySection;