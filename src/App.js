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
    body: 'hidden',
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

  async overflow(data) {
    this.setState({body: data});
  }


  render() {
    return (
      <div className="App">
        <Router>

          <div className='mobile_container'>
            <Header overflow={this.overflow.bind(this)} />
            <div>
              <Route exact path='/' render={props => (<Mobile menu={this.state.menu} overflow={this.overflow.bind(this)} />)} />
              <Route exact path='/work' render={props => (<Work menu={this.state.menu} activeMenu={this.activeMenu.bind(this)} />)} />
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

