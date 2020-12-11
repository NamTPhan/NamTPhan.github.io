import React from "react";
import { Row, Col, Card, Collapse, Tag, Tooltip } from "antd";
import { AndroidFilled, LinkOutlined } from "@ant-design/icons";
import styled from "styled-components";

import ProjectsData from "../data/projects.json";

const { Panel } = Collapse;

const StyledCard = styled(Card)`
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 15px;

  .ant-card-body {
    padding: 0px !important;
  }
`;

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: ${({ theme }) => theme.titleText};
  text-align: center;
`;

const H3 = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.titleText};
  text-align: center;
`;

const FeatureImage = styled.img`
  width: 100%;
  max-height: 300px;
  border-radius: 15px 15px 0px 0px;
`;

const LinksP = styled.p`
  text-align: center;
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
            <StyledCard>
              <FeatureImage
                src={require("../assets/projects/" + project.image + ".png")}
                alt="feature"
              />
              <Collapse ghost>
                <Panel header={project.name} key="1">
                  <b>{project.type}</b>
                  <p style={{ fontWeight: 500 }}>{project.description}</p>
                  <p>
                    {project.tags.map((tag, index) => (
                      <Tag
                        key={"tag" + index}
                        color="#52c41a"
                        style={{ marginBottom: "3px" }}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </p>
                  <LinksP>
                    {project.android && (
                      <a
                        href={project.android}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Tooltip title="View Online" color="blue">
                          <AndroidFilled
                            style={{ fontSize: "26px", color: "#52c41a" }}
                          />
                        </Tooltip>
                      </a>
                    )}
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Tooltip title="View Online" color="blue">
                          <LinkOutlined style={{ fontSize: "26px" }} />
                        </Tooltip>
                      </a>
                    )}
                  </LinksP>
                </Panel>
              </Collapse>
            </StyledCard>
          </Col>
        ))}
      </Row>
    </Col>
  </Row>
);

export default ProjectsSection;
