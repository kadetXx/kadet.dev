import * as prismic from "@prismicio/client";
import { createClient } from "./prismic";
import { readingTime } from "./wordCount";

export type PostSummary = {
  uid: string;
  url: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  readingTime: string;
};

export type Post = PostSummary & { html: string };

/* v2 formatted dates in the GraphQL query with formatString "MMMM DD, YYYY". */
const formatDate = (iso: string | null) =>
  iso
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      }).format(new Date(iso))
    : "";

type PrismicPost = prismic.PrismicDocument<{
  title: prismic.RichTextField;
  description: prismic.RichTextField;
  content: prismic.RichTextField;
  thumbnail: prismic.ImageField;
}>;

const toSummary = (doc: PrismicPost): PostSummary => ({
  uid: doc.uid as string,
  url: doc.url ?? `/blog/${doc.uid}`,
  title: prismic.asText(doc.data.title) ?? "",
  description: prismic.asText(doc.data.description) ?? "",
  tags: doc.tags,
  date: formatDate(doc.first_publication_date),
  readingTime: readingTime(prismic.asText(doc.data.content) ?? ""),
});

/* Newest first, matching the order the v2 blog index rendered in. */
export const getPosts = async (): Promise<PostSummary[]> => {
  const client = createClient();
  const docs = await client.getAllByType<PrismicPost>("blog_post", {
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return docs.map(toSummary);
};

export const getPost = async (uid: string): Promise<Post | null> => {
  const client = createClient();

  const doc = await client
    .getByUID<PrismicPost>("blog_post", uid)
    .catch(() => null);

  if (!doc) return null;

  return {
    ...toSummary(doc),
    html: prismic.asHTML(doc.data.content) ?? "",
  };
};

/* Prev/next are derived from the same newest-first list rather than baked in
   at build time the way gatsby-node did it. */
export const getNeighbours = async (uid: string) => {
  const posts = await getPosts();
  const index = posts.findIndex((post) => post.uid === uid);

  return {
    newer: index > 0 ? posts[index - 1] : null,
    older: index >= 0 && index < posts.length - 1 ? posts[index + 1] : null,
  };
};
