// gatsby-browser.js AND gatsby-ssr.js

import * as React from "react";
import { PrismicPreviewProvider } from "gatsby-plugin-prismic-previews";
import { repositoryConfig } from "./src/utils/previewConfig";

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider repositoryConfigs={repositoryConfig}>
    {element}
  </PrismicPreviewProvider>
);
