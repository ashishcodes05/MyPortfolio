import React from "react";
import assets from "../assets/assets.js";

const About = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8 rounded-3xl flex flex-col items-center">
        <h1 className="text-4xl text-white font-bold my-8 gradient px-24">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 gap-8 md:gap-12 border-2 border-fuchsia-500 rounded-3xl shadow-lg shadow-[#300CAB] py-12">
          <div className="flex justify-center h-48 w-48 md:h-64 md:w-64 overflow-hidden border-fuchsia-500 border-2 rounded-full shadow-lg shadow-[#300CAB]">
            <img
              src={assets.profile}
              alt=""
              className="rounded-full h-full w-full object-cover shadow-lg"
            />
          </div>
          <div className="ml-8 max-w-2xl">
            <p className=" mt-4 gradient2 text-lg md:text-xl">
              I'm Ashish Kumar Sahu, a B.Tech student in Computer Science
              and Engineering at IIIT Bhubaneswar, graduating in 2027.
              Currently, I'm deeply focused on refining my full-stack
              development skills while solving real-world problems through
              technology. I enjoy exploring complex tasks, understanding their
              core requirements, and applying my technical knowledge to develop
              efficient, meaningful solutions. With a growth mindset, I'm
              consistently pushing my boundaries—learning, experimenting, and
              evolving as a developer every day. I would love to share the projects
              I've worked on, showcasing my skills and dedication to creating
              impactful web experiences.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
