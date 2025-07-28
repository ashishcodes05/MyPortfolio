import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection.jsx";
import About from "./About";
import Loader from "./Loader";
import assets from "../assets/assets.js";
import Skill from "./Skill";
import CardSection from "./CardSection";
import ProjectSection from "./ProjectSection";
import Form from "./Form";
import Footer from "./Footer";

const Layout = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return isLoaded ? (
    <div className="min-h-screen">
      <HeroSection />

      <div className="min-h-screen bg-[#101010]">

        {/* Actual content */}
        <div className="z-10">
          <CardSection />
          <About />
          <ProjectSection />
          <Skill />
          <Form />
          <Footer />
        </div>
      </div>
    </div>
  ) : (
    <Loader onComplete={() => setIsLoaded(true)} />
  );
};

export default Layout;
