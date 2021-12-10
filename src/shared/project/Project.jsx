import React from "react";
import "./Project.css";

const Project = ({ id, title, description, github, live, stack, isPrivate, fullWidth }) => {
  return (
    <div className={`box_container ${id%2 !== 0 && !fullWidth ? 'box_container_pad' : ''} ${fullWidth && 'box_container_full'}`}>
      <div className="box">
        <div className="project_details">
          <h3> {title} </h3>
          <small> {stack} </small>
          <p> {description} </p>
        </div>

        <div className="project_links">
          <small>
            <a href={live} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-link"></i> Live{" "}
            </a>
          </small>

          {isPrivate ? (
            ""
          ) : (
            <small>
              <a href={github} target="_blank" rel="noopener noreferrer">
                {" "}
                <i className="fas fa-code-branh"></i> Code{" "}
              </a>
            </small>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
