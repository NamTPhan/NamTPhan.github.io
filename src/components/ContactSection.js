import React from "react";
import { Row, Col, Alert } from "antd";
import {
  MailOutlined,
  LinkedinOutlined,
  AndroidOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

import Logo from "../assets/logo.png";

const MeLogo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const ContactAlert = styled(Alert)`
  text-align: center;
  margin-bottom: -40px;
  display: block;
  z-index: 99;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);

  .ant-alert-message {
    font-size: 20px;
    font-weight: 600;
  }
  .ant-alert-description {
    font-size: 16px;
    font-weight: 500;
  }
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

const ContactSection = () => (
  <Row>
    <Col xs={0} sm={0} md={2} lg={2} xl={2} />
    <Col xs={24} sm={24} md={20} lg={20} xl={20}>
      <ContactAlert
        message="Get In Touch"
        description="Feel free to contact me whether for a potential project or just to say hi."
        type="warning"
      />
    </Col>
    <Col
      span={24}
      style={{
        backgroundColor: "#1890ff",
        padding: "9rem 5rem 3rem 5rem",
        textAlign: "center",
      }}
    >
      <MeLogo src={Logo} alt="logo" />
      <p>
        <A href="mailto:namtphann@gmail.com">
          <MailOutlined />
        </A>
        <A
          href="https://www.linkedin.com/in/namtphan2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinOutlined />
        </A>
        <A
          href="https://play.google.com/store/apps/developer?id=NPDevelopment+Apps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AndroidOutlined />
        </A>
        <A
          href="https://github.com/NamTPhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubOutlined />
        </A>
      </p>
      <P style={{ marginTop: "50px" }}>
        © 2020 Designed & Developed by <b>Nam Phan</b>
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

export default ContactSection;
