import React, { useState } from "react";
import { Row, Col } from "antd";
import { ThemeProvider } from "styled-components"

import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
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
          <img
            src={require(`./assets/${theme === 'dark' ? 'sun' : 'moon'}.svg`)}
            width="35"
            height="35"
            alt="theme-toggler"
            onClick={themeToggler}
          />
        </Col>
      </Row>
      <LandingSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
