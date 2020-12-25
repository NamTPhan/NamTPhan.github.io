import React from "react";
import { Col } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import styled, { withTheme } from "styled-components";

const Span = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.titleText};
`;

const P = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: 500;
  color: ${({ theme }) => theme.titleText};
  margin: 0;
`;

const UL = styled.ul`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.titleText};
  list-style: none;
  padding: 0;
`;

const ExperienceBlock = (props) => (
  <Col
    key={props.id}
    xs={24}
    sm={24}
    md={12}
    lg={12}
    xl={12}
    style={{ padding: "20px" }}
  >
    <Span>
      {props.title}{" "}
      <a href={props.website} target="_blank" rel="noopener noreferrer" style={{ color: props.theme.primary }}>
        @ {props.company}{" "}
        <img
          src={require("../assets/flags/" + props.country + ".png")}
          width="22"
          height="16"
          alt="country"
        />
      </a>
    </Span>
    <P fontSize="14px">{props.date}</P>
    <P fontSize="13px">{props.type}</P>
    <UL>
      {props.activities.map((act, index) => (
        <li key={"nr" + index}>
          <CaretRightOutlined /> {act}
        </li>
      ))}
    </UL>
  </Col>
);

export default withTheme(ExperienceBlock);
