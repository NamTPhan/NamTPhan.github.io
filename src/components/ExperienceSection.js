import React from "react";
import { Row, Col, Tabs } from "antd";

import ExperienceBlock from "./ExperienceBlock";
import ExperienceData from "../data/experience.json";

import styled, { withTheme } from "styled-components";
import * as Colors from "../styles/Colors";

const { TabPane } = Tabs;

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: ${Colors.White};
  text-align: center;
`;

const ExperienceSection = (props) => (
  <Row
    style={{
      backgroundColor: props.theme.primary,
      margin: "80px 0px",
      paddingTop: "3rem",
      paddingBottom: "5rem"
    }}
  >
    <Col span={24}>
      <H1>Where I’ve Worked</H1>
      <Col
        xs={{ span: 24, offset: 0 }}
        sm={{ span: 24, offset: 0 }}
        md={{ span: 12, offset: 6 }}
        lg={{ span: 12, offset: 6 }}
        xl={{ span: 12, offset: 6 }}
      >
        <Tabs defaultActiveKey="1" type="card" size={'large'} centered>
          {ExperienceData.map((Exp, index) => (
            <TabPane tab={Exp.company} key={index}>
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
            </TabPane>
          ))}
        </Tabs>
      </Col>
    </Col>
  </Row>
);

export default withTheme(ExperienceSection);
