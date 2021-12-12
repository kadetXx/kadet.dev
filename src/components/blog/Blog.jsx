import React from "react";
import "./Blog.css";

import Post from "../../shared/postCard/PostCard";
import GoButton from "../../shared/goButton/GoButton";

const Blog = ({ posts }) => {
  // const postss = [
  //   {
  //     id: 1,
  //     title:
  //       "Breaking Into Web3 - I Built A DApp For The First Time With Next.js",
  //     date: "November 5th, 2021",
  //     tags: ["Web3", "Next js"],
  //     link: "/blog/web-3",
  //   },
  //   {
  //     id: 2,
  //     title: "Setting Up Context API With React The Stress Free Way",
  //     date: "November 5th, 2021",
  //     tags: ["React", "Context API"],
  //     link: "/blog/web-3",
  //   },

  //   {
  //     id: 3,
  //     title: "Do You Really Need React's UseCallBack Hook?",
  //     date: "November 5th, 2021",
  //     tags: ["Typescript", "React"],
  //     link: "/blog/web-3",
  //   },

  //   {
  //     id: 4,
  //     title:
  //       "Why I Think CSS (Not Javascript) Gives You An Edge Over The Other Applicants",
  //     date: "November 5th, 2021",
  //     tags: ["GraphQL", "Apollo"],
  //     link: "/blog/web-3",
  //   },
  // ];

  return (
    <div className="blog">
      <div className="blog_posts">
        {posts.map((post, index) => (
          <Post key={index} {...post} id={index} />
        ))}
      </div>

      <GoButton
        prev={{ url: "/", text: "Home" }}
        next={{ url: "/resume", text: "Resume" }}
      />
    </div>
  );
};

export default Blog;
