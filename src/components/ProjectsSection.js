import React from "react";
import { Row, Col, Tag } from "antd";
import { AndroidFilled, LinkOutlined } from "@ant-design/icons";
import { Slide } from 'react-reveal';

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
  margin-bottom: 20px;
`;

const ProjectsSection = () => (
  <Row style={{ marginBottom: "80px" }}>
    <Col xs={0} sm={0} md={4} lg={4} xl={4} />
    <Col xs={24} sm={24} md={16} lg={16} xl={16}>
      <H1>Some of my Works</H1>
      <H3>Below are just a few projects that I have worked on in the past.</H3>
      <Slide left>
        <Row style={{ marginBottom: 15 }}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <FeatureImage
              src={require("../assets/projects/countrybucketlist.png")}
              alt="countrybucketlist"
            />
          </Col>
          <Col
            xs={24} sm={24} md={12} lg={12} xl={12}
            style={{ margin: 'auto', paddingLeft: 15, paddingRight: 15 }}
          >
            <B>{ProjectsData[0].name} - {ProjectsData[0].type}</B>
            <P>{ProjectsData[0].description}</P>
            <a
              href={ProjectsData[0].android}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AndroidFilled
                style={{ fontSize: "26px", color: Colors.Green }}
              />
            </a>
            <br />
            {ProjectsData[0].tags.map((tag, index) => (
              <Tag
                key={tag + index}
                color={Colors.Green}
                style={{ marginTop: 10, fontSize: 14 }}
              >
                {tag}
              </Tag>
            ))}
          </Col>
        </Row>
      </Slide>

      <Slide right>
        <Row style={{ marginBottom: 15 }}>
          <Col
            xs={24} sm={24} md={12} lg={12} xl={12}
            style={{ margin: 'auto', paddingLeft: 15, paddingRight: 15 }}
          >
            <B>{ProjectsData[1].name} - {ProjectsData[1].type}</B>
            <P>{ProjectsData[1].description}</P>
            <a
              href={ProjectsData[1].android}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AndroidFilled
                style={{ fontSize: "26px", color: Colors.Green }}
              />
            </a>
            <br />
            {ProjectsData[1].tags.map((tag, index) => (
              <Tag
                key={tag + index}
                color={Colors.Green}
                style={{ marginTop: 10, fontSize: 14 }}
              >
                {tag}
              </Tag>
            ))}
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <FeatureImage
              src={require("../assets/projects/mystudyprogress.png")}
              alt="mystudyprogress"
            />
          </Col>
        </Row>
      </Slide>

      <Slide left>
        <Row style={{ marginBottom: 15 }}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <FeatureImage
              src={require("../assets/projects/easyworx.png")}
              alt="easyworx"
            />
          </Col>
          <Col
            xs={24} sm={24} md={12} lg={12} xl={12}
            style={{ margin: 'auto', paddingLeft: 15, paddingRight: 15 }}
          >
            <B>{ProjectsData[2].name} - {ProjectsData[2].type}</B>
            <P>{ProjectsData[2].description}</P>
            <a
              href={ProjectsData[2].website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkOutlined
                style={{ fontSize: "26px" }}
              />
            </a>
            <br />
            {ProjectsData[2].tags.map((tag, index) => (
              <Tag
                key={tag + index}
                color={Colors.Green}
                style={{ marginTop: 10, fontSize: 14 }}
              >
                {tag}
              </Tag>
            ))}
          </Col>
        </Row>
      </Slide>
    </Col>
  </Row>
);

export default ProjectsSection;
