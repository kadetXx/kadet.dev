import React from "react";

import Layout from "../../layout/Layout";
import Posts from "../../components/blog/Blog";

const Blog = () => {
  return (
    <Layout active="blog" title="Blog">
      <Posts />
    </Layout>
  );
};

export default Blog;
