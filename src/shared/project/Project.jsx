import React from "react";
import "./Project.css";

const Project = ({ id, title, description, github, live, stack, isPrivate }) => {
  return (
    <div className={`box_container ${id%2 !== 0 ? 'box_container_pad' : ''}`}>
      <div className="box">
        <div className="project_details">
          <h3> {title} </h3>
          <small> {stack} </small>
          <p> {description} </p>
        </div>

        <div className="project_links">
          <small>
            <a href={live} target="_blank" rel="noopener noreferrer">
              <i className="far fa-eye"></i> Live{" "}
            </a>
          </small>

          {isPrivate ? (
            ""
          ) : (
            <small>
              <a href={github} target="_blank" rel="noopener noreferrer">
                {" "}
                <i className="fas fa-code-branch"></i> Code{" "}
              </a>
            </small>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;