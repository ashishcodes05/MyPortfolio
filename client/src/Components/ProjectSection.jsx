import React from "react";
import assets from "../assets/assets.js";

const ProjectSection = () => {
  return (
    <div className="min-h-screen py-16 flex flex-col items-center bg-[#0B0B0B]">
      <h1 className="text-4xl text-white font-bold my-8 gradient px-4 text-center">
        Latest Projects
      </h1>

      <div className="relative w-full flex flex-col items-center">
        {/* Vertical Timeline Line */}
        <div className="max-md:hidden absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#008baa] via-[#6600c5] to-[#2a46ff] -translate-x-1/2 z-0" />

        {assets.projects.map((project, index) => (
          <div className="w-full relative" key={index}>
            <div
              className={`flex md:flex-row ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              } flex-col justify-between w-full px-8 mt-6 items-center gap-6 relative`}
            >
              {/* Project Image */}
              <a
                href={project.live}
                className="w-[280px] md:w-[460px] flex justify-center border-2 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg z-10 cursor-pointer"
                style={{ borderColor: project.theme,
                  boxShadow: `0 0 20px ${project.theme}`
                 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover h-full"
                />
              </a>

              {/* Timeline Dot */}
              <a
                href={project.github}
                className={`max-md:hidden absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-4 h-4 bg-white border-4 rounded-full hover:scale-125 transition-transform duration-300 cursor-pointer`}
                style={{
                  borderColor: project.theme,
                }}
              />

              {/* Horizontal Line */}
              <div
                className={`max-md:hidden absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-white w-lg z-0 ${
                  index % 2 !== 0
                    ? "right-[51%] translate-x-[calc(100%+16px)]"
                    : "left-[51%] -translate-x-[calc(100%+16px)]"
                }`}
              />

              {/* Project Text */}
              <div className="md:w-1/2 flex flex-col items-center md:items-start text-center max-md:mb-16 md:text-left z-10">
                <h2
                  className="text-2xl font-bold px-8 flex items-center gap-4"
                  style={{ color: project.theme }}
                >
                  {project.title}
                  <a href={project.live} className="text-gray-400 text-xl cursor-pointer hover:scale-125 transition-all duration-300 hover:text-white"><i className="bx bx-link-external"></i> </a>
                  <a href={project.github} className="text-gray-400 text-xl cursor-pointer hover:scale-125 transition-all duration-300 hover:text-white"><i className="bx bxl-github"></i></a>
                </h2>
                <p className="text-gray-400 mt-2 px-8 text-start">{project.description}</p>
                {project.skills && project.skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2 px-8">
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-gray-300 py-1 px-4 rounded-full text-sm flex items-center gap-2 hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                      >
                        <i className={`bx ${skill.logo}`}></i>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
