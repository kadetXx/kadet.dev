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
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="post"
            >
              <div className="post_meta">
                <small className="post_tags">{project.stack}</small>
                <small className="post_date">{project.description}</small>
              </div>

              <div className="post_title">
                <h3>{project.title}</h3>
              </div>
            </a>
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
