import React from "react";
import { Row, Col, Card } from "antd";
import { EditTwoTone, LayoutTwoTone, MobileTwoTone } from "@ant-design/icons";
import styled from "styled-components";

const StyledCard = styled(Card)`
  box-shadow: 0 5px 10px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  border-radius: 15px;
`

const CardTitle = styled.h1`
  color: "#141c3a";
  font-weight: 800;
  font-size: 1.2rem;
`;

const CardSubText = styled.b`
  font-size: 1rem;
  color: #1890ff;
`;

const CardDescription = styled.p`
  font-weight: 500;
  font-size: 15px;
`;

const Icon = styled.p`
  font-size: 48px;
  margin-bottom: 20px;
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
  <Row
    style={{ paddingLeft: "20px", paddingRight: "20px", marginTop: "-80px" }}
  >
    <CardBlock
      icon={<LayoutTwoTone twoToneColor="#eb2f96" />}
      title="Web Development"
      description="I like to code web apps from scratch by using awesome libraries and frameworks."
      tools="JavaScript, TypeScript, Angular, HTML5, (S)CSS, styled-components, React, lodash, redux, VS Code, Python"
    />
    <CardBlock
      icon={<MobileTwoTone twoToneColor="#52c41a" />}
      title="Mobile Development"
      description="I also like to create mobile apps that could help people in their daily lives or for entertainment."
      tools="Java, React Native, Ionic, VS Code, Android Studio, Kotlin (Currently learning), Flutter (Currently learning)"
    />
    <CardBlock
      icon={<EditTwoTone />}
      title="Design & Other tools"
      description="I like to keep the design simple and clean. I mostly use the material design system."
      tools="Balsamiq, Marvel, Photoshop, Pen & Paper, ui8.net, Git, Github, Gitlab, Terminal/CMD, Sourcetree/Gitkraken"
    />
  </Row>
);

export default SkillsSection;
