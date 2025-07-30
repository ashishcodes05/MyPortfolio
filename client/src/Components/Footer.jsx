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
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-telegram text-white text-xl cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transition-all"></i>
          </a>
          <a
            href="https://github.com/ashishcodes05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github text-white text-xl cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transition-all"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ashishcodes05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin text-white text-xl cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transition-all"></i>
          </a>
          <a
            href="https://leetcode.com/u/AshishCodes_IN/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-leetcode-plain text-white text-xl cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transition-all"></i>
          </a>
          <a
            href="https://www.instagram.com/_.ashishverse._/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram text-white text-xl cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transition-all"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
