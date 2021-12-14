import React from "react";
import "./PostCard.css";

import { Link } from "gatsby";
import { getMins } from '../../utils/wordCount'

const Post = ({ id, tags, url, first_publication_date, data }) => {
  const { title, content } =  data;
  const { mins } = getMins(content.text);

  return (
    <article
      className={`box_container ${id % 2 !== 0 ? "box_container_pad" : ""} `}
      itemScope
      itemType="http://schema.org/Article"
    >
      <Link to={url} itemProp="url" className="post">
        <div className="post_meta">
          <small className="post_tags">
            {tags.map((tag, index) =>
              index === tags.length - 1 ? tag : `${tag}, `
            )}
          </small>
          <small className="post_date"> {first_publication_date} </small>
        </div>

        <div className="post_title">
          <h3>{title.text}</h3>
          <small className="post_length">
            <i className="far fa-clock"></i>{" "}
            {mins === 0 ? `1 min` : `${mins} mins`} read
          </small>
        </div>
      </Link>
    </article>
  );
};

export default Post;
