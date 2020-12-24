import React from "react";
import { Row, Col } from "antd";
import {
  MailOutlined,
  LinkedinOutlined,
  AndroidOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import styled, { withTheme } from "styled-components";

import AppDev from "../assets/app_dev.svg";
import Logo from "../assets/logo.png";

const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.titleText};
  margin-left: 110px;
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.titleText};
  margin-left: 110px;
`;

const Illustration = styled.img`
  width: 65%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

const B = styled.b`
  color: ${({ theme }) => theme.primaryBlue};
`;

const LandingSection = (props) => (
  <Row style={{ marginTop: 50, height: '100vh' }}>
    <Col span={12}>
      <H1>
        Hi, my name is <B>Nam Phan</B>
      </H1>
      <H2>
        I'm a Software Engineer and I build things for the web and mobile,
        <br /> and I love what I do.
      </H2>
      <br />
      {/* <MeLogo src={Logo} alt="logo" /> */}
      {/* <p>
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
      </p> */}
    </Col>
    <Col span={12}>
      <Illustration src={AppDev} />
    </Col>
  </Row>
);

export default withTheme(LandingSection);
