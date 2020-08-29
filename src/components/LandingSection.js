import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

import Me from "../assets/avatar.svg";
import Laptop from "../assets/setup.png";

const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #141c3a;
  text-align: center;
  margin-top: 45px;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #141c3a;
  text-align: center;
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

const Setup = styled.img`
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

const LandingSection = () => (
  <Row>
    <Col span={24}>
      <H1>
        Hi, my name is <b style={{ color: "#1890ff" }}>Nam Phan</b>
      </H1>
      <H2>
        I'm a Software Engineer and I build things for the web and mobile, and I
        love what I do.
      </H2>
      <br />
      <Avatar src={Me} alt="avatar" />
    </Col>
    <Col offset={5} span={14}>
      <Setup src={Laptop} alt="laptop" />
    </Col>
  </Row>
);

export default LandingSection;
