import React, { useState, } from "react";
import { Switch, Row, Col } from "antd";
import { ThemeProvider } from "styled-components";

import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

import { GlobalStyles } from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./components/Themes"

import "antd/dist/antd.css";

const App = () => {
  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />

      <Row>
        <Col style={{ textAlign: 'center' }} span={24}>
          <Switch 
          style={{ marginTop: 20 }} 
          checkedChildren="Dark"
          unCheckedChildren="Light" 
          defaultChecked
          onChange={themeToggler} />
        </Col>
      </Row>

      <LandingSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
