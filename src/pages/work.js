import * as React from "react";

import Layout from "../layout/Layout";
import Work from '../components/work/Work'

// markup
const WorkPage = () => {
  return (
    <Layout active="work">
      <Work />
    </Layout>
  );
};

export default WorkPage;
