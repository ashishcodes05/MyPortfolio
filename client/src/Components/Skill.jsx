import React from "react";

const Skill = () => {
  const skills = [
    { name: "HTML", logo: "bxl-html5" },
    { name: "CSS", logo: "bxl-css3" },
    { name: "JavaScript", logo: "bxl-javascript" },
    { name: "React", logo: "bxl-react" },
    { name: "Node.js", logo: "bxl-nodejs" },
    { name: "Express", logo: "bxl-express-js" },
    { name: "MongoDB", logo: "bxl-mongodb" },
    { name: "Tailwind CSS", logo: "bxl-tailwind-css" },
    { name: "Git", logo: "bxl-git" },
    { name: "GitHub", logo: "bxl-github" },
    { name: "Bootstrap", logo: "bxl-bootstrap" },
    { name: "Material UI", logo: "bxl-material-ui" },
    { name: "PostMan", logo: "bxl-postman" },
    { name: "Java", logo: "bxl-java" },
    { name: "C++", logo: "bxl-cplusplus" },
  ];
  return (
    <div className=" py-16 flex flex-col items-center bg-[#0B0B0B]">
        <h1 className="text-5xl font-bold gradient2 mb-16">My Skills</h1>
      <div className="flex flex-wrap justify-center items-center px-8 space-x-6 space-y-8 max-w-5xl mx-auto">
        <i className="devicon-html5-plain-wordmark colored text-4xl md:text-7xl"></i>
        <i className="devicon-css3-plain-wordmark colored text-4xl md:text-7xl"></i>
        <i className="devicon-javascript-plain colored text-4xl md:text-7xl"></i>
        <i className="devicon-nodejs-plain-wordmark colored text-4xl md:text-7xl"></i>
        <i className="devicon-express-original-wordmark colored text-4xl md:text-7xl"></i>
        <i className="devicon-mongodb-plain-wordmark colored text-4xl md:text-7xl"></i>
        <i className="devicon-tailwindcss-plain colored text-4xl md:text-7xl"></i>
        <i className="devicon-git-plain-wordmark colored text-4xl md:text-7xl"></i>
        <i className="devicon-github-plain text-4xl md:text-7xl" style={{ color: "white"}}></i>
        <i className="devicon-bootstrap-plain-wordmark colored text-4xl md:text-7xl"></i>
        <i className="devicon-materialui-plain colored text-4xl md:text-7xl"></i>
        <i className="devicon-postman-plain-wordmark colored text-4xl md:text-7xl"></i>
        <i className="devicon-java-plain-wordmark colored text-4xl md:text-7xl"></i>
        <i className="devicon-react-original-wordmark colored text-4xl md:text-7xl"></i>
      </div>
    </div>
  );
};

export default Skill;
