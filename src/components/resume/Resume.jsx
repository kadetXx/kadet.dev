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
        ended: null,
        description:
          "I'm currently working with Playarone engineering team in building a world class gaming platform",
        achievements: [
          "Converted AdobeXD UI design into usable code",
          "Worked with React and SASS to build custom components",
          "Used ant design system for reusable utilities",
          "Handled complex state management using react hooks",
          "Worked closely with a senior dev and learnt new technologies",
        ],
      },

      {
        company: "Charisol",
        position: "Frontend Developer [Contract]",
        started: "October 2020",
        ended: null,
        description:
          "I work with the charisol product team on a contract basis to transform ideas and UI/UX designs into scalable products",
        achievements: [
          "Worked closely with designers to deliver pixel perfect UIs using react js",
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
          "Led my team to to victory multiple times in weekly coding challenges",
          "Headed the frontend department of my team to deliver responsive web templates to be sold on envato market",
          "Worked on customerPay and expenseNG web apps with laravel blade and boostrap",
          "Worked with backend developers on a Django based open source project to deliver dashboard functionality and UI using Jinja",
        ],
      },
    ];

    return (
      <div className='resume'>
        <div className='resume_container'>
          <div className='top_row'>
            <h2>Collins Enebeli</h2>
            <div className='buttons'>
              <a
                href='https://www.linkedin.com/in/collins-enebeli-online/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <small>
                  <i className='fab fa-linkedin'></i> <span>Linked In</span>
                </small>
              </a>
              <a
                href='https://drive.google.com/file/d/1_f4YCMMd6wsBhjfi52vIeWOZfFnl1M7m/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
              >
                <small>
                  <i className='fas fa-download'></i> <span>Download </span>
                </small>
              </a>
            </div>
          </div>

          <p className='subheading'>Frontend Developer</p>

          <div className='summary'>
            <p>
              Frontend developer, passionate and dedicated in bringing ideas
              from pixels to live scalable products. I develop responsive
              applications with user experience as top priority. I’m always
              ready to adapt according to project specifications irrespective of
              stack.
            </p>
          </div>

          <div className='divider'>
            <p>Skills</p>
            <span></span>
          </div>

          <div className='skills'>
            <p>
              HTML/CSS, SASS, Javascript [ES6], Bootstrap, React.js, React Js,
              Styled Components, GraphQL, Jquery, Git, Vue.js, Laravel blade,
              EJS, Netlify, Heroku, Wordpress, Search Engine Optimisation.
            </p>
          </div>

          <div className='divider'>
            <p>Experience</p>
            <span></span>
          </div>

          <div className='exp_container'>
            {experience.map((exp, index) => (
              <section className='experience' key={index}>
                <p className='title'>
                  {exp.company} - <i>{exp.position}</i>
                  <span>
                    <br /> {exp.started.toUpperCase()} -{" "}
                    {exp.ended === null ? "PRESENT" : exp.ended.toUpperCase()}
                  </span>
                </p>

                <article className='description'>
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

          <div className='divider'>
            <p>Education</p>
            <span></span>
          </div>

          <div className='exp_container'>
            <section className='experience'>
              <p className='title'>
                Federal University Of Petroleum Resources Effurun — JUPEB A
                Level Certificate
                <span>
                  <br /> 2016-2017
                </span>
              </p>
            </section>
          </div>

          <div className='divider'>
            <p>Projects</p>
            <span></span>
          </div>

          <div className='exp_container'>
            <section className='experience'>
              <article className='description'>
                <p>
                  Links to my works can be found on <span> </span>{" "}
                  <Link to='/work'>kadet.dev/work</Link>{" "}
                </p>
              </article>
            </section>
          </div>
        </div>

        <div className='go_button_container'>
          <Link to='/contact'>
            <button>
              <span class='material-icons'>arrow_left</span> Contact
            </button>
          </Link>
          <Link to='/'>
            <button>
              Home <span class='material-icons'>arrow_right</span>{" "}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Resume;
