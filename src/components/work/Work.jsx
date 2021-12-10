import React from "react";
import "./Work.css";

import { Link } from "gatsby";

import Project from "../../shared/project/Project";

const Work = () => {
  const projects = [
    {
      title: "Checkmate",
      description: "Sign up portal for Checkmate Africa community",
      github: "https://github.com/kadetXx/checkmate",
      live: "https://checkmate.africa/",
      stack: "React + Styled Components",
      isPrivate: false,
    },

    {
      title: "Birdbox",
      description: "Social application with Real time Messaging",
      github: "https://github.com/kadetXx/birdbox",
      live: "https://birdbox.space/",
      stack: "Vue + Socket.io + Express",
      isPrivate: false,
    },

    {
      title: "EndSars",
      description: "Web app to support the #EndSARS campaign",
      github: "https://github.com/kadetXx/endsars",
      live: "https://endsars.vercel.app/",
      stack: "React",
      isPrivate: false,
    },

    {
      title: "Shoppies",
      description: "Movie Awards Nomination App",
      github: "https://github.com/kadetXx/shoppies",
      live: "https://shoppiesawards.netlify.app/",
      stack: "React + SASS",
      isPrivate: false,
    },

    {
      title: "Vectorly",
      description: "Draw basic shapes with SVG",
      github: "https://github.com/kadetXx/vectorly",
      live: "https://vectorly.kadetxx.vercel.app/",
      stack: "React",
      isPrivate: false,
    },

    {
      title: "Animepanda",
      description: "Mobile App landing page",
      github: "https://github.com/kadetXx/animepanda",
      live: "https://animepanda.herokuapp.com",
      stack: "Sass + Javsacript + PHP",
      isPrivate: false,
    },
  ];

  return (
    <div className="work">
      <div className="portfolio_showcase portfolio_showcase_full">
        <h3 className="title">FEATURED</h3>
        {projects.slice(0, 2).map((project, index) => (
          <Project key={index} {...project} id={index} fullWidth />
        ))}
      </div>

      <div className="portfolio_showcase">
        <h3 className="title">OTHERS</h3>
        {projects.map((project, index) => (
          <Project key={index} {...project} id={index} />
        ))}
      </div>

      <div className="go_button_container">
        <Link to="/">
          <button>
            <span class="material-icons">arrow_left</span> Home
          </button>
        </Link>
        <Link to="/contact">
          <button>
            Contact <span class="material-icons">arrow_right</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Work;
