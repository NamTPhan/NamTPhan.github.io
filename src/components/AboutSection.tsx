import React from "react";
import AvatarImage from "../assets/svg/avatar.svg";

export const AboutSection = () => (
  <div className='mt-40 text-center'>
    <div className='flex justify-center '>
      <img
        className='bg-[#f7f7f7] w-[250px] h-[250px] rounded-full'
        src={AvatarImage}
        alt='avatar'
      />
    </div>
    <div>
      <h1 className='text-3xl'>Hello! I'm Nam. Nice to meet you.</h1>
      <div className=''>
        <p className='text-xl'>
          I'm a front-end developer working at Capgemini. Currently I am more of
          a front-end developer, but long-term I intend to move towards becoming
          a full-stack developer. I'm a flexible and organized team player. I
          like to work with people from all over the world to learn more about
          different cultures. In my spare time I like to work on my own
          projects, watching series, being creative with my 3D-printer and
          reading stuff about new tech.
        </p>
      </div>
    </div>
  </div>
);
