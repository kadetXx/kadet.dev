import React from 'react';
import './Work.css';

import Project from '../../shared/projectCard/ProjectCard';
import GoButton from '../../shared/goButton/GoButton';

import { projects } from '../../constants/projects';

const Work = () => {
  return (
    <div className="work">
      <div className="portfolio_showcase portfolio_showcase">
        <h3 className="title">WEB3</h3>
        {projects.web3.map((project, index) => (
          <Project key={index} {...project} id={index} />
        ))}
      </div>

      <div className="portfolio_showcase">
        <h3 className="title">DEV TOOLS/PACKAGES</h3>
        {projects.tools.map((project, index) => (
          <Project key={index} {...project} id={index} />
        ))}
      </div>

      <div className="portfolio_showcase">
        <h3 className="title">OTHERS</h3>
        {projects.others.map((project, index) => (
          <Project key={index} {...project} id={index} />
        ))}
      </div>

      <GoButton
        prev={{ url: '/', text: 'Home' }}
        next={{ url: '/blog', text: 'Articles' }}
      />
    </div>
  );
};

export default Work;
