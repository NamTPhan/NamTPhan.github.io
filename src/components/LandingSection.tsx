import React from "react";
import Laptop from "../assets/svg/laptop.svg";
import LinkedinLogo from "../assets/svg/linkedin-3.svg";
import AndroidLogo from "../assets/svg/android-green-round-2.svg";
import GithubLogo from "../assets/svg/github.svg";

export const LandingSection = () => (
  <>
    <div className='pt-4 flex flex-col text-center dark:bg-slate-700'>
      <div className='flex flex-col space-y-5'>
        <h1 className='text-5xl dark:text-white'>
          Hi, my name is <b className='text-sky-500'>Nam Phan</b>
        </h1>
        <h2 className='text-3xl px-1 sm:px-0 dark:text-white'>
          Front-End Developer - Mobile & Web - Software Engineer
        </h2>
        <h2 className='text-2xl px-1 sm:px-0 dark:text-white'>
          I build things for the web and mobile, and I sss what I do.
        </h2>
      </div>

      <div className='flex flex-row justify-center mt-5'>
        <a
          href='https://www.linkedin.com/in/namtphan2'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={LinkedinLogo} alt='linkedin' />
        </a>
        <a
          href='https://play.google.com/store/apps/developer?id=NPDevelopment+Apps'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={AndroidLogo} alt='play-store' />
        </a>
        <a
          href='https://github.com/NamTPhan'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={GithubLogo} alt='github' />
        </a>
      </div>
    </div>
    <div className='my-10'>
      <img className='flex h-[500px] mx-auto' src={Laptop} alt='laptop' />
    </div>
  </>
);
