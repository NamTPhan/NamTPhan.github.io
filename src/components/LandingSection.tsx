import React from "react";
import { HeartTwoTone } from "@ant-design/icons";

import * as Colors from "../styles/Colors";

import Laptop from "../assets/svg/laptop.svg";
import LinkedinLogo from "../assets/svg/linkedin-3.svg";
import AndroidLogo from "../assets/svg/android-green-round-2.svg";
import GithubLogo from "../assets/svg/github.svg";

const LandingSection = props => {
  // const H1 = styled.h1`
  //   font-size: 3rem;
  //   font-weight: 800;
  //   color: ${({ theme }) => theme.titleText};
  //   text-align: center;
  // `;

  // const H2 = styled.h2`
  //   font-size: 1.5rem;
  //   font-weight: 400;
  //   color: ${({ theme }) => theme.titleText};
  //   text-align: center;
  // `;

  // const Illustration = styled.img`
  //   width: 70%;
  //   height: 500px;
  //   margin-left: auto;
  //   margin-right: auto;
  //   display: flex;
  // `;

  // const B = styled.b`
  //   color: ${({ theme }) => theme.name};
  // `;

  // const A = styled.a`
  //   color: ${({ theme }) => theme.titleText};
  //   margin: 0 8px;

  //   button {
  //     border-radius: 20px !important;
  //     border: none;

  //     span {
  //       font-size: 20px !important;
  //       color: ${Colors.White};
  //     }
  //   }
  // `;

  return (
    <div className='pt-4'>
      <div className='flex flex-col'>
        <h1>
          Hi, my name is <b>Nam Phan</b>
        </h1>
        <h2>Front-End Developer - Mobile & Web - Software Engineer</h2>
        <h2>
          I build things for the web and mobile, and I{" "}
          <HeartTwoTone twoToneColor={Colors.Red} /> what I do.
        </h2>

        <div className='flex flex-row'>
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
      <div className='w-full'>
        <img src={Laptop} alt='laptop' />
      </div>
    </div>
  );
};

export default LandingSection;
