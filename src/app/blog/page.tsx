import type { Metadata } from "next";
import BackButton from "@/components/BackButton";
import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/posts";
import "./blog.css";

/* ISR: new Prismic posts appear without a redeploy. */
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on frontend, tooling and whatever else.",
};

export default async function BlogIndex() {
  const posts = await getPosts();

  return (
    <>
      <BackButton href="/" label="Back to home" />

      <div className="blog">
        <div className="blog_posts">
          {posts.map((post, index) => (
            <PostCard key={post.uid} post={post} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
