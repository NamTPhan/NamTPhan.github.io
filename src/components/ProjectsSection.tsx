import React from "react";
import LinkIcon from "../assets/svg/link.svg";
import AndroidIcon from "../assets/svg/android-green.svg";
import ProjectsData from "../data/projects.json";
import * as Colors from "../styles/Colors";

export const ProjectsSection = () => {
  // const FeatureImage = styled.img`
  //   width: 100%;
  //   max-height: 500px;
  // `;

  return (
    <div className='mb-20'>
      <div>
        <h1 className='text-3xl font-bold text-center'>Some of my Works</h1>
        <h3 className='text-xl mb-5 text-center'>
          Below are just a few projects that I have worked on in the past.
        </h3>

        {ProjectsData.map(project => {
          return (
            <div key={project.name} className='md:px-6 lg:px-20 2xl:px-80 mb-5'>
              <div className='relative block p-8 overflow-hidden border bg-white border-slate-200 rounded-lg  duration-200 hover:scale-105 hover:shadow-xl'>
                <span className='absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600' />
                <div className='flex flex-row'>
                  <div className='flex flex-col flex-1'>
                    <h1 className='text-xl font-bold text-slate-900'>
                      {project.name}
                    </h1>
                    <p className='mt-1 text-sm font-medium text-slate-600'>
                      {project.type}
                    </p>
                    <p className='text-base my-2'>{project.description}</p>
                    <dl className='flex mt-3 mb-3'>
                      <div className='flex'>
                        {project.android && (
                          <a
                            href={project.android}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <img src={AndroidIcon} />
                          </a>
                        )}
                        {project.website && (
                          <a
                            href={project.website}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <img src={LinkIcon} />
                          </a>
                        )}
                      </div>
                    </dl>
                    <div className='flex'>
                      {project.tags.map(tag => (
                        <div
                          key={tag}
                          className='bg-[#94a3b8] text-white px-3 rounded-full mr-2'
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='hidden ml-3 sm:flex sm:flex-1'>
                    <img
                      className='rounded-lg'
                      src={require("../assets/projects/" +
                        project.image +
                        ".png")}
                      alt={project.name}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
