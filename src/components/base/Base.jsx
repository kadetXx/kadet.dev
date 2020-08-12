import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Base.css'
import avi from '../../assets/svgs/avi.svg'
import navLine from '../../assets/svgs/menu-line.svg'
import logo from '../../assets/svgs/kadet.svg'
import arrow from '../../assets/svgs/arrow.svg'

export class Base extends Component {

  render() {

    return (
      
      <div className='base_container'>
        <div className="hero">
          <div className="intro_box">
            <h1>Hello World! <br/> I'm Collins Enebeli.</h1>
            <div className='avi'><img src={avi} alt="avatar"/></div>
          </div>

          <div className="description">
            <p> <span>I'm a self taught frontend developer. I spend most of my time writing codes for applications using Javascript,</span> <span className='highlight'>React js</span><span> and a little Vue js. I use CSS and </span> <span className='highlight'>SASS </span> <span> to design efficient user interfaces. I love talking about tech and will be sharing some experiences on my blog</span></p>
          </div>

          <div className="button_container">
            <Link to='/work'> <button>Explore ➜</button></Link>
          </div>

          <div className="social_buttons">
            <a href="https://github.com/kadetXx"><i className='fab fa-github'></i></a> 
            <a href="https://twitter.com/kadetXx"><i className='fab fa-twitter'></i></a>
            <a href="http"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
  

        <nav>
          <ul>
            <li className={this.props.menu[0]}>
              <small>01 <Link to='/'><img src={navLine} alt="menu bullet"/> WORK</Link></small>
            </li>

            <li className={this.props.menu[1]}>
              <small>02 <Link to='/resume'><img src={navLine} alt="menu bullet"/> RESUME</Link></small>
            </li>

            <li className={this.props.menu[2]}>
            <small>03 <Link to='/contact'><img src={navLine} alt="menu bullet"/> CONTACT</Link></small>
            </li>
          </ul>
        </nav>

        <div className="footer">
          <img src={logo} alt=""/>
          <div className="social">
            <a href='https://github.com/kadetXx' target='_blank' rel="noopener noreferrer"><i className='fab fa-github'></i> Github <img src={arrow} alt="pointer"/></a>
            <a href='https:/twitter.com/kadetXx' target='_blank' rel="noopener noreferrer"><i className='fab fa-twitter'></i> Twitter <img src={arrow} alt="pointer"/></a>
          </div>
        </div>
      </div>
    )
  }

}

export default Base
