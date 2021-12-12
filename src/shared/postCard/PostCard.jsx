import React from "react";
import "./PostCard.css";

const Post = ({ id, title, date, tags, link }) => {
  return (
    <article
      className={`box_container ${id % 2 !== 0 ? "box_container_pad" : ""} `}
    >
      <a href={link} className="post">
        <div className="post_meta">
          <small className="post_tags">
            {tags.map((tag, index) =>
              index === tags.length - 1 ? tag : `${tag}, `
            )}
          </small>
          <date className="post_date"> {date} </date>
        </div>

        <div className="post_title">
          <h3>{title}</h3>
          <small className="post_length">
            <i class="far fa-clock"></i> 3mins read
          </small>
        </div>
      </a>
    </article>
  );
};

export default Post;
