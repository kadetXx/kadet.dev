import React from "react";
import "./ProjectCard.css";

const Project = ({
  id,
  title,
  description,
  github,
  live,
  stack,
  isPrivate,
  fullWidth,
  isPackage,
}) => {
  return (
    <div
      className={`box_container ${
        id % 2 !== 0 && !fullWidth ? "box_container_pad" : ""
      } ${fullWidth && "box_container_full"}`}
    >
      <div className="box">
        <div className="project_details">
          <h3> {title} </h3>
          <small> {stack} </small>
          <p> {description} </p>
        </div>

        <div className="project_links">
          <small className="hover-effect">
            <a href={live} target="_blank" rel="noopener noreferrer">
              {isPackage ? (
                <>
                  <i className="fas fa-cube"></i>{" "} Pkg Repo
                </>
              ) : (
                <>
                  <i class="fas fa-eye"></i>{" "}
                  Live
                </>
              )}
            </a>
          </small>

          {isPrivate ? (
            ""
          ) : (
            <small className="hover-effect">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-code-branch"></i>{" "} Code{" "}
              </a>
            </small>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
