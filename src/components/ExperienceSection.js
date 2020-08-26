import React from "react";
import { Row, Col, Tabs } from "antd";
import styled from "styled-components";

import ExperienceData from "../data/experience.json";
import EducationData from "../data/education.json";

const { TabPane } = Tabs;

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: #141c3a;
  text-align: center;
`;

const Span = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: #141c3a;
`;

const Url = styled.a`
  color: #1890ff;
`;

const ExpBlock = (props) => (
  <Col
    key={props.id}
    xs={24}
    sm={24}
    md={12}
    lg={12}
    xl={12}
    style={{ textAlign: "left", padding: "20px" }}
  >
    <Span>
      {props.title}{" "}
      <Url href={props.website} target="_blank">
        @ {props.company}{" "}
        <img
          src={require("../assets/flags/" + props.country + ".png")}
          width="22"
          height="16"
        />
      </Url>
    </Span>
  </Col>
);

const ExperienceSection = () => (
  <Row style={{ margin: "80px 0px" }}>
    <Col span={24}>
      <H1>Experience & Education</H1>
      <Tabs defaultActiveKey="1" centered style={{ textAlign: "center" }}>
        <TabPane tab="Experience" key="1">
          <Row>
            {ExperienceData.map((obj) => (
              <ExpBlock
                id={obj.id}
                title={obj.title}
                company={obj.company}
                website={obj.website}
                country={obj.country}
              />
            ))}
          </Row>
        </TabPane>
        <TabPane tab="Education" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </Col>
  </Row>
);

export default ExperienceSection;
