import Link from "next/link";
import { ClockIcon } from "./Icons";
import type { PostSummary } from "@/lib/posts";
import "./PostCard.css";

/* Ported from v2's shared/postCard. The odd-index offset and the hover
   scale/dim live in PostCard.css exactly as they did before. */
const PostCard = ({
  post,
  index,
}: {
  post: PostSummary;
  index: number;
}) => (
  <article
    className={`post_container ${index % 2 !== 0 ? "post_container_pad" : ""} `}
    itemScope
    itemType="http://schema.org/Article"
  >
    <Link href={post.url} itemProp="url" className="post">
      <div className="post_meta">
        <small className="post_tags">{post.tags.join(", ")}</small>
        <small className="post_date"> {post.date} </small>
      </div>

      <div className="post_title">
        <h3>{post.title}</h3>
        <small className="post_length">
          <ClockIcon /> {post.readingTime}
        </small>
      </div>
    </Link>
  </article>
);

export default PostCard;
