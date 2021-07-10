import React from "react";
import { Row, Col, Button } from "antd";
import {
  MailOutlined,
  LinkedinOutlined,
  AndroidOutlined,
  GithubOutlined,
  HeartTwoTone
} from "@ant-design/icons";
import { LightSpeed, Fade } from 'react-reveal';

import styled, { withTheme } from "styled-components";
import * as Colors from "../styles/Colors";

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
  width: 70%;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

const B = styled.b`
  color: ${({ theme }) => theme.name};
`;

const A = styled.a`
  color: ${({ theme }) => theme.titleText};
  margin: 0 8px;

  button {
    border-radius: 20px !important;
    border: none;

    span {
      font-size: 20px !important;
      color: ${Colors.White};
    }
  }
 
`;

const LandingSection = (props) => (
  <Row style={{ height: '95vh', paddingTop: 20 }}>
    <Col span={24}>
      <Fade>
        <H1>
          Hi, my name is <B>Nam Phan</B>
        </H1>
      </Fade>
      <H2>
        Front-End Developer - Mobile & Web - Software Engineer
      </H2>
      <H2>
        I build things for the web and mobile, and I <HeartTwoTone twoToneColor={Colors.Red} /> what I do.
      </H2>
      <LightSpeed>
        <Col align='center'>
          <A
            href="https://www.linkedin.com/in/namtphan2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button style={{ backgroundColor: '#2196f3' }} icon={<LinkedinOutlined />} size={'large'} />
          </A>
          <A
            href="https://play.google.com/store/apps/developer?id=NPDevelopment+Apps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              style={{ backgroundColor: '#4caf50' }}
              icon={<AndroidOutlined />}
              size={'large'}
            />
          </A>
          <A
            href="https://github.com/NamTPhan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              style={{ backgroundColor: '#607d8b' }}
              icon={<GithubOutlined />}
              size={'large'}
            />
          </A>
          <A
            href="mailto:namtphann@gmail.com"
          >
            <Button
              style={{ backgroundColor: '#f44336' }}
              icon={<MailOutlined />}
              size={'large'}
            />
          </A>
        </Col>
      </LightSpeed>
    </Col>
    <Col span={24}>
      <Illustration src={Laptop} alt='laptop' />
    </Col>
  </Row>
);

export default withTheme(LandingSection);
