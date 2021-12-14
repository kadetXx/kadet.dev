// gatsby-browser.js AND gatsby-ssr.js

import * as React from "react";
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from "gatsby-plugin-prismic-previews";

import { linkResolver } from "./src/utils/linkResolver";
import PostTemplate from "./src/templates/postTemplate";

export const wrapRootElement = ({ element }) => (
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
    {element}
  </PrismicPreviewProvider>
);
