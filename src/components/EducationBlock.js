import React from "react";
import { Col } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Span = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #141c3a;
`;

const P = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: 500;
  color: #0055a5;
  margin: 0;
`;

const EducationBlock = (props) => (
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
      {props.degree}{" "}
      <img
        src={require("../assets/flags/" + props.country + ".png")}
        width="22"
        height="16"
      />
    </Span>
    <P fontSize="14px">{props.school}</P>
    <P fontSize="14px">{props.date}</P>
  </Col>
);

export default EducationBlock;
