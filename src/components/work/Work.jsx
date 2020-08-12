import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Work.css'
import Project from '../utils/project/Project'
import uuid from 'react-uuid';

export class Work extends Component {

 
  state = {
    projects: [

      {
        id: uuid(),
        title: 'Kadet.dev',
        description: 'My Portfolio Site',
        github: 'https://github.com/kadetXx/kadet.dev',
        live: 'https://kadet.dev',
        stack: 'React',
        isPrivate: false
      },

      {
        id: uuid(),
        title: 'Animepanda',
        description: 'Mobile App landing page',
        github: 'https://github.com/kadetXx/animepanda',
        live: 'https://animepanda.herokuapp.com',
        stack: 'Sass + Javsacript + PHP',
        isPrivate: false
      },

      {
        id: uuid(),
        title: 'MicroAPI',
        description: 'Opensource microservices',
        github: '',
        live: 'https://microapi.dev',
        stack: 'Sass + Javsacript + Django',
        isPrivate: true
      },

      {
        id: uuid(),
        title: 'customerPay',
        description: 'Debt/Store management web application',
        github: '',
        live: 'https://customerpay.me',
        stack: 'Bootstrap + Javsacript + Laravel',
        isPrivate: true
      },

      {
        id: uuid(),
        title: 'Travertic',
        description: 'Real time multiplayer tic tac toe game',
        github: 'https://github.com/kadetXx/tictactoe',
        live: 'https://travertic.herokuapp.com',
        stack: 'Node + Socket.io',
        isPrivate: false
      },

      {
        id: uuid(),
        title: 'Github Scanner',
        description: 'Lookup github profiles',
        github: 'https://github.com/kadetXx/github-profile-scanner',
        live: 'https://github-profile-scanner.now.sh/',
        stack: 'ES6 + Github API',
        isPrivate: false
      },

      {
        id: uuid(),
        title: 'Instathoughts',
        description: 'CRUD social media app',
        github: 'https://github.com/kadetXx/insta_thoughts',
        live: 'https://instathoughts.netlify.app/',
        stack: 'ES6 + Firebase',
        isPrivate: false
      },

      {
        id: uuid(),
        title: 'KadNavbar',
        description: 'Responsive navbar component',
        github: 'https://github.com/kadetXx/kadnavbar',
        live: 'https://kadetxx.github.io/kadnavbar/',
        stack: 'CSS + Javascript',
        isPrivate: false
      }
    ]
  }

  componentDidMount() {
    this.props.activeMenu(0)
  }

  render() {
    return (
      <div className='work'>
        <div className="portfolio_showcase">
          {this.state.projects.map((project) => ( <Project key={project.id} data={project} /> ))}
        </div>

        <div className="go_button_container">
            <Link to='/'> <button> <b>➜ </b> Home</button></Link>
            <Link to='/contact'> <button>Contact ➜ </button></Link>  
        </div>
      </div>
    )
  }
}

export default Work
