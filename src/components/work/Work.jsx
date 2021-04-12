import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import Project from "../utils/project/Project";
import uuid from "react-uuid";

export class Work extends Component {
  state = {
    projects: [

      {
        id: uuid(),
        title: "Checkmate",
        description: "Sign up portal for Checkmate Africa community",
        github: "https://github.com/kadetXx/checkmate",
        live: "https://checkmate.africa/",
        stack: "React + Styled Components",
        isPrivate: false,
      },

      {
        id: uuid(),
        title: "Birdbox",
        description: "Social application with Real time Messaging",
        github: "https://github.com/kadetXx/birdbox",
        live: "https://birdbox.space/",
        stack: "Vue + Socket.io + Express",
        isPrivate: false,
      },

      {
        id: uuid(),
        title: "EndSars",
        description: "Web app to support the #EndSARS campaign",
        github: "https://github.com/kadetXx/endsars",
        live: "https://endsars.vercel.app/",
        stack: "React",
        isPrivate: false,
      },

      {
        id: uuid(),
        title: "Shoppies",
        description: "Movie Awards Nomination App",
        github: "https://github.com/kadetXx/shoppies",
        live: "https://shoppiesawards.netlify.app/",
        stack: "React + SASS",
        isPrivate: false,
      },

      {
        id: uuid(),
        title: "Vectorly",
        description: "Draw basic shapes with SVG",
        github: "https://github.com/kadetXx/vectorly",
        live: "https://vectorly.kadetxx.vercel.app/",
        stack: "React",
        isPrivate: false,
      },

      {
        id: uuid(),
        title: "Animepanda",
        description: "Mobile App landing page",
        github: "https://github.com/kadetXx/animepanda",
        live: "https://animepanda.herokuapp.com",
        stack: "Sass + Javsacript + PHP",
        isPrivate: false,
      }, 
    ],
  };

  componentDidMount() {
    this.props.activeMenu(0);
  }

  render() {
    return (
      <div className='work'>
        <div className='portfolio_showcase'>
          {this.state.projects.map((project) => (
            <Project key={project.id} data={project} />
          ))}
        </div>

        <div className='go_button_container'>
          <Link to='/'>
            <button>
              <span class='material-icons'>arrow_left</span> Home
            </button>
          </Link>
          <Link to='/contact'>
            <button>
              Contact <span class='material-icons'>arrow_right</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Work;
