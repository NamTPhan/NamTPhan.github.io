import React from "react";
import LinkIcon from "../assets/svg/link.svg";
import AndroidIcon from "../assets/svg/android-green.svg";
import ProjectsData from "../data/projects.json";

export const ProjectsSection = () => {
  return (
    <div className='mb-20'>
      <div>
        <h1 className='text-3xl font-bold text-center dark:text-white'>
          Some of my Works
        </h1>
        <h3 className='text-xl mb-5 text-center dark:text-white'>
          Below are just a few projects that I have worked on in the past.
        </h3>

        {ProjectsData.map((project: any) => {
          return (
            <div key={project.name} className='md:px-6 lg:px-20 2xl:px-80 mb-5'>
              <div className='relative block p-8 overflow-hidden border bg-white dark:bg-slate-700 border-slate-200 rounded-lg  duration-200 hover:scale-105 hover:shadow-xl'>
                <span className='absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600' />
                <div className='flex flex-row'>
                  <div className='flex flex-col flex-1'>
                    <div className='block md:hidden mb-3'>
                      <img
                        className='rounded-lg'
                        src={require("../assets/projects/" + project.image)}
                        alt={project.name}
                      />
                    </div>
                    <h1 className='text-xl font-bold dark:text-white'>
                      {project.name}
                    </h1>
                    <p className='mt-1 text-sm font-medium text-slate-600 dark:text-white'>
                      {project.type}
                    </p>
                    <p className='text-base my-2 dark:text-white'>
                      {project.description}
                    </p>
                    <dl className='flex mt-3 mb-3'>
                      <div className='flex'>
                        {project.android && (
                          <a
                            href={project.android}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <img src={AndroidIcon} alt='play-store' />
                          </a>
                        )}
                        {project.website && (
                          <a
                            href={project.website}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <img src={LinkIcon} alt='website' />
                          </a>
                        )}
                      </div>
                    </dl>
                    <div className='flex flex-wrap'>
                      {project.tags.map(tag => (
                        <div
                          key={tag}
                          className='bg-slate-400 text-white px-3 rounded-full mr-2 mt-1'
                        >
                          {tag}
                        </div>
                      ))}
                      {project.published === false && (
                        <div className='bg-red-500 text-white px-3 rounded-full mr-2 mt-1'>
                          Unpublished
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='hidden ml-3 md:flex sm:flex-1'>
                    <img
                      className='rounded-lg'
                      src={require("../assets/projects/" + project.image)}
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
