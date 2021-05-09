import * as React from "react";

import Layout from "../layout/Layout";
import Resume from '../components/resume/Resume'

// markup
const ResumePage = () => {
  return (
    <Layout active="resume">
      <Resume />
    </Layout>
  );
};

export default ResumePage;
