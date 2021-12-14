import { componentResolverFromMap } from "gatsby-plugin-prismic-previews";

import Post from "../templates/postTemplate";

const linkResolver = (post) => `/blog/${post.uid}`;

export const repositoryConfigs = [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
    componentResolver: componentResolverFromMap({
      post: Post,
    }),
  },
];
