import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Resume.css'

export class Resume extends Component {

  componentDidMount() {
    this.props.activeMenu(1)
  }

  render() {
    return (
      <div className='resume'>
        <div className='resume_container'>
          <div className="top_row">
            <h2>Collins Enebeli</h2>
            <div className="buttons">
              <a href="https://www.linkedin.com/in/collins-enebeli-online/" target='_blank' rel="noopener noreferrer"><small><i className="fab fa-linkedin"></i> <span>Linked In</span> </small></a> 
              <a href="https://drive.google.com/file/d/14kP_9hQjxV-T22WM0VZQiEmlIf6vFeSZ/view?usp=sharing" target='_blank' rel="noopener noreferrer"><small><i className="fas fa-download"></i> <span>Download </span> </small></a> 
            </div>
          </div>
          
          <p className='subheading'>Frontend Developer</p>
          
          <div className="summary">
            <p>
              Frontend developer, passionate and dedicated in bringing ideas from pixels to live scalable products. I develop responsive applications with user experience as top priority. I’m always ready to adapt according to project specifications irrespective of stack.
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
              <p className='title'>Nepa.ng - Lead Frontend Developer<span> <br/> JULY 2020 - PRESENT</span></p>
              <article className='description'>
                <p>I’m currently a partner with the founders of nepa.ng and I’m leading a small team of junior developers to work on a new user interface for our web application.</p>
              </article>
            </section>

            <section className="experience">
              <p className='title'>HNG Internships - Frontend Developer (Intern)<span> <br/> JUNE 2020 - AUG 2020</span></p>
              <article className='description'>
                <p>I contributed in developing user interfaces for quite a number of products within three months. </p>
                <p><span>■</span> Worked with node.js developers to build a certificate generator </p>
                <p><span>■</span> Led my team to to victory multiple times in weekly coding challenges</p> 
                <p><span>■</span> Headed the frontend department of my team to deliver responsive web templates to be sold on envato market</p> 
                <p><span>■</span> Worked on customerPay and expenseNG web apps with laravel blade and bootstrap</p> 
                <p><span>■</span> Built an app landing page with form capture that was voted top three on our final frontend challenge </p> 
                <p><span>■</span> Worked with backed developers on a Django based open source project to deliver dashboard functionality and pages using Jinja</p> 
              </article>
            </section>

            <section className="experience">
              <p className='title'>Ansalog Digital Agency - Web Developer<span> <br/> JAN 2019 - MAY 2020 </span></p>
              <article className='description'>
                <p> I worked as a web developer for Ansalog digital agency in my early stages of getting into tech.</p>
                <p><span>■</span>Redesigned company website and improved search engine visibility</p> 
                <p><span>■</span> Designed websites for local & international SMEs with wordpress</p> 
                <p><span>■</span> Provided strategic eCommerce solutions for small businesses</p> 
                <p><span>■</span> Wrote Search Engine Optimised articles for the company's blog</p> 
              </article>
            </section>

          </div>

          <div className="divider">
            <p>Education</p>
            <span></span>
          </div>

          <div className="exp_container">
            <section className="experience">
                <p className='title'>Federal University Of Petroleum Resources Effurun — JUPEB A Level Certificate<span> <br/> 2016-2017</span></p>
            </section>
          </div>

          <div className="divider">
            <p>Projects</p>
            <span></span>
          </div>

          <div className="exp_container">
            <section className="experience">
              <article className='description'>
                <p>Links to my works can be found on <span> </span> <Link to='/work'>kadet.dev/work</Link> </p>
              </article>
            </section>
          </div>

        </div>

        <div className="go_button_container">
            <Link to='/contact'> <button> <b>➜ </b> Contact</button></Link>
            <Link to='/'> <button>Home ➜ </button></Link>  
        </div>
      </div>
    )
  }
}

export default Resume
