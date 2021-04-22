import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Resume.css";

export class Resume extends Component {
  componentDidMount() {
    this.props.activeMenu(1);
  }

  render() {
    const experience = [
      {
        company: "Playarone",
        position: "Frontend Developer",
        started: "September 2020",
        ended: "Feburary 2021",
        description:
          "I Joined the Playarone engineering team in building an online gaming community.",
        achievements: [
          "Worked with React and SASS to build components from scratch",
          "Handled complex state management using react hooks",
          "Worked closely with a senior dev to integrate graphQL and typescript.",
        ],
      },

      {
        company: "Charisol",
        position: "Frontend Developer [Contract]",
        started: "October 2020",
        ended: "March 2021",
        description:
          "I worked with the charisol product team on a contract basis to build a web application for a fintech startup",
        achievements: [
          "Transformed figma prototypes to functional UIs using react js, react context and sass",
          "Made use of tools like Notion & Usepastel for task management and feedback",
          "Interacted with GraphQL apis from the client side using Apollo GraphQL",
        ],
      },

      {
        company: "HNG Internships",
        position: "Frontend Developer [Intern]",
        started: "May 2020",
        ended: "August 2020",
        description:
          "I contributed in developing user interfaces for quite a number of products within three months while learning new skills",
        achievements: [
          "Worked with node.js developers to build a certificate generator",
          "Headed the frontend department of my team to deliver responsive web templates to be sold on envato market",
          "Built an open source micro API project alongside python (Django) Developers using Jinja template engine on the frontend",
        ],
      },
    ];

    return (
      <div className="resume">
        <div className="resume_container">
          <div className="top_row">
            <h2>Collins Enebeli</h2>
            <div className="buttons">
              <a
                href="https://www.linkedin.com/in/collins-enebeli-online/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>
                  <i className="fab fa-linkedin"></i> <span>Linked In</span>
                </small>
              </a>
              <a
                href="https://drive.google.com/file/d/1tbgKQ8dsGmNXOR5Axb7vWhbOBDBA-3uV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <small>
                  <i className="fas fa-download"></i> <span>Download </span>
                </small>
              </a>
            </div>
          </div>

          <p className="subheading">Frontend Developer</p>

          <div className="summary">
            <p>
              I’m a Frontend software developer, passionate about transforming
              ideas from pixels to scalable products. I create functional
              applications with user experience as top priority.
            </p>
          </div>

          <div className="divider">
            <p>Core Technologies</p>
            <span></span>
          </div>

          <div className="skills">
            <p>
              HTML/CSS, SASS, Javascript [ES6], React Js, Next Js, Vue Js,
              CSS-in-JS, GraphQL, Redux, Firebase.
            </p>
          </div>

          <div className="divider">
            <p>Familiar With</p>
            <span></span>
          </div>

          <div className="skills">
            <p>
              Typescript, Flux, Node Js, Express, Web Sockets, PWAs, Wordpress,
              SEO.
            </p>
          </div>

          <div className="divider">
            <p>On The Job</p>
            <span></span>
          </div>

          <div className="skills">
            <p>Scrum, CI/CD, Version Control, Best Practices</p>
          </div>

          <div className="divider">
            <p>Experience</p>
            <span></span>
          </div>

          <div className="exp_container">
            {experience.map((exp, index) => (
              <section className="experience" key={index}>
                <p className="title">
                  {exp.company} - <i>{exp.position}</i>
                  <span>
                    <br /> {exp.started.toUpperCase()} -{" "}
                    {exp.ended === null ? "PRESENT" : exp.ended.toUpperCase()}
                  </span>
                </p>

                <article className="description">
                  <p> {exp.description} </p>
                  {exp.achievements.map((achievement, index) => (
                    <p key={index}>
                      <span>■</span> {achievement}
                    </p>
                  ))}
                </article>
              </section>
            ))}
          </div>

          <div className="divider">
            <p>Education</p>
            <span></span>
          </div>

          <div className="exp_container">
            <section className="experience">
              <p className="title">
                Federal University Of Petroleum Resources Effurun — B.Eng,
                Marine Engineering
                <span>
                  <br /> 2017-2022
                </span>
              </p>
            </section>
          </div>

          <div className="divider">
            <p>Projects</p>
            <span></span>
          </div>

          <div className="exp_container">
            <section className="experience">
              <article className="description">
                <p>
                  Links to my works can be found on <span> </span>{" "}
                  <Link to="/work">kadet.dev/work</Link>{" "}
                </p>
              </article>
            </section>
          </div>
        </div>

        <div className="go_button_container">
          <Link to="/contact">
            <button>
              <span class="material-icons">arrow_left</span> Contact
            </button>
          </Link>
          <Link to="/">
            <button>
              Home <span class="material-icons">arrow_right</span>{" "}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Resume;
