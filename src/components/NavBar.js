import React from "react";
import { Row, Col, Button, Tooltip } from "antd";
import { FileDoneOutlined } from "@ant-design/icons";

import logo from "../assets/logo.png";

const NavBar = () => (
  <Row style={{ padding: "1.5rem" }}>
    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
      <img
        src={logo}
        width="50"
        height="50"
        alt="logo"
        style={{ borderRadius: "50%" }}
      />
    </Col>
    <Col
      xs={12}
      sm={12}
      md={12}
      lg={12}
      xl={12}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Tooltip title="Currently Unavailable" placement="bottom">
        <Button
          type="primary"
          shape="round"
          icon={<FileDoneOutlined />}
          size="large"
        >
          Resume
        </Button>
      </Tooltip>
    </Col>
  </Row>
);

export default NavBar;
