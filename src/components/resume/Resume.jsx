import React, { Component } from 'react'
import './Resume.css'

export class Resume extends Component {

  componentDidMount() {
    this.props.activeMenu(1)
  }

  render() {
    return (
      <div className='resume_container'>
        <div className="top_row">
          <h2>Collins Enebeli</h2>
          <div className="buttons">
            <a href="https://www.linkedin.com/in/collins-enebeli-online/" target='_blank' rel="noopener noreferrer"><small><i class="fab fa-linkedin"></i> Linked In </small></a> 
            <a href="https://drive.google.com/file/d/1TgCq88QVeaeCjLV70sGmzM_tGqPvzGWI/view?usp=sharing" target='_blank' rel="noopener noreferrer"><small><i class="fas fa-download"></i> Download </small></a> 
          </div>
        </div>
        
        <p className='subheading'>Junior Frontend Developer and UX Engineer</p>
        
        <div className="summary">
          <p>
            Self taught frontend developer, passionate and dedicated in bringing ideas from pixels to live scalable products. I develop responsive applications with user experience as top priority. I’m always ready to adapt according to project specifications irrespective of stack.
          </p>
        </div>

        <div className="divider">
          <p>Skills</p>
          <span></span>
        </div>

        <div className="skills">
          <p>HTML, Css, Sass, Javascript [ES6], Bootstrap, React.js, Jquery, Git, Vue.js, Laravel blade, EJS, Netlify, Heroku, Wordpress, Search Engine Optimisation.</p>
        </div>

        <div className="divider">
          <p>Experience</p>
          <span></span>
        </div>

        <div className="exp_container">
          <section className="experience">
            <p className='title'>Nepa.ng - Frontend Developer & UX Engineer<span>JULY 2020 - PRESENT</span></p>
            <article className='description'>
              I’m currently on a contract based frontend role at nepa.ng and we are developing a new user interface for our web application using vue js and laravel.
            </article>
          </section>

          <section className="experience">
            <p className='title'>Hotels.ng - Frontend Developer (Intern)<span>JUNE 2020 - AUG 2020</span></p>
            <article className='description'>
              <p>I interned for hotels.ng internships as a frontend developer. I contributed in developing user interfaces for quite a number of products within three months. These projects used different backend technologies and I learnt how to work with the required template engines within a short period of time. </p>
              <p>I was able to meet harsh deadlines and completed daily tasks in order to remain on the competitive program and eventually became a finalist. A few highlights I got during this period was being elected as team lead on multiple occasions. </p>
              <p>I also made an app landing page that was voted top three spot on our final frontend challenge where over 200 frontend developers competed.</p> 
            </article>
          </section>

          <section className="experience">
            <p className='title'>Ansalog Digital Agency - Web Developer<span>JAN 2019 - MAY 2020 </span></p>
            <article className='description'>
              I worked as a web developer for Ansalog digital agency in my early stages of getting into tech. I developed world class websites and eCommerce applications for both local and international SMEs using wordpress. As a job requirement, I wrote articles for ansalog blog while following the latest SEO trends.
            </article>
          </section>

        </div>

        <div className="divider">
          <p>Education</p>
          <span></span>
        </div>

        <div className="exp_container">
          <section className="experience">
              <p className='title'>Federal University Of Petroleum Resources Effurun — JUPEB A Level Certificate<span>2016-2017</span></p>
          </section>
        </div>

      </div>
    )
  }
}

export default Resume
