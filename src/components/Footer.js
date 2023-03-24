import React from "react";
import { Row, Col } from "antd";

import styled, { withTheme } from "styled-components";
import * as Colors from "../styles/Colors";

const P = styled.p`
  color: ${Colors.White};
  font-size: 14px;
`;

const ContactSection = (props) => (
  <Row>
    <Col xs={0} sm={0} md={2} lg={2} xl={2} />
    <Col
      span={24}
      style={{
        backgroundColor: props.theme.primary,
        padding: "0 2rem 1rem 2rem",
        textAlign: "center",
      }}
    >
      <P style={{ marginTop: "30px" }}>
        © 2023 Designed & Developed by <b>Nam Phan</b>
        <br />
        Built with{" "}
        <b>
          <a
            href="https://ant.design/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: Colors.White }}
          >
            Ant Design
          </a>
        </b>
      </P>
    </Col>
  </Row>
);

export default withTheme(ContactSection);
