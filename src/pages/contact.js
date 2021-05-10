import * as React from "react";

import Layout from "../layout/Layout";
import Contact from '../components/contact/Contact'

// markup
const ContactPage = () => {
  return (
    <Layout active="contact" title="Contact">
      <Contact />
    </Layout>
  );
};

export default ContactPage;
