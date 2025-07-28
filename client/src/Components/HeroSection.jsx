import React, { useEffect, useRef, useState } from "react";
import assets from "../assets/assets.js";
import Header from "./Header";
import gsap from "gsap";
import Loader from "./Loader";

const HeroSection = () => {
  const astroRef = useRef(null);
  useEffect(() => {
    gsap.to(astroRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    })
  },[])
  return(
    <div className="relative h-screen w-full flex items-center justify-center">
      <video
        className="video absolute inset-0 w-full h-full object-cover -z-1 aspect-video"
        src={assets.galaxy}
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <div className="absolute top-0 w-full flex justify-center -z-1 mix-blend-lighten">
        <video
          className="video w-full mt-10 md:-mt-[28%]"
          src={assets.blackhole}
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div className="fixed inset-0 bg-black opacity-30"></div>
      <Header />
      <div className="absolute right-2 flex flex-col space-y-8 md:space-y-8 z-20 px-4 ">
        <i className="bx bxl-telegram text-white text-xl md:text-4xl cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transition-all"></i>
        <i className="bx bxl-github text-white text-xl md:text-4xl cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transition-all"></i>
        <i className="bx bxl-linkedin text-white text-xl md:text-4xl cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transition-all"></i>
        <i className="devicon-leetcode-plain text-white text-xl md:text-4xl cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transition-all"></i>
        <i className="bx bxl-instagram text-white text-xl md:text-4xl cursor-pointer opacity-80 hover:opacity-100 hover:scale-110 transition-all"></i>
      </div>
      
      <div className="w-full flex flex-col md:flex-row items-center space-x-8 text-center space-y-4 px-6 z-10">
        <div className="h-full flex flex-col justify-center items-center max-w-4xl mt-32 flex-1 bg-black/30">
          <h1 className="text-3xl md:text-6xl font-bold text-white gradient">
            Welcome to My Portfolio
          </h1>
          <h2 className="text-xl md:text-4xl text-white mt-2">
            Hi, I'm Ashish
          </h2>
          <p className="mt-6 text-lg md:text-2xl gradient2">
            I'm a Full Stack web developer committed to crafting clean,
            responsive, functional and impactful web experiences.
          </p>
          <button className="mt-6 px-6 py-2 font-bold gradient3 border-2 border-[#300CAB] rounded-lg hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer shadow-sm shadow-[#300CAB] hover:shadow-[#8E56AC]">
            Download CV
          </button>
        </div>
        <div className="mt-8 h-64 w-64 md:w-md md:h-full shadow-lg z-100">
          <img
            className="w-full h-full object-cover"
            src={assets.astronaut}
            alt="astronaut"
            ref={astroRef}
          />
        </div>
      </div>
      
    </div>
  )
};

export default HeroSection;
