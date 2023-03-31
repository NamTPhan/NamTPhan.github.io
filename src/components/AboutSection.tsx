import React from "react";
import AvatarImage from "../assets/svg/avatar.svg";

export const AboutSection = () => (
  <div className='mt-40 text-center'>
    <div className='flex justify-center '>
      <img
        className='bg-[#f7f7f7] w-[250px] h-[250px] rounded-full duration-200 hover:scale-105 hover:shadow-xl'
        src={AvatarImage}
        alt='avatar'
      />
    </div>
    <div>
      <h1 className='text-3xl mt-3'>Hello! I'm Nam. Nice to meet you.</h1>
      <div className=''>
        <section className='relative isolate overflow-hidden bg-white px-4 py-14 sm:py-18'>
          <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20'></div>
          <div className='absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center'></div>
          <div className='mx-auto max-w-2xl lg:max-w-4xl'>
            <blockquote className='text-center text-lg leading-8 text-gray-900 sm:text-xl sm:leading-9'>
              <p>
                “I am a front-end developer working at Capgemini. Currently I am
                more of a front-end developer, but long-term I intend to move
                towards becoming a full-stack developer. I'm a flexible and
                organized team player. I like to work with people from all over
                the world to learn more about different cultures. In my spare
                time I like to work on my own projects, watching series, being
                creative with my 3D-printer and reading stuff about new tech.”
              </p>
            </blockquote>
          </div>
        </section>
      </div>
    </div>
  </div>
);
