import React from "react";
import "./Resume.css";

import { Link } from "gatsby";
import GoButton from "../../shared/goButton/GoButton";

const Resume = () => {
  const experience = [
    {
      company: "Caketools",
      position: "Frontend Engineer",
      started: "May 2021",
      ended: null,
      description:
        "I’m currently building smart solutions on the decentralised web with the team at Caketools labs",
      achievements: [
        "Crafted a component library from scratch using SCSS Modules to ensure consistency.",
        "Used Next Js to deliver optimised, pre-rendered pages when necessary.",
        "Engineered state management with Redux and Hooks.",
        "Pulled data from the blockchain in real time to display live statistics and token prices.",
        "Visualized blockchain data using charting libraries and custom paginated tables.",
        "Maintained a well structured codebase and used Typescript to improve predictability. ",
        "Integrated seamless blockchain wallet connection with support for about six different wallet providers.",
        "Implemented api request caching on the server to save resources, improve performance and generally reduce load on the backend.",
      ],
    },
    {
      company: "Playarone",
      position: "Frontend Developer [Contract]",
      started: "September 2020",
      ended: "October 2021",
      description:
        "I Joined the Playarone engineering team in building an e-sports gaming platform.",
      achievements: [
        "Built complex layouts and components with React & SASS",
        "Managed app state with react hooks",
        "Worked closely with a senior engineer to implement app features with a postgres database, typescript and the MVC pattern.",
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
        "Transformed figma prototypes for a fintech application to a functional UI using react js combined with context api for state management and sass for styling.",
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
              // href="https://drive.google.com/file/d/1CUf5i60GirwkCp2t6Xk1IXQpXBNBJYhG/view?usp=sharing"
              href="/collins-enebeli-resume.pdf"
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
            I’m a frontend software developer, passionate about solving problems
            with code and transforming ideas from pixels to scalable products. I
            create usable applications with user experience as a top priority
            using various web tools, languages and technology.
          </p>
        </div>

        <div className="divider">
          <p>Core Technologies</p>
          <span></span>
        </div>

        <div className="skills">
          <p>
            HTML/CSS/SASS, Javascript [ES6+], React JS, Gatsby JS, Next JS, Vue
            JS, CSS-in-JS, Typescript, GraphQL, Redux, Firebase.
          </p>
        </div>

        <div className="divider">
          <p>Familiar With</p>
          <span></span>
        </div>

        <div className="skills">
          <p>
            Node JS, Express, Nuxt JS, Unit Testing, Web Sockets, PWAs,
            Wordpress, SEO.
          </p>
        </div>

        <div className="divider">
          <p>On The Job</p>
          <span></span>
        </div>

        <div className="skills">
          <p>Agile/Scrum, Version Control, Best Practices, CI/CD</p>
        </div>

        <div className="divider">
          <p>Work Experience</p>
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

        {/* <div className="divider">
          <p>Education</p>
          <span></span>
        </div> */}

        {/* <div className="exp_container">
          <section className="experience">
            <p className="title">
              Federal University Of Petroleum Resources Effurun — B.Eng, Marine
              Engineering
              <span>
                <br /> 2017-2022
              </span>
            </p>
          </section>
        </div> */}

        <div className="divider">
          <p>Projects</p>
          <span></span>
        </div>

        <div className="exp_container">
          <section className="experience">
            <article className="description">
              <p className="nospan">
                Links to my works can be found on{" "}
                <Link to="/work">kadet.dev/work</Link> and more details can be
                provided upon request.
              </p>
            </article>
          </section>
        </div>
      </div>

      <GoButton
        prev={{ url: "/blog", text: "Articles" }}
        next={{ url: "/", text: "Home" }}
      />
    </div>
  );
};

export default Resume;
