import React, { Component } from 'react'
import './base.css'
import avi from '../../assets/svgs/avi.svg'
import navLine from '../../assets/svgs/menu-line.svg'
import logo from '../../assets/svgs/kadet.svg'
import arrow from '../../assets/svgs/arrow.svg'

export class base extends Component {

  render() {

    return (
      <div className='left_container'>
        <div className="hero">
          <div className="intro_box">
            <h1>Hi there! I'm <br/> Collins Enebeli.</h1>
            <div><img src={avi} alt="avatar"/></div>
          </div>

          <div className="description">
            <p>Self taught frontend developer, passionate and dedicated in bringing ideas from pixels to live scalable products. I develop responsive applications with user experience as top priority. I’m always ready to adapt according to project specifications irrespective of stack.</p>
          </div>
        </div>
  

        <nav>
          <ul>
            <li>
              <small>01</small><img src={navLine} alt="menu bullet"/> <small> WORK</small>
            </li>

            <li>
              <small>02</small><img src={navLine} alt="menu bullet"/> <small> RESUME</small>
            </li>

            <li>
              <small>03</small><img src={navLine} alt="menu bullet"/> <small> CONTACT</small>
            </li>
          </ul>
        </nav>

        <div className="footer">
          <img src={logo} alt=""/>
          <div className="social">
            <p><i className='fab fa-github'></i> Github <img src={arrow} alt="pointer"/></p>
            <p><i className='fab fa-twitter'></i> Twitter <img src={arrow} alt="pointer"/></p>
          </div>
        </div>
      </div>
    )
  }

}

export default base
