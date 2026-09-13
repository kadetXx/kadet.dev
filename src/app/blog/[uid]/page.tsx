import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton";
import PostBody from "@/components/PostBody";
import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon, ClockIcon } from "@/components/Icons";
import { getNeighbours, getPost, getPosts } from "@/lib/posts";
import "./post.css";

/* ISR: new Prismic posts appear without a redeploy. */
export const revalidate = 3600;

type Params = { params: Promise<{ uid: string }> };

export const generateStaticParams = async () => {
  const posts = await getPosts();
  return posts.map(({ uid }) => ({ uid }));
};

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const { uid } = await params;
  const post = await getPost(uid);

  if (!post) return { title: "Not found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: post.url,
    },
  };
};

export default async function PostPage({ params }: Params) {
  const { uid } = await params;
  const post = await getPost(uid);

  if (!post) notFound();

  const { older, newer } = await getNeighbours(uid);

  return (
    <>
      <BackButton href="/blog" label="Back to all posts" />

      <div className="post-meta">
        <small className="post-timing">
          <CalendarIcon /> {post.date}
        </small>
        <small className="post-timing">
          <ClockIcon /> {post.readingTime}
        </small>
        <h1 className="post-title">{post.title}</h1>
        <small className="post-tags">{post.tags.join(", ")}</small>
      </div>

      <PostBody html={post.html} />

      <div className="post-footer">
        {older && (
          <Link href={older.url} className="posts-nav post-pre">
            <small>
              <ArrowLeftIcon /> PREV POST
            </small>
            <p>{older.title}</p>
          </Link>
        )}

        {newer && (
          <Link href={newer.url} className="posts-nav post-next">
            <small>
              NEXT POST <ArrowRightIcon />
            </small>
            <p>{newer.title}</p>
          </Link>
        )}
      </div>
    </>
  );
}
