import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

const H1 = styled.h1`
  color: #fff;
  font-weight: 800;
`;

const H2 = styled.h2`
  color: #fff;
  font-weight: 400;
  font-size: 1.2rem;
`;

const AboutSection = () => (
  <Row>
    <Col
      span={24}
      style={{
        backgroundColor: "#1890ff",
        padding: "9rem 1.5rem",
        paddingBottom: "11rem",
        textAlign: "center",
      }}
    >
      <H1>Hello! I'm Nam. Nice to meet you.</H1>
      <H2>
        I'm currently a 4th year software engineering student at the Amsterdam
        University of Applied Sciences. I'm a web and mobile app developer.
        Currently I am more of a Front-End developer, but long-term I intend to
        move towards becoming a Full Stack developer. I'm also a flexible and
        organized team player. I also like to meet or work with people from all
        over the world to learn more about different cultures. In my spare time
        I like to work on my own projects or watching videos about new tech and
        gadgets. See below the tools that I commonly use.
      </H2>
    </Col>
  </Row>
);

export default AboutSection;
