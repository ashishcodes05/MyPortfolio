import React from "react";

const CardSection = () => {
  return (
    <div className="flex flex-row items-center justify-between flex-wrap max-w-6xl px-2 py-8 rounded-3xl mx-auto space-y-6">
      <div className="flex items-center flex-1/2 space-x-2 text-shadow-7xs text-shadow-[#300CAB] px-4">
        <div className="flex justify-center items-center flex-1/2 space-x-2 text-shadow-7xs text-shadow-[#300CAB]">
          <h1 className="text-3xl md:text-5xl font-extrabold gradient">7+</h1>{" "}
          <span className="text-md font-medium gradient2">
            Technical <br /> Skills
          </span>
        </div>
        <div className="flex justify-center items-center flex-1/2 space-x-2 text-shadow-7xs text-shadow-[#300CAB]">
          <h1 className="text-3xl md:text-5xl font-extrabold gradient">10+</h1>{" "}
          <span className="text-md font-medium gradient2">
            Projects <br /> Completed
          </span>
        </div>
      </div>
      <div className="flex items-center flex-1/2 space-x-2 text-shadow-7xs text-shadow-[#300CAB] px-4">
        <div className="flex justify-center items-center flex-1/2 space-x-2 text-shadow-7xs text-shadow-[#300CAB]">
          <h1 className="text-3xl font-extrabold gradient">500+</h1>{" "}
          <span className="text-md font-medium gradient2">
            Problems <br /> Solved
          </span>
        </div>
        <div className="flex justify-center items-center flex-1/2 space-x-2 text-shadow-7xs text-shadow-[#300CAB]">
          <h1 className="text-3xl md:text-5xl font-extrabold gradient">1000+</h1>{" "}
          <span className="text-md font-medium gradient2">
            Hours <br /> Contributed
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
