import React from "react";
import { Row, Col, Tag } from "antd";
import { AndroidFilled, LinkOutlined } from "@ant-design/icons";
import { Slide } from "react-reveal";

import ProjectsData from "../data/projects.json";

import styled from "styled-components";
import * as Colors from "../styles/Colors";

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

const P = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.titleText};
`;

const B = styled.b`
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.titleText};
`;

const FeatureImage = styled.img`
  width: 100%;
  max-height: 500px;
`;

const ProjectsSection = () => (
  <Row style={{ marginBottom: 80 }}>
    <Col xs={0} sm={0} md={4} lg={4} xl={4} />
    <Col xs={24} sm={24} md={16} lg={16} xl={16}>
      <H1>Some of my Works</H1>
      <H3 style={{ marginBottom: 20 }}>
        Below are just a few projects that I have worked on in the past.
      </H3>
      {ProjectsData.map(project => {
        return (
          <Slide
            key={project.name}
            left={project.slideLeft}
            right={project.slideRight}
          >
            <Row style={{ marginBottom: 15 }}>
              {project.imageLeftRight === "left" && (
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <FeatureImage
                    src={require("../assets/projects/" +
                      project.image +
                      ".png")}
                    alt={project.name}
                  />
                </Col>
              )}
              <Col
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={12}
                style={{ margin: "auto", paddingLeft: 15, paddingRight: 15 }}
              >
                <B>
                  {project.name} - {project.type}
                </B>
                <P>{project.description}</P>
                {project.android && (
                  <a
                    href={project.android}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <AndroidFilled
                      style={{ fontSize: "26px", color: Colors.Green }}
                    />
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <LinkOutlined style={{ fontSize: "26px" }} />
                  </a>
                )}
                <br />
                {project.tags.map((tag, index) => (
                  <Tag
                    key={tag + index}
                    color={Colors.Blue}
                    style={{ marginTop: 10, fontSize: 14, fontWeight: "bold" }}
                  >
                    {tag}
                  </Tag>
                ))}
              </Col>
              {project.imageLeftRight === "right" && (
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <FeatureImage
                    src={require("../assets/projects/" +
                      project.image +
                      ".png")}
                    alt={project.name}
                  />
                </Col>
              )}
            </Row>
          </Slide>
        );
      })}
    </Col>
  </Row>
);

export default ProjectsSection;
