import "./src/css/global.css";

import React from "react";
import CustomCursor from "./src/shared/cursor/Cursor";

export const wrapPageElement = ({ element, props }) => {
  return (
    <PrismicPreviewProvider
      repositoryConfigs={[
        {
          repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
          linkResolver,
          componentResolver: componentResolverFromMap({
            blog_post: PostTemplate,
          }),
        },
      ]}
    >
      <CustomCursor {...props}>{element}</CustomCursor>
    </PrismicPreviewProvider>
  );
};
