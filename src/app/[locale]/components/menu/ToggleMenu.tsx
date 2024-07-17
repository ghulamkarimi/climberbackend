"use client";

import MensToggleMenu from "./MensToggleMenu";
import WomenToggleMenu from "./WomenToggleMenu";

const ToggleMenu = () => {
  return (
    <div className="w-2/4 min-h-screen bg-slate-100 px-5 sm:px-8 flex flex-col items-around ">
      <div>
        <MensToggleMenu />
      </div>
      <div>
        <WomenToggleMenu />
      </div>
    </div>
  );
};

export default ToggleMenu;
