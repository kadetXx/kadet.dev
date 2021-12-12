import React from "react";
import "./postTemplate.css";
import { graphql, Link } from "gatsby";

import Layout from "../layout/Layout";
import Seo from "../shared/seo/Seo";

const getMins = (words) => {
  const count = Number(words) / 200;
  const [mins, secs] = count.toFixed(2).toString().split(".");

  return {
    mins: parseInt(mins),
    secs: parseInt(secs),
  };
};

const PostTemplate = ({ data }) => {
  const { title, date, tags, description } = data.markdownRemark.frontmatter;
  const { words } = data.markdownRemark.wordCount;

  // previous and next posts
  const { fields: nextFields, frontmatter: nextMatter } = data?.next || {};
  const { fields: prevFields, frontmatter: prevMatter } = data?.next || {};

  const { mins, secs } = getMins(words);

  return (
    <Layout active="blog" title={title} article>
      <Seo title={title} description={description} />
      <div className="post-meta">
        <small className="post-timing">
          <i className="far fa-calendar-alt"></i> {date}
        </small>
        <small className="post-timing">
          <i className="far fa-clock"></i>{" "}
          {mins === 0 ? `${secs} seconds` : `${mins} mins`} read
        </small>
        <h1 className="post-title">{title}</h1>
        <small className="post-tags">
          {tags.map((tag, index) =>
            index === tags.length - 1 ? tag : `${tag}, `
          )}
        </small>
      </div>

      <section
        className="post-content"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        itemProp="articleBody"
      />

      <div className="post-footer">
        {prevFields && (
          <Link to={prevFields.slug} className="posts-nav post-pre">
            <small>
              {" "}
              <i className="fas fa-long-arrow-alt-left"></i> PREV POST
            </small>

            <p>{prevMatter.title}</p>
          </Link>
        )}
        {nextFields && (
          <Link to={nextFields.slug} className="posts-nav post-next">
            <small>
              NEXT POST <i className="fas fa-long-arrow-alt-right"></i>
            </small>

            <p>{nextMatter.title}</p>
          </Link>
        )}
      </div>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      wordCount {
        words
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
