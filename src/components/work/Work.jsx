import React, { Component } from 'react'
import './Work.css'
import Project from '../utils/project/Project'

export class Work extends Component {

  state = {
    projects: [
      {
        id: 1,
        title: 'Animepanda',
        description: 'Mobile App landing page',
        github: 'https://github.com/kadetXx/animepanda',
        live: 'https://animepanda.herokuapp.com',
        stack: 'Sass + Javsacript + PHP',
        isPrivate: false
      },

      {
        id: 2,
        title: 'MicroAPI',
        description: 'Opensource microservices',
        github: 'https://github.com/microapi/dashboard',
        live: 'https://microapi.dev',
        stack: 'Sass + Javsacript + Django',
        isPrivate: true
      },

      {
        id: 3,
        title: 'customerPay',
        description: 'Debt/Store management web application',
        github: 'https://github.com/microapi/dashboard',
        live: 'https://customerpay.me',
        stack: 'Bootstrap + Javsacript + Laravel',
        isPrivate: true
      },

      {
        id: 4,
        title: 'Travertic',
        description: 'Real time multiplayer tic tac toe game',
        github: 'https://github.com/microapi/dashboard',
        live: 'https://travertic.herokuapp.com',
        stack: 'Node + Socket.io',
        isPrivate: false
      },

      {
        id: 5,
        title: 'Github Scanner',
        description: 'Lookup github profiles',
        github: 'https://github.com/microapi/dashboard',
        live: 'https://customerpay.me',
        stack: 'ES6 + Github API',
        isPrivate: false
      },

      {
        id: 6,
        title: 'Instathoughts',
        description: 'CRUD social app',
        github: 'https://github.com/microapi/dashboard',
        live: 'https://travertic.herokuapp.com',
        stack: 'ES6 + Firebase',
        isPrivate: false
      }
    ]
  }

  render() {
    return (
      <div className='work'>
        <div className="portfolio_showcase">
          {this.state.projects.map((project) => ( <Project key={project.id} data={project} /> ))}
        </div>
      </div>
    )
  }
}

export default Work
