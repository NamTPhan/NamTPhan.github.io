import React from "react";
import { Row, Col, Tabs } from "antd";
import styled from "styled-components";

const { TabPane } = Tabs;

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: #141c3a;
  text-align: center;
`;

const ExperienceSection = () => (
  <Row style={{ marginTop: "80px" }}>
    <Col span={24}>
      <H1>Experience & Education</H1>
      <Tabs defaultActiveKey="1" centered style={{textAlign: "center"}}>
        <TabPane tab="Experience" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Education" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </Col>
  </Row>
);

export default ExperienceSection;
