import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../layout/Layout";

import Work from '../components/work/Work'

// markup
const IndexPage = ({ data }) => {
  return (
    <Layout home={true} active="work" posts={data?.allPrismicBlogPost?.nodes}>
      <Work />
    </Layout>
  );
};

export default IndexPage;

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
