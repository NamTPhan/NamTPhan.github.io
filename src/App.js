import React, { useState } from "react";
import { Row, Col } from "antd";
import { ThemeProvider } from "styled-components"

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
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />

      <Row>
        <Col
          style={{ textAlign: 'center', paddingTop: 20 }}
          span={24}
        >
          {
            theme === 'dark'
              ? (
                <img
                  src={require("./assets/sun.svg")}
                  width="35"
                  height="35"
                  alt="sun"
                  onClick={themeToggler}
                />
              )
              : (
                <img
                  src={require("./assets/moon.svg")}
                  width="35"
                  height="35"
                  alt="sun"
                  onClick={themeToggler}
                />
              )
          }
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
