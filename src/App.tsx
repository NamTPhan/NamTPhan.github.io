import React, { useState } from "react";
import { Row, Col } from "antd";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/themes";
import GlobalStyle from "./styles/global-style";

import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

import "antd/dist/reset.css";

const App = () => {
  const [theme, setTheme] = useState<DefaultTheme>(lightTheme);

  const themeToggler = () => {
    setTheme(theme.title === "light" ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Row>
        <Col style={{ textAlign: "center", paddingTop: 20 }} span={24}>
          <img
            src={require(`./assets/${
              theme.title === "dark" ? "sun" : "moon"
            }.svg`)}
            width='35'
            height='35'
            alt='theme-toggler'
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
};

export default App;
