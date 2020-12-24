import React from "react";
import { Row, Col } from "antd";
import Me from "../assets/avatar.svg";
import styled, { withTheme } from "styled-components";

const H1 = styled.h1`
  color: #fff;
  font-weight: 800;
`;

const H2 = styled.h2`
  color: #fff;
  font-weight: 400;
  font-size: 1.2rem;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: 3rem;
  display: flex;
  border-radius: 50%;
`;

const AboutSection = (props) => (
  <Row
    style={{
      backgroundColor: props.theme.primaryBlue,
      padding: "9rem 1.5rem",
      paddingBottom: "11rem",
      textAlign: "center",
    }}
  >
    <Col span={12}>
      <Avatar style={{ backgroundColor: props.theme.primaryBlue }} src={Me} alt="avatar" />
    </Col>
    <Col span={12}>
      <H1>Hello! I'm Nam. Nice to meet you.</H1>
      <H2>
        I'm currently a 4th year Software Engineering student at the Amsterdam
        University of Applied Sciences. I'm a web and mobile app developer.
        Currently I am more of a Front-End developer, but long-term I intend to
        move towards becoming a Full Stack developer. I'm a flexible and
        organized team player. I also like to meet and work with people from all
        over the world to learn more about different cultures. In my spare time
        I like to work on my own projects or watching videos about new tech and
        gadgets.
      </H2>
    </Col>
  </Row>
);

export default withTheme(AboutSection);
