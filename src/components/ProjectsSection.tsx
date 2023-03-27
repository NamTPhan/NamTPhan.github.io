import React from "react";
import { AndroidFilled, LinkOutlined } from "@ant-design/icons";

import ProjectsData from "../data/projects.json";
import * as Colors from "../styles/Colors";

const ProjectsSection = () => {
  // const H1 = styled.h1`
  //   font-size: 2rem;
  //   font-weight: 800;
  //   color: ${({ theme }) => theme.titleText};
  //   text-align: center;
  // `;

  // const H3 = styled.h3`
  //   font-size: 1rem;
  //   font-weight: 700;
  //   color: ${({ theme }) => theme.titleText};
  //   text-align: center;
  // `;

  // const P = styled.p`
  //   font-size: 1rem;
  //   font-weight: 500;
  //   color: ${({ theme }) => theme.titleText};
  // `;

  // const B = styled.b`
  //   font-size: 1rem;
  //   font-weight: bold;
  //   color: ${({ theme }) => theme.titleText};
  // `;

  // const FeatureImage = styled.img`
  //   width: 100%;
  //   max-height: 500px;
  // `;

  return (
    <div style={{ marginBottom: 80 }}>
      <div>
        <h1>Some of my Works</h1>
        <h3 style={{ marginBottom: 20 }}>
          Below are just a few projects that I have worked on in the past.
        </h3>
        {ProjectsData.map(project => {
          return (
            <div key={project.name}>
              <div style={{ marginBottom: 15 }}>
                {project.imageLeftRight === "left" && (
                  <div>
                    <img
                      src={require("../assets/projects/" +
                        project.image +
                        ".png")}
                      alt={project.name}
                    />
                  </div>
                )}
                <div
                  style={{ margin: "auto", paddingLeft: 15, paddingRight: 15 }}
                >
                  <b>
                    {project.name} - {project.type}
                  </b>
                  <p>{project.description}</p>
                  {project.android && (
                    <a
                      href={project.android}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <AndroidFilled
                        style={{ fontSize: "26px", color: Colors.Green }}
                      />
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <LinkOutlined style={{ fontSize: "26px" }} />
                    </a>
                  )}
                  <br />
                  {project.tags.map((tag, index) => (
                    <div
                      key={tag + index}
                      color={Colors.Blue}
                      style={{
                        marginTop: 10,
                        fontSize: 14,
                        fontWeight: "bold",
                      }}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                {project.imageLeftRight === "right" && (
                  <div>
                    <img
                      src={require("../assets/projects/" +
                        project.image +
                        ".png")}
                      alt={project.name}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
