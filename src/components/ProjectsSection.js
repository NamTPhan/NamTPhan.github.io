import React from "react";
import { Row, Col, Badge, Card, Collapse } from "antd";
import styled from "styled-components";

import ProjectsData from "../data/projects.json";

const styles = {
  cardStyles: {
    boxShadow: "0 5px 10px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    borderRadius: "15px",
  },
};

const { Panel } = Collapse;

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: #141c3a;
  text-align: center;
`;

const H3 = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #141c3a;
  text-align: center;
`;

const FeatureImage = styled.img`
  width: 100%;
  max-height: 300px;
`;

const ProjectsSection = () => (
  <Row style={{ marginBottom: "80px" }}>
    <Col xs={0} sm={0} md={2} lg={2} xl={2} />
    <Col xs={24} sm={24} md={20} lg={20} xl={20}>
      <H1>Some of my Works</H1>
      <H3>Below are just a few projects that I have worked on in the past.</H3>
      <Row type="flex">
        {ProjectsData.map((project, index) => (
          <Col
            key={project.id}
            xs={24}
            sm={24}
            md={8}
            lg={8}
            xl={8}
            style={{ padding: "10px 20px" }}
          >
            <Badge.Ribbon text={project.name}>
              <Card style={styles.cardStyles}>
                <FeatureImage
                  src={require("../assets/projects/" + project.image + ".png")}
                  alt="feature"
                />
                <Collapse ghost>
                  <Panel header="This is panel header 1" key="1">
                    <p>test</p>
                  </Panel>
                  <Panel header="This is panel header 2" key="2">
                    <p>test2</p>
                  </Panel>
                  <Panel header="This is panel header 3" key="3">
                    <p>test3</p>
                  </Panel>
                </Collapse>
              </Card>
            </Badge.Ribbon>
          </Col>
        ))}
      </Row>
    </Col>
  </Row>
);

export default ProjectsSection;
