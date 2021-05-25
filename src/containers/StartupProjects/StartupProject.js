import React from "react";
import "./StartupProjects.css";
import { startupProjects } from "../../portfolio";
import { Fade } from "react-bootstrap";

export default function StartupProject() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="startupproject-heading">{startupProjects.title}</h1>
          <h3 className="startupproject-subtitle">
            {startupProjects.subtitle}
          </h3>

          <div className="projects-container">
            {startupProjects.projects.map((project, i) => {
              return (
                <div key={i} className="project-card project-card-light">
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={require(`../../assests/images/${project.image}`)}
                        alt={project.projectName}
                        className="card-image"
                      />
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h4 className="card-title">{project.projectName}</h4>
                    <p className="card-subtitle">{project.projectDesc}</p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className="project-tag"
                              onClick={() => openProjectInNewWindow(link.url)}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
