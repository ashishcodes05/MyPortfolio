import astronaut from "./images/astronaut.png";
import logo from "./svg/logo.svg";
import blackhole from "./videos/blackhole.mp4";
import galaxy from "./videos/galaxy.mp4";
import profile from "./images/profile_pic.jpeg";
import space from "./images/space.jpeg";
import Vistoria from "./images/Vistoria.png";
import MovTick from "./images/MovTick.png";
import ExpenseTracker from "./images/ExpenseTracker.png";
import InsideTheWorld from "./images/InsideTheWorld.png";
import Daily3Goals from "./images/Daily3Goals.png";
import css from "./svg/css.svg";
import html from "./svg/html5.svg";
import javascript from "./svg/javascript.svg";
import react from "./svg/react.svg";
import tailwind from "./svg/tailwindcss.svg";
import nodejs from "./svg/nodedotjs.svg";
import mongodb from "./svg/mongodb.svg";
import express from "./svg/express.svg";
import gemini from "./svg/googlegemini.svg";
import databricks from "./svg/databricks.svg";

const assets = {
  astronaut,
  logo,
  blackhole,
  galaxy,
  profile,
  space,
  projects: [
    {
      title: "MovTick",
      image: MovTick,
      theme: "#E50914",
      description:
        "A movie ticket booking platform that streamlines the process of finding and purchasing tickets for the latest films. Users can browse showtimes, read reviews, and enjoy a seamless checkout experience.",
      skills: [
        { name: "React", logo: "bxl-react" },
        { name: "Node.js", logo: "bxl-nodejs" },
        { name: "Express", logo: "bxl-express-js" },
        { name: "MongoDB", logo: "bxl-mongodb" },
        { name: "Tailwind CSS", logo: "bxl-tailwind-css" },
        { name: "Gemini API", logo: "bxl-googlegemini" },
        {name: "Clerk", logo: "bxl-clerk" },
        {name: "Inngest", logo: "bxl-inngest" },
      ]
    },
    {
      title: "Vistoria",
      image: Vistoria,
      theme: "#1770FF",
      description:
        "A full-stack web application that allows users to post and engage with blogs through comments. It features an integrated AI assistant that suggests creative writing ideas, enhancing the blogging experience.",
      skills: [
        { name: "React", logo: "bxl-react" },
        { name: "Node.js", logo: "bxl-nodejs" },
        { name: "Express", logo: "bxl-express-js" },
        { name: "MongoDB", logo: "bxl-mongodb" },
        { name: "Tailwind CSS", logo: "bxl-tailwind-css" }
      ]
    },
    {
      title: "ExpenseTracker",
      image: ExpenseTracker,
      theme: "#FF6F00",
      description:
        "A personal finance management tool that helps users track their expenses, set budgets, and gain insights into their spending habits.",
      skills: [
        { name: "React", logo: "bxl-react" },
        { name: "HTML", logo: "bxl-html5" },
        { name: "CSS", logo: "bxl-css3" },
        { name: "Local Storage", logo: null }
      ]
    },
    {
      title: "InsideTheWorld",
      image: InsideTheWorld,
      theme: "#615FFF",
      description:
        "An immersive virtual reality experience that takes users on a journey through the cosmos, exploring distant galaxies and celestial phenomena.",
      skills: [
        { name: "React", logo: "bxl-react" },
        { name: "Tailwind CSS", logo: "bxl-tailwind-css" },
        { name: "HTML", logo: "bxl-html5" },
        { name: "Countries API", logo: null }
      ]
    },
    {
      title: "Daily3Goals",
      image: Daily3Goals,
      theme: "#48A300",
      description:
        "A productivity application that helps users set and track their daily goals, promoting better time management and focus.",
      skills: [
        { name: "HTML", logo: "bxl-html5" },
        { name: "CSS", logo: "bxl-css3" },
        { name: "JavaScript", logo: "bxl-javascript" },
        { name: "Local Storage", logo: null }
      ]
    }
  ]
};

export default assets;
