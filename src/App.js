// import React from 'react'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Base from './components/base/Base'
import Work from './components/work/Work'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'
import Mobile from './components/base/Mobile'
import Header from './components/utils/header/Header'



export class App extends Component {

  state = {
    menu: ['active_menu', '', ''],
  }

  activeMenu(id) {

    switch (id) {
      case 0:
        this.setState({menu: ['active_menu', '', '']})
        break;
      
      case 1:
        this.setState({menu: ['', 'active_menu', '']})
        break;
      
      case 2: 
        this.setState({menu: ['', '', 'active_menu']})
        break
    
      default:
        break;
    }
 
  }

  render() {
    return (
      <div className="App">
        <Router>

          <div className='mobile_container'>
            <Header />
            <div>
              <Route exact path='/' render={props => (<Mobile menu={this.state.menu} />)} />
              <Route exact path='/work' render={props => (<Work menu={this.state.menu} activeMenu={this.activeMenu.bind(this)} />)} />
              <Route exact path='/resume' render={props => (<Resume menu={this.state.menu} activeMenu={this.activeMenu.bind(this)} />)}/>
              <Route exact path='/contact' render={props => (<Contact menu={this.state.menu} activeMenu={this.activeMenu.bind(this)} />)} />
            </div>

            <div className="social_buttons">
              <a href="https://github.com/kadetXx"><i className='fab fa-github'></i></a> 
              <a href="https://twitter.com/kadetXx"><i className='fab fa-twitter'></i></a>
              <a href="http"><i className="fab fa-linkedin"></i></a>
          </div>
          </div>



          <div className="container">
            <div className="fixed">
              <Base menu={this.state.menu} />
            </div>

            <div className="main">
  
              <div className="pages_container">
                <Route exact path='/' render={props => (<Work  menu={this.state.menu} activeMenu={this.activeMenu.bind(this)}/>)} />
                <Route exact path='/work' render={props => (<Work  menu={this.state.menu} activeMenu={this.activeMenu.bind(this)}/>)} />
                <Route exact path='/resume' render={props => (<Resume menu={this.state.menu} activeMenu={this.activeMenu.bind(this)} />)} />
                <Route exact path='/contact' render={props => (<Contact menu={this.state.menu} activeMenu={this.activeMenu.bind(this)} />)} />

              </div>

            </div>
          </div>

        </Router>
      </div>
    )
  }

}

export default App

