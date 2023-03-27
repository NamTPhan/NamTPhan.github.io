import React from "react";
import { HeartTwoTone } from "@ant-design/icons";
import Laptop from "../assets/svg/laptop.svg";
import LinkedinLogo from "../assets/svg/linkedin-3.svg";
import AndroidLogo from "../assets/svg/android-green-round-2.svg";
import GithubLogo from "../assets/svg/github.svg";
import * as Colors from "../styles/Colors";

export const LandingSection = () => {
  return (
    <>
      <div className='pt-4 flex flex-col text-center'>
        <div className='flex flex-col space-y-5'>
          <h1 className='text-5xl'>
            Hi, my name is <b className='text-[#0ea5e9]'>Nam Phan</b>
          </h1>
          <h2 className='text-3xl'>
            Front-End Developer - Mobile & Web - Software Engineer
          </h2>
          <h2 className='text-2xl'>
            I build things for the web and mobile, and I{" "}
            <HeartTwoTone twoToneColor={Colors.Red} /> what I do.
          </h2>
        </div>

        <div className='flex flex-row justify-center'>
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
};
