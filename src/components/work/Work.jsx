import React from "react";
import "./Work.css";

import Project from "../../shared/projectCard/ProjectCard";
import GoButton from "../../shared/goButton/GoButton";

import { projects } from "../../constants/projects";

const Work = () => {
  return (
    <div className="work">
      <div className="portfolio_showcase portfolio_showcase_full">
        <h3 className="title">MOST RECENT</h3>
        {projects.slice(0, 2).map((project, index) => (
          <Project key={index} {...project} id={index} fullWidth />
        ))}
      </div>

      <div className="portfolio_showcase">
        <h3 className="title">OTHER PROJECTS</h3>
        {projects.slice(2).map((project, index) => (
          <Project key={index} {...project} id={index} />
        ))}
      </div>

      <GoButton
        prev={{ url: "/", text: "Home" }}
        next={{ url: "/blog", text: "Articles" }}
      />
    </div>
  );
};

export default Work;
