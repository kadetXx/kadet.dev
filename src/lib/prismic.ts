import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";

export const repositoryName = process.env.PRISMIC_REPO_NAME as string;

/* The v2 site resolved post URLs through src/utils/linkResolver.js. The
   same mapping lives here as a route definition so doc.url is populated
   straight off the client. */
export const routes: prismic.ClientConfig["routes"] = [
  { type: "blog_post", path: "/blog/:uid" },
];

export const createClient = (config: prismic.ClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    routes,
    ...config,
  });

  /* Replaces v2's gatsby-plugin-prismic-previews: when draft mode is on,
     queries resolve against the preview ref instead of the published one. */
  enableAutoPreviews({ client });

  return client;
};
