import React from "react";
import { Col, Row } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";

import styled, { withTheme } from "styled-components";
import * as Colors from "../styles/Colors";

const Span = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: ${Colors.White};
`;

const P = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: 500;
  color: ${Colors.White};
  margin: 0;
`;

const UL = styled.ul`
  font-size: 1rem;
  font-weight: 400;
  color: ${Colors.White};
  list-style: none;
  padding: 0;
`;

const CompanyLogo = styled.img`
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  display: flex;
  background-color: ${Colors.White};
  border-radius: 5%;
`

const ExperienceBlock = (props) => (
  <Col
    key={props.id}
    span={24}
    style={{ padding: "20px" }}
  >
    <Row>
    <Col 
      xs={24}
      sm={24}
      md={12}
      lg={12}
      xl={12}
    >
    <Span>
      {props.title}{" "}
      <a
        href={props.website}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: Colors.White }}
      >
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
    <br />
    <UL>
      {props.activities.map((act, index) => (
        <li key={"nr" + index}>
          <CaretRightOutlined /> {act}
        </li>
      ))}
    </UL>
    </Col>
    <Col 
      xs={24}
      sm={24}
      md={12}
      lg={12}
      xl={12}
    >
       <CompanyLogo
          src={require("../assets/company/" + props.company + ".png")}
          alt="company"
        />
      </Col>
      </Row>
  </Col>
);

export default withTheme(ExperienceBlock);
