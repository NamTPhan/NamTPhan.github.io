import React, { useState } from "react";

import { LandingSection } from "./components/LandingSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { FooterSection } from "./components/Footer";
import "./index.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    const currentTheme = theme === "dark" ? "light" : "dark";
    setTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  };

  return (
    <div className={theme}>
      <div className='dark:bg-slate-700'>
        <div className='flex flex-row justify-center'>
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
        <FooterSection />
      </div>
    </div>
  );
};

export default App;
