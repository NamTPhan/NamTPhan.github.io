import React from "react";
import { Row, Col } from "antd";
import { Flip } from 'react-reveal';

import styled, { withTheme } from "styled-components";
import * as Colors from "../styles/Colors";

import Me from "../assets/avatar.svg";

const H1 = styled.h1`
  color: ${Colors.White};
  font-weight: 800;
`;

const H2 = styled.h2`
  color: ${Colors.White};
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
      backgroundColor: props.theme.primary,
      marginTop: 60,
      paddingTop: "3rem",
      paddingBottom: "5rem",
      textAlign: "center",
    }}
  >
    <Col span={24}>
      <Flip>
      <Avatar style={{ backgroundColor: Colors.WhiteSmoke }} src={Me} alt="avatar" />
      </Flip>
    </Col>
    <Col span={24}>
      <H1>Hello! I'm Nam. Nice to meet you.</H1>
      <Col
        xs={{ span: 24, offset: 0 }}
        sm={{ span: 24, offset: 0 }}
        md={{ span: 12, offset: 6 }}
        lg={{ span: 12, offset: 6 }}
        xl={{ span: 12, offset: 6 }}
      >
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

    </Col>
  </Row>
);

export default withTheme(AboutSection);
