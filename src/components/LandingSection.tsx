import React from "react";
import Laptop from "../assets/svg/laptop.svg";
import LinkedinLogo from "../assets/svg/linkedin-3.svg";
import AndroidLogo from "../assets/svg/android-green-round-2.svg";
import GithubLogo from "../assets/svg/github.svg";
import TailwindComponents from "../assets/svg/tailwindcomponents.svg";

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
        <span className='flex justify-center text-2xl px-1 sm:px-0 dark:text-white '>
          I build things for the web and mobile, and I love what I do.
        </span>
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
        <a
          href='https://tailwindcomponents.com/u/nam'
          target='_blank'
          rel='noopener noreferrer'
          className='flex flex-col justify-center ml-0.5'
        >
          <img
            src={TailwindComponents}
            className='bg-white rounded-full p-1 border border-slate-700'
            alt='tailwindcomponents'
          />
        </a>
      </div>
    </div>
    <div className='my-10'>
      <img className='flex h-[500px] mx-auto' src={Laptop} alt='laptop' />
    </div>
  </>
);
