import React from "react";
import { Row, Col, Tabs } from "antd";
import styled from "styled-components";
import ExperienceBlock from "./ExperienceBlock";
import EducationBlock from "./EducationBlock";

import ExperienceData from "../data/experience.json";
import EducationData from "../data/education.json";

const { TabPane } = Tabs;

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: #141c3a;
  text-align: center;
`;

const ExperienceSection = () => (
  <Row style={{ margin: "80px 0px" }}>
    <Col xs={0} sm={0} md={2} lg={2} xl={2} />
    <Col xs={24} sm={24} md={20} lg={20} xl={20}>
      <H1>Experience & Education</H1>
      <Tabs defaultActiveKey="1" centered style={{ textAlign: "center" }}>
        <TabPane tab="Experience" key="1">
          <Row type="flex">
            {ExperienceData.map((Exp, index) => (
              <ExperienceBlock
                key={"Exp" + index}
                id={Exp.id}
                title={Exp.title}
                company={Exp.company}
                website={Exp.website}
                country={Exp.country}
                date={Exp.date}
                type={Exp.type}
                activities={Exp.activities}
              />
            ))}
          </Row>
        </TabPane>
        <TabPane tab="Education" key="2">
          <Row type="flex">
            {EducationData.map((Edu, index) => (
              <EducationBlock
                key={"Edu" + index}
                id={Edu.id}
                school={Edu.school}
                degree={Edu.degree}
                date={Edu.date}
                completed={Edu.completed}
                country={Edu.country}
              />
            ))}
          </Row>
        </TabPane>
      </Tabs>
    </Col>
  </Row>
);

export default ExperienceSection;
