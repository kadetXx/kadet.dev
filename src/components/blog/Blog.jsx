import React from "react";
import "./Blog.css";

import Post from "../../shared/postCard/PostCard";
import GoButton from "../../shared/goButton/GoButton";

const Blog = () => {
  const posts = [
    {
      title: "BevelPlexus",
      description: "UI for a fintech application",
      github: "",
      live: "https://dev-bevelplexus.netlify.app/",
      stack: "React + Context API",
      isPrivate: true,
    },

    {
      title: "Haute Couture",
      description: "Fashion landing page",
      github: "https://github.com/kadetXx/haute-couture",
      live: "http://haute-couture.vercel.app/",
      stack: "React + Typescript",
      isPrivate: false,
    },

    {
      title: "Birdbox",
      description: "Social application with real time Messaging",
      github: "https://github.com/kadetXx/birdbox",
      live: "https://birdbox.space/",
      stack: "Vue + Socket.io + Express",
      isPrivate: false,
    },

    {
      title: "Seerbit Shop",
      description: "One page shop UI",
      github: "https://github.com/kadetXx/seerbit-css-test",
      live: "https://shoppiesawards.netlify.app/",
      stack: "HTML + CSS",
      isPrivate: false,
    },
  ];

  return (
    <div className="work">
      <div className="portfolio_showcase">
        {posts.map((project, index) => (
          <Post key={index} {...project} id={index} />
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
