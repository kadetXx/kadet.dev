import PostTemplate from "./src/templates/postTemplate";
import { linkResolver } from "./src/utils/linkResolver";
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
