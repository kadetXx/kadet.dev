import React, { Component } from 'react'
import './Work.css'
import Project from '../utils/project/Project'

export class Work extends Component {

  state = {
    projects: [
      {
        id: 1,
        title: 'Animepanda',
        description: 'App landing page',
        github: 'https://github.com/kadetXx/animepanda',
        live: 'https://animepanda.herokuapp.com'
      },

      {
        id: 2,
        title: 'MicroAPI',
        description: 'Opensource microservices',
        github: 'https://github.com/microapi/dashboard',
        live: 'https://microapi.dev'
      },

      {
        id: 3,
        title: 'customerPay',
        description: 'Opensource microservices',
        github: 'https://github.com/microapi/dashboard',
        live: 'https://customerpay.me'
      },

      {
        id: 4,
        title: 'Github Scanner',
        description: 'Lookup github profiles',
        github: 'https://github.com/microapi/dashboard',
        live: 'https://customerpay.me'
      },

      {
        id: 5,
        title: 'Travertic',
        description: 'Real time multiplayer tic tac toe game',
        github: 'https://github.com/microapi/dashboard',
        live: 'https://travertic.herokuapp.com'
      },

      {
        id: 5,
        title: 'Instathoughts',
        description: 'CRUD social app',
        github: 'https://github.com/microapi/dashboard',
        live: 'https://travertic.herokuapp.com'
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
