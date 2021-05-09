import * as React from "react";

import Layout from "../layout/Layout";

import Work from '../components/work/Work'

// markup
const IndexPage = () => {
  return (
    <Layout home={true}>
      <Work />
    </Layout>
  );
};

export default IndexPage;
