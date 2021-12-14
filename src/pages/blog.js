import React from "react";
import { graphql } from "gatsby";

import Layout from "../layout/Layout";
import Posts from "../components/blog/Blog";

const Blog = ({ data }) => {
  return (
    <Layout active="blog" title="Blog">
      <Posts posts={data?.allPrismicBlogPost?.nodes} />
    </Layout>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    allPrismicBlogPost {
      nodes {
        tags
        first_publication_date(formatString: "MMMM DD, YYYY")
        data {
          title {
            text
          }
          description {
            text
          }
          content {
            html
            text
          }
        }
      }
    }
  }
`;

// {
//   site {
//     siteMetadata {
//       title
//     }
//   }
//   allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//     nodes {
//       excerpt
//       wordCount {
//         words
//       }
//       fields {
//         slug
//       }
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         title
//         description
//         tags
//       }
//     }
//   }
// }