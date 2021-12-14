// Example preview.js file

import * as React from "react";
import { withPrismicPreviewResolver } from "gatsby-plugin-prismic-previews";

const PreviewPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <h3 style={{ textAlign: "center" }}>Loading preview…</h3>
    </div>
  );
};

export default withPrismicPreviewResolver(PreviewPage);
