import React from "react";
import { EditTwoTone, LayoutTwoTone, MobileTwoTone } from "@ant-design/icons";

const CardBlock = props => (
  <div className='flex text-center justify-center p-4'>
    <div className='max-w-sm overflow-hidden rounded-xl bg-white dark:bg-slate-700 dark:border dark:border-white shadow-md duration-200 hover:scale-105 hover:shadow-xl'>
      <div className='text-5xl pt-3'>{props.icon}</div>
      <p className='mt-2 font-semibold dark:text-white'>{props.title}</p>
      <div className='p-5'>
        <p className='text-medium mb-5 text-gray-700 dark:text-white'>
          {props.tools}
        </p>
      </div>
    </div>
  </div>
);

export const SkillsSection = () => (
  <div className='py-[100px] h-auto'>
    <h1 className='text-3xl font-bold text-center dark:text-white'>
      Skills & Experience
    </h1>
    <div className='flex flex-col sm:flex-row justify-center'>
      <CardBlock
        icon={<LayoutTwoTone twoToneColor={"#F06292"} />}
        title='Web Development'
        description='I like to code web apps from scratch by using awesome libraries and frameworks.'
        tools='JavaScript, TypeScript, React, Vue.js, Tailwind CSS, (S)CSS, styled-components, Angular, Redux, Pinia, VS Code'
      />
      <CardBlock
        icon={<MobileTwoTone twoToneColor={"#81C784"} />}
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
