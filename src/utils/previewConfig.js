import PostTemplate from "../templates/postTemplate";
import { linkResolver } from "./linkResolver";
import { componentResolverFromMap } from "gatsby-plugin-prismic-previews";

export const repositoryConfig = [
  {
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
    componentResolver: componentResolverFromMap({
      blog_post: PostTemplate,
    }),
  },
];
