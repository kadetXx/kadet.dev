import React, { Component } from 'react'
import Base from './Base'
import './Mobile.css'
import { Link } from 'react-router-dom'

export class Mobile extends Component {

  componentDidMount() {
    this.props.overflow('hidden');
  }

  componentWillUnmount() {
    this.props.overflow('auto');
  }

  render() {
    return (
      <div id='mobile'>
        <Base menu={this.props.menu} />
        <div className="button_container">
          <Link to='/work'> <button>Explore ➜</button></Link>
        </div>
        <div className="social_buttons">
          <a href="https://github.com/kadetXx"><i className='fab fa-github'></i></a> 
          <a href="https://twitter.com/kadetXx"><i className='fab fa-twitter'></i></a>
          <a href="http"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    )
  }
}

export default Mobile
