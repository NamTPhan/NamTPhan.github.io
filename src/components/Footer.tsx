import React from "react";

import * as Colors from "../styles/Colors";

const ContactSection = props => {
  return (
    <div>
      <div
        style={{
          padding: "0 2rem 1rem 2rem",
          textAlign: "center",
        }}
      >
        <p style={{ marginTop: "30px" }}>
          © 2023 Designed & Developed by <b>Nam Phan</b>
          <br />
          Built with{" "}
          <b>
            <a
              href='https://ant.design/'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: Colors.White }}
            >
              Ant Design
            </a>
          </b>
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
