import "./src/css/global.css";
import "./src/css/code.css"

import React from "react";
import CustomCursor from "./src/shared/cursor/Cursor";

import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";
import { repositoryConfig } from "./src/utils/previewConfig";

export const wrapPageElement = ({ element, props }) => {
  return (
    <PrismicPreviewProvider repositoryConfigs={repositoryConfig}>
      <CustomCursor {...props}>{element}</CustomCursor>
    </PrismicPreviewProvider>
  );
};
