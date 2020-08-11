import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Base from './components/base/Base'
import Work from './components/work/Work'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'

function App() {

  return (
    <div className="App">
      <Router>
        <div className="container">
          <div className="fixed">
            <Base />
          </div>

          <div className="main">
        
              <div className="pages_container">
                <Route exact path='/' component={Work} />
                <Route exact path='/resume' component={Resume} />
                <Route exact path='/contact' component={Contact} />
              </div>

          </div>
        </div>
      </Router>
    </div>
  );

}

export default App;
