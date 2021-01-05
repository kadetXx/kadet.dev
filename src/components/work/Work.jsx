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
        title: "EndSars",
        description: "Web app to support the #EndSARS campaign",
        github: "https://github.com/kadetXx/endsars",
        live: "https://endsars.vercel.app/",
        stack: "React",
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
        title: "Kadet.dev",
        description: "My Portfolio Site",
        github: "https://github.com/kadetXx/kadet.dev",
        live: "https://kadet.dev",
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

      {
        id: uuid(),
        title: "MicroAPI",
        description: "Opensource microservices",
        github: "",
        live: "https://microapi.dev",
        stack: "Sass + Javsacript + Django",
        isPrivate: true,
      },

      {
        id: uuid(),
        title: "Strategex.io",
        description: "Static singlepage for strategy management app",
        github: "",
        live: "https://strategydashboard.netlify.app/objectives/",
        stack: "SASS + Jquery UI",
        isPrivate: true,
      },

      // {
      //   id: uuid(),
      //   title: "Travertic",
      //   description: "Real time multiplayer tic tac toe game",
      //   github: "https://github.com/kadetXx/tictactoe",
      //   live: "https://travertic.herokuapp.com",
      //   stack: "Node.js + Socket.io",
      //   isPrivate: false,
      // },

      {
        id: uuid(),
        title: "Github Scanner",
        description: "Lookup github profiles",
        github: "https://github.com/kadetXx/github-profile-scanner",
        live: "https://github-profile-scanner.now.sh/",
        stack: "ES6 + Github API",
        isPrivate: true,
      },

      // {
      //   id: uuid(),
      //   title: "KadNavbar",
      //   description: "Opensourse responsive navbar component",
      //   github: "https://github.com/kadetXx/kadnavbar",
      //   live: "https://kadetxx.github.io/kadnavbar/",
      //   stack: "CSS + Javascript",
      //   isPrivate: false,
      // },

      // {
      //   id: uuid(),
      //   title: 'Instathoughts',
      //   description: 'CRUD social media app',
      //   github: 'https://github.com/kadetXx/insta_thoughts',
      //   live: 'https://instathoughts.netlify.app/',
      //   stack: 'ES6 + Firebase',
      //   isPrivate: false
      // }

      // {
      //   id: uuid(),
      //   title: "customerPay",
      //   description: "Debt/Store management web application",
      //   github: "",
      //   live: "https://customerpay.me/",
      //   stack: "Bootstrap + Javascript + Laravel",
      //   isPrivate: true,
      // },
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
