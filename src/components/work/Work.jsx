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
        github: '',
        live: 'https://microapi.dev',
        stack: 'Sass + Javsacript + Django',
        isPrivate: true
      },

      {
        id: 3,
        title: 'customerPay',
        description: 'Debt/Store management web application',
        github: '',
        live: 'https://customerpay.me',
        stack: 'Bootstrap + Javsacript + Laravel',
        isPrivate: true
      },

      {
        id: 4,
        title: 'Travertic',
        description: 'Real time multiplayer tic tac toe game',
        github: 'https://github.com/kadetXx/tictactoe',
        live: 'https://travertic.herokuapp.com',
        stack: 'Node + Socket.io',
        isPrivate: false
      },

      {
        id: 5,
        title: 'Github Scanner',
        description: 'Lookup github profiles',
        github: 'https://github.com/kadetXx/github-profile-scanner',
        live: 'https://github-profile-scanner.now.sh/',
        stack: 'ES6 + Github API',
        isPrivate: false
      },

      {
        id: 6,
        title: 'Instathoughts',
        description: 'CRUD social app',
        github: 'https://github.com/kadetXx/insta_thoughts',
        live: 'https://instathoughts.netlify.app/',
        stack: 'ES6 + Firebase',
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
      </div>
    )
  }
}

export default Work
