import React from "react";
import { Col } from "antd";
import {
  CloseCircleTwoTone,
  CheckCircleTwoTone,
  LoadingOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const Span = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #141c3a;
`;

const P = styled.p`
  font-size: 14px;
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
        alt="country"
      />
    </Span>
    <P>{props.school}</P>
    <P>{props.date}</P>
    <P>
      Completed:{" "}
      {props.completed === 1 ? (
        <CheckCircleTwoTone
          style={{ fontSize: "16px" }}
          twoToneColor="#52c41a"
        />
      ) : props.completed === 2 ? (
        <CloseCircleTwoTone
          style={{ fontSize: "16px" }}
          twoToneColor="#eb2f96"
        />
      ) : (
        <LoadingOutlined style={{ fontSize: "16px" }} spin />
      )}
    </P>
  </Col>
);

export default EducationBlock;
