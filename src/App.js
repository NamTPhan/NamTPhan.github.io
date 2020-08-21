import React from "react";
import NavBar from "./components/NavBar";
import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";

import "antd/dist/antd.css";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <NavBar />
      <LandingSection />
      <AboutSection />
      <SkillsSection />
    </div>
  );
}

export default App;
