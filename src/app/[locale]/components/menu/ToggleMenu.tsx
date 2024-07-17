"use client";

import MensToggleMenu from "./MensToggleMenu";
import WomenToggleMenu from "./WomenToggleMenu";

const ToggleMenu = () => {
  return (
    <div className="w-2/4 min-h-screen h-screen bg-slate-200 drop-shadow-md shadow-md s ">
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
