import React from "react";
import { EditTwoTone, LayoutTwoTone, MobileTwoTone } from "@ant-design/icons";

import * as Colors from "../styles/Colors";

const CardBlock = props => {
  // const StyledCard = styled.div`
  //   background-color: ${Colors.Transparent};
  //   margin-left: 20px;
  //   margin-right: 20px;
  //   margin-bottom: 20px;
  //   border: none;
  //   height: 350px;
  // `;

  // const CardTitle = styled.h1`
  //   color: ${Colors.Blue};
  //   font-weight: 800;
  //   font-size: 1.2rem;
  // `;

  // const CardSubText = styled.b`
  //   font-size: 1rem;
  //   color: ${({ theme }) => theme.titleText};
  // `;

  // const CardDescription = styled.p`
  //   font-weight: 500;
  //   font-size: 15px;
  //   color: ${({ theme }) => theme.titleText};
  // `;

  // const Icon = styled.p`
  //   font-size: 48px;
  //   margin-bottom: 20px;
  // `;

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <p>{props.icon}</p>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <b>Tools that I use:</b>
        <p>{props.tools}</p>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  // const H1 = styled.h1`
  //   font-size: 2rem;
  //   font-weight: 800;
  //   color: ${({ theme }) => theme.titleText};
  //   text-align: center;
  // `;

  return (
    <div style={{ margin: "100px 0" }}>
      <h1>Skills & Experience</h1>

      <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <CardBlock
          icon={<LayoutTwoTone twoToneColor={Colors.Pink} />}
          title='Web Development'
          description='I like to code web apps from scratch by using awesome libraries and frameworks.'
          tools='JavaScript, TypeScript, React, Vue.js, Tailwind CSS, (S)CSS, styled-components, Angular, Redux, Pinia, VS Code'
        />
        <CardBlock
          icon={<MobileTwoTone twoToneColor={Colors.Green} />}
          title='Mobile Development'
          description='I also like to create mobile apps that could help people in their daily lives or for entertainment.'
          tools='Java, React Native, Ionic, VS Code, Android Studio'
        />
        <CardBlock
          icon={<EditTwoTone />}
          title='Design & Other tools'
          description='I like to keep the design simple and clean.'
          tools='Photoshop, ui8.net, Git, GitLab, Terminal, Sourcetree/Gitkraken, Postman, RunJS'
        />
      </div>
    </div>
  );
};
export default SkillsSection;
