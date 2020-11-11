// import React from 'react'
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import "./App.css";
import Base from "./components/base/Base";
import Work from "./components/work/Work";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Mobile from "./components/base/Mobile";
import Header from "./components/utils/header/Header";
import Error from "./components/error404/Error";

export class App extends Component {
  state = {
    menu: ["active_menu", "", ""],
  };

  activeMenu(id) {
    switch (id) {
      case 0:
        this.setState({ menu: ["active_menu", "", ""] });
        break;

      case 1:
        this.setState({ menu: ["", "active_menu", ""] });
        break;

      case 2:
        this.setState({ menu: ["", "", "active_menu"] });
        break;

      default:
        break;
    }
  }

  setFullscreen(value) {
    this.setState({...this.state, fullScreen: value})
  }

  render() {

    return (
      <div className='App'>
        <Router>
          <div className='mobile_container' id={this.state.fullScreen ? "fullscreen" : ''}>
            <Header />
            <div>
              <Switch>
                <Route
                  exact
                  path='/'
                  render={(props) => <Mobile menu={this.state.menu} fullScreen={this.setFullscreen.bind(this)} />}
                />

                <Route
                  exact
                  path='/work'
                  render={(props) => (
                    <Work
                      menu={this.state.menu}
                      activeMenu={this.activeMenu.bind(this)}
                    />
                  )}
                />

                <Route
                  exact
                  path='/resume'
                  render={(props) => (
                    <Resume
                      menu={this.state.menu}
                      activeMenu={this.activeMenu.bind(this)}
                    />
                  )}
                />

                <Route
                  exact
                  path='/contact'
                  render={(props) => (
                    <Contact
                      menu={this.state.menu}
                      activeMenu={this.activeMenu.bind(this)}
                    />
                  )}
                />

                <Route component={Error} />
              </Switch>
            </div>

            <div className='social_buttons'>
              <a
                href='https://github.com/kadetXx'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-github'></i>
              </a>
              <a
                href='https://twitter.com/kadetXx'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-twitter'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/collins-enebeli-online/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-linkedin'></i>
              </a>

              <div className='credits'>
                <p>
                  Inspired by
                  <a
                    href='https://sarahdayan.dev/'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    Sarah Dayan 
                  </a> {''}
                    and
                  <a
                    href='https://dribbble.com/NicolasMzrd'
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    Nicolas Meuzard.
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='fixed'>
              <Base menu={this.state.menu} />
            </div>

            <div className='main'>
              <div className='pages_container'>
                <Switch>
                  <Route
                    exact
                    path='/'
                    render={(props) => (
                      <Work
                        menu={this.state.menu}
                        activeMenu={this.activeMenu.bind(this)}
                      />
                    )}
                  />

                  <Route
                    exact
                    path='/work'
                    render={(props) => (
                      <Work
                        menu={this.state.menu}
                        activeMenu={this.activeMenu.bind(this)}
                      />
                    )}
                  />

                  <Route
                    exact
                    path='/resume'
                    render={(props) => (
                      <Resume
                        menu={this.state.menu}
                        activeMenu={this.activeMenu.bind(this)}
                      />
                    )}
                  />

                  <Route
                    exact
                    path='/contact'
                    render={(props) => (
                      <Contact
                        menu={this.state.menu}
                        activeMenu={this.activeMenu.bind(this)}
                      />
                    )}
                  />

                  <Route component={Error} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
