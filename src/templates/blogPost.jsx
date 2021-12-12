import React from "react";
import { graphql } from "gatsby";

import Logo from "../assets/svg/kadet.svg";

const PostTemplate = ({ data }) => {
  return (
    <div style={{ padding: "5% 10%", minHeight: "100vh" }}>
      <div className="logo_container">
        <a href="/">
          <img src={Logo} alt="kadet logo" />
        </a>
      </div>

      <h1>{data.markdownRemark.frontmatter.title}</h1>
    </div>
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
