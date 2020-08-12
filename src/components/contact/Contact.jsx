import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Form from '../utils/form/Form'
import './Contact.css'

export class Contact extends Component {

  componentDidMount() {
    this.props.activeMenu(2)
  }

  render() {
    return (
      <div className='contact'>
        <Form />
        <div className="go_button_container">
            <Link to='/work'> <button> <b>➜ </b> Work</button></Link>
            <Link to='/resume'> <button> Resume ➜ </button></Link>  
        </div>
      </div>
    )
  }
}

export default Contact
