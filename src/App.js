import React, { useState, } from "react";
import { Switch, Row, Col } from "antd";
import styled, { ThemeProvider } from "styled-components";

import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

import { GlobalStyles } from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./components/Themes"

import "antd/dist/antd.css";

const App = () => {
  const [theme, setTheme] = useState('dark');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />

      <Row>
        <Col style={{ textAlign: 'center' }} span={24}>
          <Switch style={{ marginTop: 20 }} defaultChecked onChange={themeToggler} />
        </Col>
      </Row>

      <LandingSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </ThemeProvider>
  );
}

export default App;
