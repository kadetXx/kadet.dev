import React, { Component } from 'react'
import './Form.css'

export class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form_section">
            <label>
              <span>Your Name*</span>
              <input type="text" name="name" placeholder='Enter your name' />
            </label>
          </div>

          <div className="form_section">
            <label>
              <span>Your Email*</span>
              <input type="text" name="email" placeholder='Enter your email' />
            </label>
          </div>

          <div className="form_section">
            <label>
              <span>Your Message*</span>
              <textarea name="message" rows="10"></textarea>
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
