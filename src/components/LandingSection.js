import React from "react";
import { Row, Col, Button } from "antd";
import {
  MailOutlined,
  LinkedinOutlined,
  AndroidOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import styled, { withTheme } from "styled-components";

import Laptop from "../assets/laptop.svg";

const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.titleText};
  text-align: center;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.titleText};
  text-align: center;
`;

const Illustration = styled.img`
  width: 30%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

const B = styled.b`
  color: ${({ theme }) => theme.name};
`;

const A = styled.a`
  color: #fff;
  margin: 0 8px;

  span {
    font-size: 20px !important;
  }
`;

const LandingSection = (props) => (
  <Row style={{ height: '100vh' }}>
    <Col span={24}>
      <H1>
        Hi, my name is <B>Nam Phan</B>
      </H1>
      <H2>
        Front-End Developer - Mobile & Web - Software Engineering Student
      </H2>
      <H2>
        I build things for the web and mobile, and I love what I do.
      </H2>
      <Col align='center'>
        <A
          href="https://www.linkedin.com/in/namtphan2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button type="primary" shape="circle" icon={<LinkedinOutlined />} size={'large'} />
        </A>
        <A
          href="https://play.google.com/store/apps/developer?id=NPDevelopment+Apps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button type="primary" shape="circle" icon={<AndroidOutlined />} size={'large'} />
        </A>
        <A
          href="https://github.com/NamTPhan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button type="primary" shape="circle" icon={<GithubOutlined />} size={'large'} />
        </A>
        <A
          href="mailto:namtphann@gmail.com"
        >
          <Button type="primary" shape="circle" icon={<MailOutlined />} size={'large'} />
        </A>
      </Col>
    </Col>
    <Col span={24}>
      <Illustration src={Laptop} alt='laptop' />
    </Col>
  </Row>
);

export default withTheme(LandingSection);
