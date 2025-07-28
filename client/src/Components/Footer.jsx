import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0f172a] text-white py-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ashish Kumar Sahu. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <i className="bx bxl-telegram text-white text-xl cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transition-all"></i>
          <i className="bx bxl-github text-white text-xl cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transition-all"></i>
          <i className="bx bxl-linkedin text-white text-xl cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transition-all"></i>
          <i className="devicon-leetcode-plain text-white text-xl cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transition-all"></i>
          <i className="bx bxl-instagram text-white text-xl cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transition-all"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
