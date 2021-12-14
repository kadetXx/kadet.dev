// Example preview.js file

import * as React from "react";
import { withPrismicPreviewResolver } from "gatsby-plugin-prismic-previews";

const PreviewPage = ({ isPreview, ...props }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <h3 style={{ textAlign: "center" }}>
        {isPreview === false ? "No preview found" : "Loading preview…"}
      </h3>
    </div>
  );
};

export default withPrismicPreviewResolver(PreviewPage);
