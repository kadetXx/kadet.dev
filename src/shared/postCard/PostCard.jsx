import React from "react";
import "./PostCard.css";

import { Link } from "gatsby";

const getMins = (words) => {
  const count = Number(words) / 200;

  const [mins, secs] = count.toFixed(2).toString().split(".");

  return {
    mins: parseInt(mins),
    secs: parseInt(secs),
  };
};

const Post = ({ id, fields, wordCount, frontmatter }) => {
  const { date, title, tags } = frontmatter;
  const { words } = wordCount;

  const { mins, secs } = getMins(words);

  return (
    <article
      className={`box_container ${id % 2 !== 0 ? "box_container_pad" : ""} `}
      itemScope
      itemType="http://schema.org/Article"
    >
      <Link to={fields.slug} itemProp="url" className="post">
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
            <i class="far fa-clock"></i>{" "}
            {mins === 0 ? `1 min` : `${mins} mins`} read
          </small>
        </div>
      </Link>
    </article>
  );
};

export default Post;
