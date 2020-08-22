import React from "react";
import { Row, Col, Card } from "antd";
import { EditTwoTone, LayoutTwoTone, MobileTwoTone } from "@ant-design/icons";
import styled from "styled-components";

const styles = {
  cardStyles: {
    boxShadow: "0 5px 10px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    marginLeft: "10px",
    marginRight: "10px",
    marginBottom: "20px",
    borderRadius: "15px",
  },
};

const CardTitle = styled.h1`
  color: "#141c3a";
  font-weight: 800;
  font-size: 1.2rem;
`;

const CardSubText = styled.b`
  font-size: 1rem;
  color: #1890ff;
`

const Icon = styled.p`
  font-size: 48px;
  margin-bottom: 20px;
`;

const CardBlock = (props) => {
  return (
    <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ textAlign: "center" }}>
      <Card style={styles.cardStyles}>
        <Icon>{props.icon}</Icon>
        <CardTitle>{props.title}</CardTitle>
        <p>{props.description}</p>
        <CardSubText>Tools that I use:</CardSubText>
      </Card>
    </Col>
  );
};

const SkillsSection = () => (
  <Row
    style={{ paddingLeft: "20px", paddingRight: "20px", marginTop: "-80px" }}
  >
    <CardBlock icon={<EditTwoTone />} title="Design" />
    <CardBlock
      icon={<LayoutTwoTone twoToneColor="#eb2f96" />}
      title="Web Development"
    />
    <CardBlock
      icon={<MobileTwoTone twoToneColor="#52c41a" />}
      title="Mobile Development"
    />
  </Row>
);

export default SkillsSection;
