import React from 'react';
import '../../shared/postCard/PostCard.css';
import '../blog/Blog.css';
import './Work.css';

import GoButton from '../../shared/goButton/GoButton';

import { projects } from '../../constants/projects';

const Work = () => {
  return (
    <div className="blog work">
      <div className="blog_posts">
        {projects.map((project, index) => (
          <article
            key={index}
            className={`post_container ${index % 2 !== 0 ? "post_container_pad" : ""}`}
          >
            <div className="post">
              <div className="post_meta">
                <small className="post_tags">{project.stack}</small>
                <small className="post_date">{project.description}</small>
              </div>

              <div className="post_title">
                <h3>{project.title}</h3>
                <small className="post_length">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-globe"></i> Visit
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ marginLeft: project.url ? '1.5rem' : 0 }}>
                      <i className="fas fa-code-branch"></i> Code
                    </a>
                  )}
                </small>
              </div>
            </div>
          </article>
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
