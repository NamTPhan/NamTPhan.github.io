import React from "react";

import * as Colors from "../styles/Colors";

import AvatarImage from "../assets/svg/avatar.svg";

// const H1 = styled.h1`
//   color: ${Colors.White};
//   font-weight: 800;
// `;

// const H2 = styled.h2`
//   color: ${Colors.White};
//   font-weight: 400;
//   font-size: 1.2rem;
// `;

// const Avatar = styled.img`
//   width: 200px;
//   height: 200px;
//   margin-left: auto;
//   margin-right: auto;
//   margin-top: 2rem;
//   margin-bottom: 3rem;
//   display: flex;
//   border-radius: 50%;
// `;

const AboutSection = props => (
  <div
    style={{
      marginTop: 60,
      paddingTop: "3rem",
      paddingBottom: "5rem",
      textAlign: "center",
    }}
  >
    <div>
      <img
        style={{ backgroundColor: Colors.WhiteSmoke }}
        src={AvatarImage}
        alt='avatar'
      />
    </div>
    <div>
      <h1>Hello! I'm Nam. Nice to meet you.</h1>
      <div>
        <h2>
          I'm a front-end developer working at Capgemini. Currently I am more of
          a front-end developer, but long-term I intend to move towards becoming
          a full-stack developer. I'm a flexible and organized team player. I
          like to work with people from all over the world to learn more about
          different cultures. In my spare time I like to work on my own
          projects, watching series, being creative with my 3D-printer and
          reading stuff about new tech.
        </h2>
      </div>
    </div>
  </div>
);

export default AboutSection;
