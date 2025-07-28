import React from "react";
import assets from "../assets/assets.js";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10 flex items-center justify-between bg-transparent py-6 px-6 md:px-12">
      <div className="flex items-baseline gap-2 bg-opacity-50 rounded-lg justify-between">
        <h1 className="text-xl md:text-4xl font-bold text-white gradient">
          AshishCodes
        </h1>
      </div>
      <div>
        <p className="flex items-center gap-2 text-sm md:text-lg">
          <i className="bx bxl-gmail gradient3 text-xl md:text-4xl cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transition-all"></i>
          <span className="gradient3">ashishcodes05@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
