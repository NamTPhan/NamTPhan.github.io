import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #141c3a;
  text-align: center;
  margin-top: 45px;
`

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  color: #141c3a;
  text-align: center;
`

const B = styled.b`
color: #1890FF;
`

const LandingSection = () => (
  <Row>
    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
      <H1>Hi, my name is <B>Nam Phan</B></H1>
      <H2>I build things for the web and mobile, and I love what I do.</H2>
    </Col>
  </Row>
);

export default LandingSection;
