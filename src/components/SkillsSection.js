import React from "react";
import { Row, Col, Card } from "antd";
import { EditTwoTone, LayoutTwoTone, MobileTwoTone } from "@ant-design/icons";
import { Zoom } from 'react-reveal';

import styled from "styled-components";
import * as Colors from "../styles/Colors";

const StyledCard = styled(Card)`
  background-color: ${Colors.Transparent};
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
`

const CardTitle = styled.h1`
  color: ${Colors.Blue};
  font-weight: 800;
  font-size: 1.2rem;
`;

const CardSubText = styled.b`
  font-size: 1rem;
  color: ${Colors.White};
`;

const CardDescription = styled.p`
  font-weight: 500;
  font-size: 15px;
  color: ${Colors.White};
`;

const Icon = styled.p`
  font-size: 48px;
  margin-bottom: 20px;
`;

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.titleText};
  text-align: center;
`;

const CardBlock = (props) => {
  return (
    <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ textAlign: "center" }}>
      <StyledCard>
        <Icon>{props.icon}</Icon>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
        <CardSubText>Tools that I use:</CardSubText>
        <CardDescription>{props.tools}</CardDescription>
      </StyledCard>
    </Col>
  );
};

const SkillsSection = () => (
  <Col xs={24} sm={24} md={20} lg={24} xl={24} style={{ margin: '100px 0' }}>
    <H1>Skills & Experience</H1>
    <Zoom>
      <Row style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <CardBlock
          icon={<LayoutTwoTone twoToneColor={Colors.Pink} />}
          title="Web Development"
          description="I like to code web apps from scratch by using awesome libraries and frameworks."
          tools="JavaScript, TypeScript, React, (S)CSS, styled-components, Angular, lodash, redux, VS Code, Python"
        />
        <CardBlock
          icon={<MobileTwoTone twoToneColor={Colors.Green} />}
          title="Mobile Development"
          description="I also like to create mobile apps that could help people in their daily lives or for entertainment."
          tools="Java, React Native, Ionic, VS Code, Android Studio"
        />
        <CardBlock
          icon={<EditTwoTone />}
          title="Design & Other tools"
          description="I like to keep the design simple and clean. I mostly use the material design system."
          tools="Photoshop, ui8.net, Git, GitLab, Terminal, Sourcetree/Gitkraken, Postman, RunJS"
        />
      </Row>
    </Zoom>
  </Col>
);

export default SkillsSection;
