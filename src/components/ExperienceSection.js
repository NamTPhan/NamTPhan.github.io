import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import ExperienceBlock from "./ExperienceBlock";

import ExperienceData from "../data/experience.json";

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.titleText};
  text-align: center;
`;

const ExperienceSection = () => (
  <Row style={{ margin: "80px 0px" }}>
    <Col xs={0} sm={0} md={2} lg={2} xl={2} />
    <Col xs={24} sm={24} md={20} lg={20} xl={20}>
      <H1>Where I’ve Worked</H1>
      <Row style={{ textAlign: 'center' }} type="flex">
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
    </Col>
  </Row>
);

export default ExperienceSection;
