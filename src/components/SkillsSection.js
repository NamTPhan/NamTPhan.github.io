import React from "react";
import { Row, Col, Card } from "antd";
import { EditTwoTone, LayoutTwoTone, MobileTwoTone } from "@ant-design/icons";
import styled from "styled-components";

const styles = {
  cardStyles: {
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  },
};

const Icon = styled.p`
  font-size: 48px;
`;

const CardBlock = (props) => {
  return (
    <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ textAlign: "center" }}>
      <Card style={styles.cardStyles}>
        <Icon>{props.icon}</Icon>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>{props.subtext}</p>
      </Card>
    </Col>
  );
};

const SkillsSection = () => (
  <Row>
    <CardBlock icon={<EditTwoTone />} />
    <CardBlock icon={<LayoutTwoTone twoToneColor="#eb2f96" />} />
    <CardBlock icon={<MobileTwoTone twoToneColor="#52c41a" />} />
  </Row>
);

export default SkillsSection;
