import React from "react";
import { graphql } from "gatsby";

import Layout from "../layout/Layout";
import Posts from "../components/blog/Blog";

const Blog = ({ data }) => {
  return (
    <Layout active="blog" title="Blog">
      <Posts posts={data?.allMarkdownRemark?.nodes} />
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        wordCount {
          words
        }
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`