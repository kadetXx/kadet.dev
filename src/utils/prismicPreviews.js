import { componentResolverFromMap } from "gatsby-plugin-prismic-previews";

import Post from "../templates/postTemplate";

import { linkResolver } from "./linkResolver";

export const repositoryConfigs = [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
    componentResolver: componentResolverFromMap({
      blog_post: Post,
    }),
  },
];
