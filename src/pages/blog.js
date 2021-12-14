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
        url
        first_publication_date(formatString: "MMMM DD, YYYY")
        data {
          title {
            text
          }
          content {
            text
          }
        }
      }
    }
  }
`;