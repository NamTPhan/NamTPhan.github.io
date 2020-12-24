import React from "react";
import { Row, Col } from "antd";

import styled, { withTheme } from "styled-components";

const MeLogo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const A = styled.a`
  color: #fff;
  margin: 0 8px;

  span {
    font-size: 35px;
  }
`;

const P = styled.p`
  color: #fff;
  font-size: 14px;
`;

const ContactSection = (props) => (
  <Row>
    <Col xs={0} sm={0} md={2} lg={2} xl={2} />
    <Col
      span={24}
      style={{
        backgroundColor: props.theme.primaryBlue,
        padding: "0 2rem 1rem 2rem",
        textAlign: "center",
      }}
    >
      <P style={{ marginTop: "30px" }}>
        © 2021 Designed & Developed by <b>Nam Phan</b>
        <br />
        Built with{" "}
        <b>
          <a
            href="https://ant.design/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff" }}
          >
            Ant Design
          </a>
        </b>
      </P>
    </Col>
  </Row>
);

export default withTheme(ContactSection);