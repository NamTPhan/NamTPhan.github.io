import React, { useState } from "react";

import { LandingSection } from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  const [theme, setTheme] = useState("");

  const themeToggler = () => {
    setTheme("dark");
  };

  return (
    <>
      <div className='flex flex-row'>
        <div className='my-4'>
          <img
            src={require(`./assets/svg/${
              theme === "dark" ? "sun" : "moon"
            }.svg`)}
            width='35'
            height='35'
            alt='theme-toggler'
            onClick={themeToggler}
          />
        </div>
      </div>
      <LandingSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </>
  );
};

export default App;
