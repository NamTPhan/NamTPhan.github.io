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
        textAlign: "center",
      }}
    >
      <H1>Hello! I'm Nam. Nice to meet you.</H1>
      <H2>
        orem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electron
      </H2>
    </Col>
  </Row>
);

export default AboutSection;
