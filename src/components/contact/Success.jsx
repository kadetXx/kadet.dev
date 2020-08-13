import React, { Component } from 'react'
import './Success.css'
import { Link } from 'react-router-dom'

export class Success extends Component {
  render() {
    return (
      <div id='success'>
        <div className='error_container'>
          <h1><i className='fas fa-check-double'></i></h1>
          <h2>Your message has been sent</h2>
          <p>Thanks for reaching out. Don't worry, I normally reply mails within 24hrs of delivery.  </p>
          <div className="go_button_container">
            <Link to='/contact'> <button>Thanks</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Success
