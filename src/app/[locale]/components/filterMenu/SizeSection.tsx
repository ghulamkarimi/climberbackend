"use client";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export interface ISizeSectionProps {
  isSizeActive: boolean;
  setIsSizeActive: (isSizeActive: boolean) => void;
}

const sizes = [
  { id: "s27", label: "S (27)" },
  { id: "m27", label: "M (27)" },
  { id: "l27", label: "L (27)" },
  { id: "xl27", label: "XL (27)" },
  { id: "xxl27", label: "XXL (27)" },
  { id: "19/21", label: "19/21 (1)" },
  { id: "22/24", label: "22/24 (1)" },
  { id: "25/27", label: "25/27 (1)" },
  { id: "28/30", label: "28/30 (2)" },
  { id: "31/33", label: "31/33 (2)" },
  { id: "34/36", label: "34/36 (2)" },
  { id: "37/39", label: "37/39 (2)" },
  { id: "40/42", label: "40/42 (2)" },
  { id: "46/48", label: "46/48 (1)" },
  { id: "48", label: "48 (1)" },
  { id: "50", label: "50 (1)" },
];

const SizeSection = ({ isSizeActive, setIsSizeActive }: ISizeSectionProps) => {
  return (
    <div>
      <div className="uppercase font-light mt-4 flex items-center justify-between mx-4">
        <p>Size</p>
        <div className="cursor-pointer" onClick={() => setIsSizeActive(!isSizeActive)}>
          {isSizeActive ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
      </div>
      <div className={`${isSizeActive ? "flex flex-col items-start mx-4 mt-3" : "hidden"}`}>
        {sizes.map(size => (
          <div key={size.id} className="flex items-center text-xs gap-3 mt-3">
            <input type="checkbox" id={size.id} />
            <label className="cursor-pointer" htmlFor={size.id}>{size.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeSection;
